import Header from "@/components/molecules/header";
import Footer from "../components/molecules/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";


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
      <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
