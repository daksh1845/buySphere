import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";

window.onload = function(){
  if(window.innerWidth>720 & window.innerWidth<1200){
    alert("ZOOM OUT FOR DESKTOP SITE")
  }
}

function App(){

  return(
    <>
        <Navbar/>

        <Routes>
          <Route path="/buySphere/" element={<Shop/>}/>
          <Route path="/buySphere/mens" element={<ShopCategory category="men"/>}/>
          <Route path="/buySphere/womens" element={<ShopCategory category="women"/>}/>
          <Route path="/buySphere/kids" element={<ShopCategory category="kid"/>}/>

          <Route path="/buySphere/products" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>

          <Route path="/buySphere/cart" element={<Cart/>}/>
          <Route path="/buySphere/login" element={<LoginSignup/>}/>
        </Routes>
        
        <Footer/>
    </>
  )
}

export default App;