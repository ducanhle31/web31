import { Products } from "./Products";
import { useState } from "react";
import "./main.css";

const collections = [...new Set(Products.map((item) => item.title))];

function App() {
  const [filtered, setFiltered] = useState("all");

  const filteredProducts =
    filtered === "all"
      ? Products
      : Products.filter((item) => item.title === filtered);
  return (
    <div className="galleryWrapper">
      <div className="filterItem">
        <div>
          <button onClick={() => setFiltered("all")}>All</button>
        </div>
        {collections.map((item) => (
          <button key={item.id} onClick={() => setFiltered(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="row">
        <div className="galleryContainer column">
          {filteredProducts.map((item) => (
            <div key={item.id} className="galleryItem">
              <div className="imgitem">
                <img src={item.avatar} alt={item.first_name} />
              </div>
              <div className="titleitem">
                <div>{item.first_name}</div>
                <div className="price">{item.price}</div>
              </div>
              <div className="dec"> {item.dec}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
App.displayName = "GalleryFilter";
App.defaultProps = {};

export default App;
