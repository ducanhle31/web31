


import { useState, useEffect } from "react";

import "./App.css";
import ProductCard from "./ProductCard";
function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function getProductList() {
      const res = await fetch("https://dummyjson.com/products");
      const resJSON = await res.json();
      const { products } = resJSON;
      setProductList(products);
    }
    getProductList();
  }, []);
  const list = productList.map((product) => (
    <ProductCard key={product.id} info={product} /> 
  ));
  return (
    <div>
      <div className="product-list">{list} </div>
   

    </div>
  );
}

export default App;
