import featured1 from "@/public/images/featured/Featured-product-1.png";
import featuredMobile from "@/public/images/featured/Featured-product-1a.png";
import featured2 from "@/public/images/featured/Featured-product-2.png";
import featuredMobile2 from "@/public/images/featured/Featured-product-2a.png";
import featured3 from "@/public/images/featured/Featured-product-3.png";
import featuredMobile3 from "@/public/images/featured/Featured-product-3a.png";


export const navLinks = [
    {
        name: 'Home',
        urlPath: '/',
    },
    {
        name: 'Marketplace',
        urlPath: '/marketplace',
    },
    {
        name: 'Auctions',
        urlPath: '/auctions',
    },
    {
        name: 'Drop',
        urlPath: '/drop',
    }
] as const;

export const infoData = [
    {
        name: 'Blog',
        urlPath: '/#',
    },
    {
        name: 'Wallets',
        urlPath: '/#',
    },
    {
        name: 'Rates',
        urlPath: '/#',
    },
    {
        name: 'High bids',
        urlPath: '/#',
    }
] as const;

export  const articles = [
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
