"use client";
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";

type DataSectionContextProviderProps = {
  children: React.ReactNode;
};

// export type Product = {
//   id: string;
//   name: string;
//   creator: string;
//   origin: string;
//   views: string;
//   price: {
//     usd: number;
//     eth: number;
//   };
//   size: {
//     ft: number;
//   };
//   url: string;
// };



type DataSectionContextType = {
  products: any;
  setProducts: any;
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
  const url =
    "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457";
  
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [name, setName] = useState("");


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${url}/products.json`);
        const data = await response.json();
        setProducts(data.products);
      } 
      catch (error) {
        console.log("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);


  return (
    <DataSectionContext.Provider
      value={{
        products,
        setProducts,
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
  if (context === null) {
    throw new Error(
      "useDataSectionContext must be used within a DataSectionContextProvider"
    );
  }
  
  return context;
}
