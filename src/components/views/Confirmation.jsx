import { useNavigate } from "react-router-dom";
import "./style.css";

const Confirmation = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
  };
  return (
    <>
      <button
        className="btn btn-primary back-btn btn-color"
        onClick={goToProducts}
      >
        Products
      </button>
      <h1 className="text-style">
        Thank you for your order. Your items will be delivered shortly.
      </h1>
    </>
  );
};

export default Confirmation;
