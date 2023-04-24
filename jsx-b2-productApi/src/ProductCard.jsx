

/***
 * @template/ product
 * 
 * @property { number} id - id sản phẩm
 * @protecty {string} title - tên sản phẩm 
 * 
 * 
 * 
 */

/***
 * @property ProductsCard 
 */

/***
 * hiển thị một card sản phẩm 
 * 
 */



import React from "react";
import "./ProductCard.css";
import PropType from "prop-types";
export default function ProductCard({ info }) {
  return (
    <div className="product-card">
      <div className="product-thumbnail">
        <img src={info.thumbnail} alt={info.title} />
      </div>
      <div className="product-name">
        <h4>{info.title}</h4>
      </div>
      <div className="product-des">
        <p>{info.description}</p>
      </div>
      <div className="product-rating-price">
        <div className="product-rating">
          <ion-icon name="star-outline"></ion-icon> <span>{info.rating}</span>
        </div>
        <div className="product-price">
          <p>${info.price}</p>
        </div>
      </div>
    </div>
  );
}
ProductCard.defaultProps = {
  info: {
    thumbnail: `https://prod.assets.earlygamecdn.com/images/Radahn.jpg?mtime=1664787485`,
    description:
      "Radahn was the son of Queen Rennala and Radagon, and became a demigod stepchild after his father's marriage to Queen Marika.[2] He is regarded as the mightiest hero of the demigods,[3] and was one of the strongest participants of the Shattering.",
    title: "Starscourge Radahn",
    rating: 5,
    price: 100, 
    
  },
};

ProductCard.propTypes = {
  info: PropType.shape({
    name: PropType.string,
    price: PropType.number,
  }),
};
