import UseMe from "../Context/ShopContext";
import Items from "../Components/Items";

function ShopCategory({category}){

    const {all_product} = UseMe();

    return(
        <>

            <div className="shop-category">
                <div className="shopcategory-products">
                    {all_product.map((x)=>{
                        if(x.category===category)
                        return(
                            <Items id={x.id} image={x.image} name={x.name} new_price={x.new_price} old_price={x.old_price}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ShopCategory;