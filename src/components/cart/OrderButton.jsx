import { useNavigate } from "react-router-dom";

const OrderButton = () => {
  const navigate = useNavigate();
  const finishOrder = (e) => {
    e.preventDefault();
    navigate("/orderForm");
  };
  return (
    <>
      <button className="btn btn-color" onClick={finishOrder}>
        Order
      </button>
    </>
  );
};

export default OrderButton;
