import UseMe from '../Context/ShopContext';

function CustomProduct({ id, name, category, image, new_price, old_price }){

const {addToCart}=UseMe();

return(
    <>
        <div className="breadcrum">
            <p>Home &#9654; Shop &#9654; {category} &#9654; {name}</p>
        </div>  
        <div className="product-container">
            <div className="product-left" style={{display:"flex",alignItems:"flex-end", justifyContent:"flex-end"}}>
                <div>
                    <img src={image} className="product-image" alt={name} />
                </div>
            </div>  

            <div className="product-right">
                <h1 className="product-title">{name}</h1>
                <p className="product-rating">⭐⭐⭐⭐⭐ (28 ratings)</p>
                <p className="product-price">
                    <span className="new-price">${new_price}</span>
                    <span className="old-price">${old_price}</span>
                </p>
                <p className="product-description">
                    This is a short description of the product, highlighting its key features.
                </p>
                <button onClick={() => addToCart(id)} className="buy-now-button">ADD TO CART</button>
            </div>
        </div>  

        <div className="reviews-container">
            <h2>Customer Reviews</h2>

            <div className="review">
                <p>⭐⭐⭐⭐⭐</p>
                <p>"Amazing product! I highly recommend it."</p>
                <span>- Customer 1</span>
            </div>

            <div className="review">
                <p>⭐⭐⭐⭐</p>
                <p>"Great value for the price, but shipping was delayed."</p>
                <span>- Customer 2</span>
            </div>
        </div>
    </>
)}

export default CustomProduct;