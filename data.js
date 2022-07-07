export default [
  {
    title: "J4U Gameboy Boxed Games",
    url: "https://www.j4u.co.jp/collections/game-boy-boxed-games?_=pf&pf_st_stock_status=true&sort=created-descending",
    listing: ".product",
    data: [
      {
        name: "Link",
        selector: ".product__image-wrapper",
        attr: "href",
        prefix: "https://www.j4u.co.jp",
      },
      {
        name: "Image",
        selector: ".product__image",
        attr: "src",
      },
      {
        name: "Title",
        selector: ".product__title",
      },
      {
        name: "Price",
        selector: ".product__price",
        manipulator: (str) => (str.replaceAll("Regular price\n", "").trim()),
      },
    ],
  },
  {
    title: "J4U Gameboy Advance Boxed Games",
    url: "https://www.j4u.co.jp/collections/game-boy-advance-boxed-games?_=pf&pf_st_stock_status=true",
    listing: ".product",
    data: [
      {
        name: "Link",
        selector: ".product__image-wrapper",
        attr: "href",
        prefix: "https://www.j4u.co.jp",
      },
      {
        name: "Image",
        selector: ".product__image",
        attr: "src",
      },
      {
        name: "Title",
        selector: ".product__title",
      },
      {
        name: "Price",
        selector: ".product__price",
        manipulator: (str) => (str.replaceAll("Regular price\n", "").trim()),
      },
    ],
  },
  {
    title: "DBA Gameboy",
    url: "https://www.dba.dk/soeg/?soeg=gameboy&sort=listingdate-desc",
    listing: ".dbaListing",
    data: [
      {
        name: "Link",
        selector: ".mainContent .expandable-box .listingLink",
        attr: "href",
      },
      {
        name: "Image",
        selector: ".pictureColumn .thumbnail",
        attr: "data-original",
      },
      {
        name: "Description",
        selector: ".mainContent .expandable-box .listingLink",
        manipulator: (str) => (str.replaceAll("\n", "<br/>").trim()),
      },
      {
        name: "Price",
        selector: "[title=Pris]",
      },
      {
        name: "Location",
        selector: ".mainContent li:nth-child(2) span",
      },
    ],
  },
  {
    title: "DBA Amiga 600",
    url: "https://www.dba.dk/soeg/?soeg=amiga+600&sort=listingdate-desc",
    listing: ".dbaListing",
    data: [
      {
        name: "Link",
        selector: ".mainContent .expandable-box .listingLink",
        attr: "href",
      },
      {
        name: "Image",
        selector: ".pictureColumn .thumbnail",
        attr: "data-original",
      },
      {
        name: "Description",
        selector: ".mainContent .expandable-box .listingLink",
        manipulator: (str) => (str.replaceAll("\n", "<br/>").trim()),
      },
      {
        name: "Price",
        selector: "[title=Pris]",
      },
      {
        name: "Location",
        selector: ".mainContent li:nth-child(2) span",
      },
    ],
  },
  {
    title: "DBA Amiga 1200",
    url: "https://www.dba.dk/soeg/?soeg=amiga+1200&sort=listingdate-desc",
    listing: ".dbaListing",
    data: [
      {
        name: "Link",
        selector: ".mainContent .expandable-box .listingLink",
        attr: "href",
      },
      {
        name: "Image",
        selector: ".pictureColumn .thumbnail",
        attr: "data-original",
      },
      {
        name: "Description",
        selector: ".mainContent .expandable-box .listingLink",
        manipulator: (str) => (str.replaceAll("\n", "<br/>").trim()),
      },
      {
        name: "Price",
        selector: "[title=Pris]",
      },
      {
        name: "Location",
        selector: ".mainContent li:nth-child(2) span",
      },
    ],
  },
];
