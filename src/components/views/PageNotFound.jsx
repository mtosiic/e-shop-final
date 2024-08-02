import { useNavigate } from "react-router-dom";
import ProductsLink from "../navbar/ProductsLink";
import "./style.css";

const PageNotFound = () => {
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
      <h1 className="text-style">Page Not Found</h1>
    </>
  );
};

export default PageNotFound;
