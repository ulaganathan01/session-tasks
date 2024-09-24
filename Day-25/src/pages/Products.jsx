import { useContext } from "react"
import { productContext } from "../contexts/productContext"


export default function Products(){
    const {data, handleCart} = useContext(productContext);
    console.log(data);
    return(
        <div className="row m-2">
            {
                data.map((product, index) => {
                    return(
                    <div key={index} className="card m-3 border-secondary p-2 col-3" style={{width: "18rem"}}>
                        <div>
                         <img src={product.image} className="card-img-top w-100" alt={product.title}/>
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <h4>${product.price}</h4>
                            <p className="card-text">{product.description}</p>
                            <a href="#" className="btn btn-secondary" onClick={() => handleCart(product.id)}>Add to Cart</a>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}