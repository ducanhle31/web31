import { ProductObject } from "./types";

/**
 * @typedef ProductCardProps
 *
 * @property {Product} product - Thông tin sản phẩm
 */

/**
 * Hiển thị một card sản phẩm
 *
 * @param {ProductCardProps} props
 */
export default function ProductCard({ product }) {
  return (
    <div className="product">
      <img
        className="product-thumbnail"
        src={product.thumbnail}
        alt={product.title}
      />

      <h3 className="product-title">{product.title}</h3>
    </div>
  );
}

ProductCard.displayName = "ProductCard";
ProductCard.defaultProps = {};

ProductCard.propTypes = {
  product: ProductObject,
};
