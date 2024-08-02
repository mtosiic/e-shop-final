import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./style.css";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { productsDispatch } = useContext(CartContext);

  useEffect(() => {
    api
      .get(`/products/${productId}`)
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

  const navigate = useNavigate();

  const { productId } = useParams();

  const backBtn = () => {
    navigate("/products");
  };

  const addToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(product);
    productsDispatch({ type: "ADD_PRODUCT", payload: product });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className="single-product-container container">
          <button
            className="btn btn-primary back-btn btn-color"
            onClick={backBtn}
          >
            Products
          </button>
          <div className="product-details">
            <img src={product.image} alt="" className="card-img" />
            <div className="details">
              <h3>{product.title}</h3>
              <span>{product.description}</span>
              <br />
              <br />
              <h6>
                Rating: {product.rating.rate} ({product.rating.count})
              </h6>
              <div className="d-flex align-items-center justify-content-around my-4 text-right">
                <h6 className="mx-3">${product.price}</h6>
                <button
                  className="btn btn-primary btn-color"
                  onClick={addToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
