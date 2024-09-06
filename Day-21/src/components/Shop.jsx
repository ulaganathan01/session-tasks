import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import ikigai from "../assets/ikigai_262.jpg";
import richDadPoorDad from "../assets/rich_dad_poor_dad-315.jpg";
import dopamineDetox from "../assets/dopamine_detox_205.jpg";
import atomicHabits from "../assets/atomic_habits_353.jpg";
import theAlchemist from "../assets/The_alchemist_273.jpg";
import theMountainIsYou from "../assets/the_mountain_is_you_279.jpg";
import thePsychologyOfMoney from "../assets/the_psychology_of_money_201.jpg";
import wingsOfFire from "../assets/wings_of_fire_333.jpg";


function Shop(){
    const [carddata, setCardData] = useState([
        {
          bookName: "Ikigai",
          price: 262,
          image: ikigai,
          isAddedToCart: false
        },{
          bookName: "Rich Dad Poor dad",
          price: 315,
          image: richDadPoorDad,
          isAddedToCart: false
        },{
          bookName: "Dopamine Detox",
          price: 205,
          image: dopamineDetox,
          isAddedToCart: false
        },{
          bookName: "Atomic habits",
          price: 353,
          image: atomicHabits,
          isAddedToCart: false
        },{
          bookName: "The Alchemist",
          price: 273,
          image: theAlchemist,
          isAddedToCart: false
        },{
          bookName: "The Mountain Is You",
          price: 279,
          image: theMountainIsYou,
          isAddedToCart: false
        },{
          bookName: "The Psychology Of Money",
          price: 201,
          image: thePsychologyOfMoney,
          isAddedToCart: false
        },{
          bookName: "Wings Of Fire",
          price: 333,
          image: wingsOfFire,
          isAddedToCart: false
        },
      ]);
    const [cartCount, setCartCount] = useState(0);

    function handleCart(data){
      carddata.forEach((item) => {
        if(item.bookName === data.bookName){
          item.isAddedToCart = !item.isAddedToCart;
          setCardData([...carddata]);
        }
      })
      if(data.isAddedToCart === true){
        setCartCount(cartCount + 1);
      }else{
        setCartCount(cartCount - 1);
      }
    }

    
    return(
        <>
        <Header cartCount={cartCount}/>
        <div className="card-container">
            {
            carddata.map((data, index) => <Card key={index} data={data} handleCart={handleCart}/>)
            }
        </div>
        </>
    )
}

export default Shop;