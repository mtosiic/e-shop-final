import ProductsListItem from "./ProductsListItem";

const ProductsList = ({ products }) => {
  return (
    <>
      <div className="row py-5 products-list">
        {products.map((product) => (
          <div className="col-sm" key={product.id}>
            <ProductsListItem product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
