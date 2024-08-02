import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartListItem from "./CartListItem";
import { useNavigate } from "react-router-dom";
import EmptyCartBtn from "./EmptyCartBtn";
import OrderForm from "../orderForm/OrderForm";
import OrderButton from "./OrderButton";

const CartList = () => {
  const { products } = useContext(CartContext);
  const navigate = useNavigate();
  const backBtn = () => {
    navigate("/products");
  };
  let total = 0;

  products.forEach((item) => {
    total += item.product.price;
  });
  return products.length ? (
    <div className="order-wrapper">
      <ul className="cart-list">
        {products.map((product) => (
          <CartListItem key={product.id} product={product} />
        ))}
      </ul>
      <div className="empty-wrapper">
        <OrderButton />
        <span className="total-price">
          Total: ${Math.round(total * 100) / 100}
        </span>

        <EmptyCartBtn />
      </div>
    </div>
  ) : (
    <>
      <button className="btn btn-primary back-btn btn-color" onClick={backBtn}>
        Back to products
      </button>
      <div className="empty-cart">Your shopping cart is Empty</div>
    </>
  );
};

export default CartList;
