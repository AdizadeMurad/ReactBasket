import React, { useContext } from "react";

import { WishListContext } from "../context/WishListProvider";

function WishList() {
  const { wishlist } = useContext(WishListContext);
  return (
    <div className="cards">
      {wishlist.map((x) => (
        <div className="card" key={x.id}>
          <img src={x.image} alt="" />

          <h2>{x.title}</h2>
          <p className="price">{x.price}</p>
        </div>
      ))}   
    </div>

  );
}

export default WishList;
