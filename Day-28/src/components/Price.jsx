import { useState } from "react";
import { useLocation } from "react-router-dom"


export default function Price(){
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    const product = location.state;
    
    return(
        <>
        <div className="card mt-3 w-100">
            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h4 className="card-title">{product.title}</h4>
              <p className="card-text">
                {product.description}
              </p>
              <h5 className="card-subtitle mb-2 text-body-secondary">Rs.{product.price}</h5>
            </div>
        </div>
        <div>
            <p><span className="fw-bold">Price:</span> Rs.{product.price}</p>
            <hr />
            <label htmlFor="quantity" className="fw-bold">Quantity: </label>
            <input type="number" min="1" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            <p className="fw-bold">Shipping: FREE</p>
            <hr />
            <p><span className="fw-bold">Total Price:</span> Rs.{Number(quantity) * Number(product.price)}</p>
            <hr />
        </div>
        </>
    )
}
