import dotenv from "dotenv";
import cheerio from "cheerio";
import { readFileSync, appendFileSync } from "node:fs";
import { createTransport } from "nodemailer";

import pages from "./data.js";

dotenv.config();

const main = async () => {
  for (const page of pages) {
    console.log(`Fetching ${page.title}`);

    const markup = await fetchMarkup(page.url);
    const $ = cheerio.load(markup);

    const listings = $(page.listing);

    page.results = [];

    listings.map((i, listing) => {
      page.results[i] = {};

      // Fetch data from listing
      page.data.map(({ name, selector, attr, prefix, manipulator }) => {
        let value = attr
          ? $(listing).find(selector).attr(attr).trim()
          : $(listing).find(selector).text().trim();

        if (prefix) value = prefix + value;
        if (manipulator) value = manipulator(value);

        page.results[i][name] = value;
      });

      // Generate hash
      page.results[i]["hash"] = String(
        hash(page.results[i][Object.keys(page.results[i])[0]])
      );
    });
  }

  notify();
};

const notify = () => {
  const hashes = getHashes();

  for (const page of pages) {
    const items = page.results.filter((item) => {
      if (!hashes.includes(item.hash)) {
        appendHash(item.hash);
        return item;
      } else {
        return false;
      }
    });

    if (items.length) {
      console.log(`Sending notifications`);
      const transporter = getTransporter();
      transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: `Kravler found ${items.length} new items`,
        html: `<pre>${JSON.stringify(items, null, 2)}</pre>`,
      });
    }
  }
};

const getTransporter = () => {
  const transporter = createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  return transporter;
};

const appendHash = (hash) => {
  appendFileSync("tmp", `${hash}\n`, "utf8");
};

const getHashes = () => {
  return readFileSync("tmp", { encoding: "utf8", flag: "r" }).split("\n");
};

const fetchMarkup = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Unable to fetch ${url}`);
  const data = await res.text();
  return data;
};

const hash = (s) =>
  s.split("").reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

main();
