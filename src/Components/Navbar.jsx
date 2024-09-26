import logo from '../Assets/Images/logo.png';
import cartIcon from '../Assets/Images/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UseMe from '../Context/ShopContext';
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

function Navbar(){

    const [menu, setMenu] = useState("a")
    const {getTotalCartItems} = UseMe()
    const [showorhide, setShoworhide] = useState("hide")

    function handleMenuClick(){
        showorhide==="hide" ? setShoworhide("show") : setShoworhide("hide")
    }

    return(
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo}/>
                    <p>buySPHERE</p>
                </div>
                
                <ul className="nav-menu">
                    <li onClick={()=>setMenu("a")}><Link style={{textDecoration:"none"}} to="/buySphere/">Shop{ menu==="a" ? <hr/> : <></>}</Link></li>
                    <li onClick={()=>setMenu("b")}><Link style={{textDecoration:"none"}} to="/buySphere/mens">Men{ menu==="b" ? <hr/> : <></>}</Link></li>
                    <li onClick={()=>setMenu("c")}><Link style={{textDecoration:"none"}} to="/buySphere/womens">Women{ menu==="c" ? <hr/> : <></>}</Link></li>
                    <li onClick={()=>setMenu("d")}><Link style={{textDecoration:"none"}} to="/buySphere/kids">Kids{ menu==="d" ? <hr/> : <></>}</Link></li>
                </ul>

                <div className="nav-login-cart">
                    <Link to="/buySphere/login"><button>Login</button></Link>
                    <Link to="/buySphere/cart"><img src={cartIcon}/></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>

            </div>

            <div className="navbar-responsive">
                <div className="nav-logo-res">
                        <img src={logo} style={{height:"50px",marginTop:"-6px",}}/>
                </div>

                <div className="nav-right">
                    <div className="nav-cart-count-res">
                        <Link to="/buySphere/cart"><HiOutlineShoppingCart size={40} style={{color:"black"}}/></Link>
                        <div className="nav-cart-count-res-num">{getTotalCartItems()}</div>
                    </div>

                    <div className="hamburgar-menu">
                        <AiOutlineMenu size={40} onClick={handleMenuClick}/>
                    </div>
                </div>

                <div className={showorhide}>
                    <div className="cross-icon">
                        <RxCross1 size={35} style={{position:"absolute", top:"12px", right:"10px"}} onClick={handleMenuClick}/>
                    </div>
                    <ul>
                        <li onClick={()=>setMenu("a")}><Link style={{textDecoration:"none", color:"white"}} to="/buySphere/" onClick={handleMenuClick}>SHOP{ menu==="a" ? <hr/> : <></>}</Link></li>
                        <li onClick={()=>setMenu("b")}><Link style={{textDecoration:"none", color:"white"}} to="/buySphere/mens" onClick={handleMenuClick}>MEN{ menu==="b" ? <hr/> : <></>}</Link></li>
                        <li onClick={()=>setMenu("c")}><Link style={{textDecoration:"none", color:"white"}} to="/buySphere/womens" onClick={handleMenuClick}>WOMEN{ menu==="c" ? <hr/> : <></>}</Link></li>
                        <li onClick={()=>setMenu("d")}><Link style={{textDecoration:"none", color:"white"}} to="/buySphere/kids" onClick={handleMenuClick}>KIDS{ menu==="d" ? <hr/> : <></>}</Link></li>
                    </ul>
                    <Link to="/buySphere/login" className='link'><button onClick={handleMenuClick} style={{padding:"1rem 0"}}>LOGIN</button></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;