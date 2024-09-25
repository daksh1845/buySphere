import React, { useContext, useState } from "react";
import all_product from '../Assets/all_product';

const ShopContext = React.createContext();

function getDefaultCart(){
    let cart={}
    for(let i=0; i<=all_product.length; i++){
        cart[i]=0
    }
    return cart;
}

export const ShopContextProvider=({children})=>{

    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    function addToCart(id){
        setCartItems((prev)=>({...prev, [id] : prev[id]+1 }))
    }

    
    function removeFromCart(id){
        setCartItems((prev) => ({...prev, [id] : prev[id]-1 }))
    }

    function getTotalCartAmount(){
        let totalAmount=0;
        for(let x in cartItems){
            if(cartItems[x]>0){
                let infoOfProduct = all_product.find((y)=>y.id===Number(x));
                totalAmount += infoOfProduct.new_price * cartItems[x]
            }
        }
        return totalAmount;        
    }

    function getTotalCartItems(){
        let Total = 0;
        for(let x in cartItems){
            if(cartItems[x]>0){
                Total+=cartItems[x]
            }
        }
        return Total;
    }

    return(
        <ShopContext.Provider value={{all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems}}>
            {children}
        </ShopContext.Provider>
    )
}

function UseMe() { return useContext(ShopContext) }
export default UseMe;