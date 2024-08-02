import { ReactComponent as Cart } from "../../assets/cart.svg";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { products } = useContext(CartContext);
  return (
    <div className="navbar">
      <div className="container">
        <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          E-Shop
        </h1>
        <div>
          <Cart onClick={() => navigate("/cart")} className="cart-style" />
          <span id="lblCartCount">{products.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
