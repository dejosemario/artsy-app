import Header from "@/components/molecules/Header";
import Footer from "../components/molecules/Footer";
import "./globals.css";
import { Inter } from "next/font/google";


const inter =  Inter({ subsets: ["latin"], variable: "--font-inter" });


export const metadata = {
  title: "Artsy App",
  description:
    "A photo gallery that serves creators & collectors of art and photography generally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
