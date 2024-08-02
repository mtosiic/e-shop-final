import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ContactUs = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [msgData, setMsgData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const goToProducts = () => {
    navigate("/products");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/msg");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMsgData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <button
        className="btn btn-primary back-btn btn-color"
        onClick={goToProducts}
      >
        Products
      </button>
      <form onSubmit={handleSubmit} className="order-details">
        <h1 className="m-4">Contact us</h1>
        <div>
          <label className="text-end">Name:</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea type="text" name="msg" onChange={handleChange} />
        </div>
        <button className="btn btn-color">Send message</button>
      </form>
    </>
  );
};

export default ContactUs;
