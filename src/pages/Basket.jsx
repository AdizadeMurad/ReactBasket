import React, { useContext } from "react";
import { MainContext } from "../context/MainProvider";

function Basket() {
  const { basket,AllTotal, RemoveBasket, IncreaseItem, DecreaseItem } = useContext(MainContext);
  return (
    <div className="cards">
      {basket.map((x) => (
        <div className="card" key={x.id}>
          <img src={x.image} alt="" />

          <h2>{x.title}</h2>
          <p className="price">{x.price}</p>
          <p className="price">Count : {x.count}</p>
          <button onClick={() => RemoveBasket(x)} className="btn">
            Remove
          </button>
          <button onClick={() => IncreaseItem(x)} className="btn">
            +
          </button>
          <button onClick={() => DecreaseItem(x)} className="btn">
            -
          </button>
          
        </div>
      ))}   
       <div className="total"><p>Total:{AllTotal()}</p></div>
    </div>

  );
}

export default Basket;
