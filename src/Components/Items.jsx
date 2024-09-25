import { Link } from "react-router-dom";

function Items(props){

    const { id, image, name, new_price, old_price } = props;

    return(
        <>
            <div className="item">
                <Link to={`/products/${id}`}><img onClick={()=>window.scrollTo(0,0)} src={image} alt=""/></Link>
                <p>{name}</p>
                
                <div className="item-prices">                    
                    <div className="item-price-new" style={{marginLeft:"10px"}}>
                        ${new_price}
                    </div>
                    <div className="item-price-old">
                        ${old_price}
                    </div>
                </div>
            </div>            
        </>
    )
}

export default Items;