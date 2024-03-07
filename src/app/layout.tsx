import Footer from "@/components/molecules/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/molecules/header";
import DataSectionContextProvider from "@/context/context";

const inter = Inter({ subsets: ["latin"] });

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
          <DataSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </DataSectionContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
