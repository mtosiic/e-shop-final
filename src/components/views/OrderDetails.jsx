import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({
    name: "",
    surname: "",
    address: "",
    city: "",
    zipCode: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setOrderData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmit} className="order-details">
      <h1 className="m-4">Shipping details</h1>
      <div>
        <label className="text-end">Name:</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div>
        <label>Surname:</label>
        <input type="text" name="surname" onChange={handleChange} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" onChange={handleChange} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" onChange={handleChange} />
      </div>
      <div>
        <label>Zip Code:</label>
        <input type="number" name="zipCode" onChange={handleChange} />
      </div>
      <button className="btn btn-color">Finish order</button>
    </form>
  );
};

export default OrderDetails;
