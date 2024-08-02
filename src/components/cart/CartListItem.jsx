import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ReactComponent as Trash } from "../../assets/trash.svg";
import "./style.css";

const CartListItem = ({ product }) => {
  const { productsDispatch } = useContext(CartContext);
  const item = product.product;
  const id = product.id;
  console.log(product);
  return (
    <li className="cart-list-item">
      <img src={item.image} alt={item.title} className="cart-img" />
      <span className="cart-title">{item.title}</span>
      <span className="cart-price">${item.price}</span>

      <Trash
        className="delete-btn"
        onClick={() => productsDispatch({ type: "REMOVE_PRODUCT", id: id })}
      />
    </li>
  );
};

export default CartListItem;
