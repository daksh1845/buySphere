import { Link } from "react-router-dom";

function NewsLetter(){
    return(
        <>
            <div className="newsletter-container">
                <h1>Get Exclusive Offers On Your Email</h1>
                <p>Subscribe to our newsLetter and stay updated</p>
                <div className="newsletter-form">
                    <input type="email" placeholder="Your Email id"/>
                    <Link to='/login' onClick={()=>window.scrollTo(0,0)}><button>Subscribe</button></Link>
                </div>
            </div>
        </>
    )
}

export default NewsLetter;