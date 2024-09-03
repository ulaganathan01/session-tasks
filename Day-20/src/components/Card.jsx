
function Card({data: {subscription, price, planDetails}}) {

    
  return (
    <div className="card">
      <p className="subscription">{subscription}</p>
      <h1>{price}</h1>
      <ul className="options">
        {planDetails.map((value, index) => {
            return <li key={index} className={!value.isActive ? "in-active" : null}><span className="material-symbols-outlined">{value.isActive ? "Check" : "Close"}</span>{value.option}</li>
        })}
      </ul>
      <button type="button">Button</button>
    </div>
  );
}

export default Card;
