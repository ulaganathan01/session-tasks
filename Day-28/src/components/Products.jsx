import { fetchProducts } from "../redux/reducers/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products);
  }, []);
  return (
    <div className="row gap-4 ms-4 mb-3">
        <h1 className='text-center my-3'>React Redux App</h1>
      {products.map((product, index) => {
        return (
          <div className="card col-lg-4 col-md-3 col-sm-2" style={{width: "18rem"}} key={index}>
            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {product.description}
              </p>
              <h5 className="card-subtitle mb-2 text-body-secondary">Rs.{product.price}</h5>
            </div>
            <Link to="price" state={product} className="btn btn-primary mb-2">
                Buy Now
            </Link>
          </div>
        );
      })}
    </div>
  );
}
