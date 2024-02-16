"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};
function ContextProvider({ children }: ContextProviderProps) {
  const url =
    "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457";
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [name, setName] = useState("");

  //provide context for the products using the above url
  useEffect(() => {
    fetch(`${url}/products.json`)
      .then((result) => result.json())
      .then((data) => setProducts(data));
  }, []);

  

}
