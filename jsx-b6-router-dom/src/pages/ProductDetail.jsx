import { useState } from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom";


export default function ProductDetail() {
  const {productId} = useParams();
const [product, setProduct]= useState({});
useEffect(()=>{fetch("https://dummyjson.com/products/${productsId}")
  .then((res) => res.json())
  .then(setProduct);           
},[productId]);

  return (
    <main className="main">
      <img src="{product.thumbnail}" alt="{product.title}" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </main>
  );
}
