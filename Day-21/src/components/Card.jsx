

function Card(props) {
    
  return (
    <>  
        <div className="card">
          <div className="product-image">
            <img src={props.data.image} alt="Some Image" />
          </div>
          <div className="product-name">
            <h3>{props.data.bookName}</h3>
          </div>
          <div className="price">
            <p><span class="material-symbols-outlined">currency_rupee</span>{props.data.price}</p>
          </div>
          <div className="cart-button">
            {
              props.data.isAddedToCart ? 
              <button type="button" className="remove" onClick={() => props.handleCart(props.data)}>Remove from Cart</button> : 
              <button type="button" onClick={() => props.handleCart(props.data)}>Add to Cart</button>
            }
          </div>
        </div>
    </>
  );
}

export default Card;
