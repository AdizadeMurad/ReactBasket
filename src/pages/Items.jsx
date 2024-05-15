import React, { useContext } from "react";
import "./Items.scss";
import { useState, useEffect } from "react";
import { MainContext } from "../context/MainProvider";
import {WishListContext } from "../context/WishListProvider";
function Items() {
  const [dataAll, setCountdataAll] = useState([]);

  const { getCountBasket, isExist, DecreaseItem, RemoveBasket, IncreaseItem } =
    useContext(MainContext);
    const {isExistWishList,IncreaseItemWishList } =
    useContext(WishListContext);
  async function getAllInformation() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setCountdataAll(data);
  }

  useEffect(() => {
    getAllInformation();
  }, []);

  return (
    <>
      <div className="cards">
        {dataAll.map((x) => (
          <div className="card" key={x.id}>
              <span onClick={() => IncreaseItemWishList(x)} className="btn">
              {isExistWishList(x)  ?  <i style={{fontSize:"30px"}} className="fa-solid fa-heart"></i> :  <i style={{fontSize:"30px"}} className="fa-regular fa-heart"></i> }  
            </span>
          
            <img src={x.image} alt="" />
            <h2>{x.title}</h2>
            <p className="price">{x.price}</p>
            {isExist(x) ? (
              <>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div>
                    <button className="btn">{getCountBasket(x)}</button>
                    <button onClick={() => RemoveBasket(x)} className="btn">
                      Remove
                    </button>
                  </div>
                  <div>
                    <button
                      style={{ width: "120px" }}
                      onClick={() => IncreaseItem(x)}
                      className="btn"
                    >
                      +
                    </button>
                    <button onClick={() => DecreaseItem(x)} className="btn">
                      -
                    </button>
                  </div>
                </div>
              </>
            ) : (
             <>
              <button onClick={() => IncreaseItem(x)} className="btn">
                Add basket
              </button>
     
             </>
            )} 
            
          </div>
        ))}
      </div>
    </>
  );
}

export default Items;
