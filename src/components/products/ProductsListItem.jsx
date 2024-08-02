import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./style.css";
const ProductsListItem = ({ product }) => {
  // const { addToCart } = useContext(CartContext);
  const { productsDispatch } = useContext(CartContext);
  const addToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(product);
    productsDispatch({ type: "ADD_PRODUCT", payload: product });
  };

  return (
    <Link to={`/products/${product.id}`} className="link-style">
      <div className="card" style={{ zIndex: "0" }}>
        <img className="card-img-top" src={product.image} alt="" />
        <div className="card-body">
          <h6 className="card-title">{product.title}</h6>
          <h4 className="card-text">${product.price}</h4>
          <button className="btn card-btn" onClick={addToCart}>
            Add to card
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductsListItem;
