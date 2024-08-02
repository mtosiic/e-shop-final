import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
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
      <h1>Terms Of Service</h1>
    </>
  );
};

export default TermsOfService;
