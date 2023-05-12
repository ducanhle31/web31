/* 
import { useState, useEffect } from "react";

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.product;
};
export default function Posts() {

  const [products, setProducts] = useState([]);
  useEffect(() =>{
    getProducts().then(setProducts);
},[] ) ;

  return (
    <div>
      {products.map((product) => (
        <h3>{product.title} </h3>
      ))}
    </div>
  );
}
 */