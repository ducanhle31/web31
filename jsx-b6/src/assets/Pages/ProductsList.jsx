import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return data["products"];
};

const promise = getProducts();

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    promise.then(setProducts);
  }, []);

  const cards = products.map((product) => (
    <Link key={product.id}>
      <article className="product-card">
        <img
          className="product-thumbnail"
          src={product.thumbnail}
          alt={product.title}
        />

        <div className="product-info"></div>
      </article>
    </Link>
  ));

  return (
    <main className="main">
      <h1 className="heading">Product List</h1>
    </main>
  );
}
