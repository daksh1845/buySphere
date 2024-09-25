import { useParams } from 'react-router-dom';
import all_product from '../Assets/all_product'
import CustomProduct from '../Components/CustomProduct';

function Product(){
    
    const {productId}=useParams()
    return(
        <>
            {all_product.map(({ id, name, category, image, new_price, old_price })=>{
                if(id===Number(productId))
                return(
                    <>
                        <CustomProduct id={id} name={name} category={category} image={image} new_price={new_price} old_price={old_price}/>
                    </>
                )
            })}
        </>
    )
}

export default Product;