import "./style.css";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const { productsDispatch } = useContext(CartContext);
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: null,
  });

  const handleChange = (e) => {
    const name = e.target.value;
    const value = e.target.value;

    setOrderData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    productsDispatch({ type: "EMPTY_CART" });
    navigate("/confirmation");
  };
  return (
    <form onSubmit={handleSubmit} className="container position-relative">
      <div className="order-form">
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} />

          <label>Address:</label>
          <input type="text" name="address" onChange={handleChange} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" onChange={handleChange} />

          <label>Zip Code:</label>
          <input type="number" name="zipCode" onChange={handleChange} />
        </div>
        <button className="btn order-btn">Finish order</button>
      </div>
    </form>
  );
};

export default OrderForm;
