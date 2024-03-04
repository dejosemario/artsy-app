import featured1 from "@/public/images/featured/Featured-product-1.png";
import featuredMobile from "@/public/images/featured/Featured-product-1a.png";
import featured2 from "@/public/images/featured/Featured-product-2.png";
import featuredMobile2 from "@/public/images/featured/Featured-product-2a.png";
import featured3 from "@/public/images/featured/Featured-product-3.png";
import featuredMobile3 from "@/public/images/featured/Featured-product-3a.png";

import bidder6 from "@/public/images/livebidders/bidder6.png";
import bidder1 from "@/public/images/livebidders/bidder1.png";
import bidder2 from "@/public/images/livebidders/bidder2.png";
import bidder3 from "@/public/images/livebidders/bidder3.png";
import bidder4 from "@/public/images/livebidders/bidder4.png";
import bidder5 from "@/public/images/livebidders/bidder5.png";

export const navLinks = [
  {
    name: "Home",
    urlPath: "/",
  },
  {
    name: "Marketplace",
    urlPath: "/marketplace",
  },
  {
    name: "Auctions",
    urlPath: "/auctions",
  },
  {
    name: "Drop",
    urlPath: "/drop",
  },
] as const;

export const infoData = [
  {
    name: "Blog",
    urlPath: "/#",
  },
  {
    name: "Wallets",
    urlPath: "/#",
  },
  {
    name: "Rates",
    urlPath: "/#",
  },
  {
    name: "High bids",
    urlPath: "/#",
  },
] as const;

export const articles = [
  {
    title: "The Boolean Egyptian",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    mobileImg: featuredMobile,
    img: featured1,
  },
  {
    title: "Are we there yet?",
    body: "aecati repudiandae vel ex iusto praesentium placeat, adipisci soluta hic aperiam omnis consequuntur facilis quo, quibusdam quidem. Sed eveniet a obcaecati quis at eligendi nulla, voluptates praesentium dolor",
    mobileImg: featuredMobile2,
    img: featured2,
  },
  {
    title: "Oloibiri",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
    mobileImg: featuredMobile3,
    img: featured3,
  },
] as const;

export const bidders = [
  {
    id: "bidder1",
    name: "Taylor Ellen",
    text: "$45.00 instand bid",
    image: bidder6,
  },
  {
    id: "bidder2",
    name: "Ella Flynn",
    text: "Tight bid",
    image: bidder2,
  },
  {
    id: "bidder3",
    name: "Uncle Luca",
    text: "instand bid",
    image: bidder3,
  },
  {
    id: "bidder4",
    name: "Opeyemi Tiwalope",
    text: "$45.00",
    image: bidder4,
  },
  {
    id: "bidder5",
    name: "Celestina Quinn",
    text: "gm frens! ready to bidddd",
    image: bidder5,
  },
  {
    id: "bidder6",
    name: "Sammy Ellen",
    text: "i love this. $20.00 for me",
    image: bidder1,
  },
];
