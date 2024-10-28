"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

type DataSectionContextProviderProps = {
  children: React.ReactNode;
};

export type Product = {
  id: string;
  name: string;
  creator: string;
  origin: string;
  views: string;
  price: {
    usd: number;
    eth: number;
  };
  size: {
    ft: number;
  };
  url: string;
};

type DataSectionContextType = {
  productList: Product[];
  setProductList: any;
  cart: any;
  setCart: React.Dispatch<React.SetStateAction<any>>;
  favorite: any;
  setFavorite: React.Dispatch<React.SetStateAction<any>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const DataSectionContext = createContext<DataSectionContextType | null>(null);

export default function DataSectionContextProvider({
  children,
}: DataSectionContextProviderProps) {
    
  // Generic fetch function to load data from different endpoints
  const fetchData = async (endpoint: string, setData: (data: any) => void) => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setData(data.products || data); // Adjust based on endpoint structure
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [productList, setProductList] = useState<Product[]>([]);
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [name, setName] = useState("");

  // Example usage: Fetching product data
  useEffect(() => {
    const productUrl =
      "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/products.json";
    fetchData(productUrl, setProductList);
  }, []);

  // Example usage: Fetching carousel data
  useEffect(() => {
    const carouselUrl =
      "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/carousel.json";
    fetchData(carouselUrl, setFavorite); // Setting favorite as an example for carousel
  }, []);

  return (
    <DataSectionContext.Provider
      value={{
        productList,
        setProductList,
        cart,
        setCart,
        favorite,
        setFavorite,
        name,
        setName,
      }}
    >
      {children}
    </DataSectionContext.Provider>
  );
}

export function useDataSectionContext() {
  const context = useContext(DataSectionContext);
  console.log("I hate it here", context);
  if (context === null) {
    throw new Error(
      "useDataSectionContext must be used within a DataSectionContextProvider"
    );
  }

  return context;
}
