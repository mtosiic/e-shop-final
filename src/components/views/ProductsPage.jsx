import { useEffect, useContext, useState } from "react";
import api from "../../utils/api";
import ProductsList from "../products/ProductsList";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import { ProductsContext } from "../../context/ProductsContext";

const ProductsPage = () => {
  const { state, dispatch } = useContext(ProductsContext);
  const { products, loading, error } = state;
  const [value, setValue] = useState(undefined);
  const [selectValue, setSelectValue] = useState(undefined);
  const [categoryValue, setCategoryValue] = useState("products");

  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
    api
      .get("/products")
      .then((res) => {
        dispatch({
          type: "FETCH_PRODUCTS_SUCCESS",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_PRODUCTS_FAILURE",
          payload: error.response,
        });
      });
  }, []);

  const sort = (e) => {
    const selectValue = e.target.value;
    setValue(selectValue);
    switch (selectValue) {
      case "high-low":
        return {
          ...products,
          sorted: products.sort((a, b) => b.price - a.price),
        };
      case "low-high":
        return {
          ...products,
          sorted: products.sort((a, b) => a.price - b.price),
        };
      case "default":
        return {
          ...products,
          sorted: products.sort((a, b) => a.id - b.id),
        };
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const categoryValue = e.target.value;
    setSelectValue(e.target.value);
    setValue("default");
    switch (categoryValue) {
      case "electronics":
        return setCategoryValue("products/category/electronics");
      case "jewelery":
        return setCategoryValue("products/category/jewelery");
      case "men's clothing":
        return setCategoryValue("products/category/men's clothing");
      case "women's clothing":
        return setCategoryValue("products/category/women's clothing");
      case "/":
        return setCategoryValue("products");
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
    api
      .get(`${categoryValue}`)
      .then((res) => {
        dispatch({
          type: "FETCH_PRODUCTS_SUCCESS",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_PRODUCTS_FAILURE",
          payload: error.response,
        });
      });
  }, [categoryValue]);

  return (
    <div className="products-wrapper">
      <select value={selectValue} onChange={handleChange}>
        <option value="/">All Products</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
      <select value={value} onChange={sort}>
        <option value="default">Price filter</option>
        <option value="high-low">Price, descending</option>
        <option value="low-high">Price, ascending</option>
      </select>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <ProductsList products={products} />
      )}
    </div>
  );
};
export default ProductsPage;
