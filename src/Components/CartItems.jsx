import UseMe from "../Context/ShopContext";
import removeIcon from '../Assets/Images/cart_cross_icon.png';
import { Link } from "react-router-dom";

function CartItems(){
    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = UseMe()
    
    return(
        <>
            <div className="cartitems">
                <div className="cartitems-format-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>

                <hr/>

                {all_product.map((x)=>{
                    if(cartItems[x.id]>0)
                    return(
                        <>
                            <div>
                                <div className="cartitems-format">
                                    <div>
                                    <img src={x.image} className="carticon-product-icon"/>
                                    </div>
                                    <p className="p">{x.name}</p>
                                    <p>${x.new_price}</p>
                                    <button className="cartitems-quantity">{cartItems[x.id]}</button>
                                    <p>${x.new_price*cartItems[x.id]}</p>
                                    <div className="img-container">
                                        <img className="cartitems-remove-icon" src={removeIcon} onClick={()=>removeFromCart(x.id)}/>
                                    </div>
                                </div>
                                
                                <hr/>
                            </div>
                        </>
                    )
                })}

                </div>

                    <div className="cartitems-down">
                        <div className="cartitems-total">
                        
                            <h1>cart Totals</h1>
                            
                            <div>
                                <div className="cartitems-total-item">
                                    <p>Subtotal</p>
                                    <p>${getTotalCartAmount()}</p>
                                </div>
                            
                                <hr/>
                            
                                <div className="cartitems-total-item">
                                    <p>Shipping Fee</p>
                                    <p>Free</p>
                                </div>
                            
                                <hr/>
                            
                                <div className="cartitems-total-item">
                                    <p>Total</p>
                                    <p>${getTotalCartAmount()}</p>
                                </div>
                            </div>

                            <Link to="/login"><button>PROCEED TO CHECKOUT</button></Link>
                        </div>
                    </div>
        </>
    )
}

export default CartItems;