import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const EmptyCartBtn = () => {
  const { productsDispatch } = useContext(CartContext);
  return (
    <>
      <button
        className="btn empty-cart-btn"
        onClick={() => productsDispatch({ type: "EMPTY_CART" })}
      >
        Empty cart
      </button>
    </>
  );
};

export default EmptyCartBtn;
