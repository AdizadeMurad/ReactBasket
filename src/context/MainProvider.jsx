import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const MainContext = createContext();
function MainProvider({ children }) {
  const [basket, setbasket] = useLocalStorage("MyKey",[]);
  
  function IncreaseItem(items) {
    const index = basket.findIndex((x) => x.id === items.id);
    if (index !== -1) {
      basket[index].count++
      setbasket([...basket])
    }
    else{
    setbasket([...basket, {...items,count:1}]);
  }
  }

  function DecreaseItem(items) {
    const index = basket.findIndex((x) => x.id === items.id);
   const num = basket[index]   
    if (num.count > 1) {
      basket[index].count--
      setbasket([...basket])
    }
  }

  function RemoveBasket(items) {
    setbasket(basket.filter((x) => x.id !== items.id));
  }

function isExist(items) {
  return basket.findIndex(x=>x.id===items.id) !== -1
}


function getCountBasket(items) {
  return basket.find(x=>x.id===items.id).count
}


  function AllTotal() {
  return  basket.reduce((prev,initial)=>prev +(initial.price * initial.count),0).toFixed(2)
  }
  return (
    <MainContext.Provider
      value={{ basket,IncreaseItem, DecreaseItem,isExist,getCountBasket, RemoveBasket,AllTotal}}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
