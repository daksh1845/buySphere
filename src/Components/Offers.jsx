import exclusiveImage from "../Assets/Images/exclusive_image.png"

function Offers(){
    return(
        <>
            <div className="offers">
                <div className="offers-left">
                    <h1>Exclusive</h1>
                    <h1>Offers For You</h1>
                    <p style={{paddingTop:"3vh"}}>ONLY ON BEST SELLERS PRODUCTS</p>
                </div>

                <div className="offers-right">
                    <img src={exclusiveImage} alt="not found"/>
                </div>
            </div>
        </>
    )
}

export default Offers;