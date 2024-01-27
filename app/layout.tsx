import Footer from "../components/molecules/Footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artsy App",
  description: "A photo gallery that serves creators & collectors of art and photography generally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        {children}
       <Footer />
      </body>
    </html>
  );
}
