import { useContext } from "react"
import { productContext } from "../contexts/productContext"


export default function Price(){
    const {cartData} = useContext(productContext);
    return(
        <div className="text-center mt-3 position-sticky top-0 z-1">
            <p className="d-inline-flex gap-1">
                <button className="btn btn-light bg-warning fw-bold w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Display Price
                </button>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body text-start border-dark">
                    <p>Total Quantity: {cartData.totalQuantity}</p>
                    <p>Shipping: FREE</p>
                    <p>Total Price: {cartData.totalPrice}</p>
                </div>
            </div>
        </div>
    )
}