
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/MainLayout/MainLayout";
import Items from "./pages/Items";
import Basket from "./pages/Basket";
import "./pages/Reset/Reset.scss"
import MainProvider from "./context/MainProvider";
import WishListProvider from "./context/WishListProvider";
import WishList from "./pages/Wishlist";

function App() {


  return (
    <><MainProvider> 
    <WishListProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< MainLayout/>}>
            <Route index element={<Items />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/wishlist" element={<WishList />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </WishListProvider>  
      </MainProvider>
  
    </>
  )
}

export default App
