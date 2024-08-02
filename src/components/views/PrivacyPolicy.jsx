import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
      <h1>Privacy Policy</h1>
    </>
  );
};

export default PrivacyPolicy;
