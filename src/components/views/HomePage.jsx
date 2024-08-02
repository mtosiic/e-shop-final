import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import "./style.css";

const HomePage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/products/14`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  const goToProducts = () => {
    navigate("/products");
  };
  return (
    <div className="container">
      <button
        className="btn btn-primary back-btn btn-color"
        onClick={goToProducts}
      >
        Products
      </button>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <Link to={`/products/${product.id}`} className="home-view">
          <img src={product.image} alt="" className="home-img" />
          <div className="home-details">
            <h3>{product.title}</h3>
            <span>{product.description}</span>
            <br />
            <br />
            <h6>
              Rating: {product.rating.rate} ({product.rating.count})
            </h6>
            <div className="d-flex align-items-center justify-content-around my-4 text-right">
              <h6 className="mx-3">${product.price}</h6>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default HomePage;
