import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const WishListContext = createContext();
function WishListProvider({ children }) {
  const [wishlist, setwishlist] = useLocalStorage("MyKey",[]);
  
  function IncreaseItemWishList(items) {
    const index = wishlist.findIndex((x) => x.id === items.id);
    if (index !== -1) {
      setwishlist(wishlist.filter((x) => x.id !== items.id));
    }
    else{
    setwishlist([...wishlist, {...items}]);
  }
  }


function isExistWishList(items) {
  return wishlist.findIndex(x=>x.id===items.id) !== -1
}

  return (
    <WishListContext.Provider
      value={{ wishlist,IncreaseItemWishList,isExistWishList}}
    >
      {children}
    </WishListContext.Provider>
  );
}

export default WishListProvider;
