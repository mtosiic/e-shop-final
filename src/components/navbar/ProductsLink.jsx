import { Link } from "react-router-dom";

const ProductsLink = () => {
  return (
    <div className="container position-relative">
      <Link to="/products" className="products-link">
        Products
      </Link>
    </div>
  );
};

export default ProductsLink;
