import new_collections from "../Assets/new_collections"
import Items from './Items.jsx'

function NewCollections(){
    return(
        <>
            <div className="new-collections">
                <h1>NEW COLLECTIONS</h1>
                <hr/>
                <div className="collections">
                    {new_collections.map((x)=>
                        <Items id={x.id} category={x.category} image={x.image} name={x.name} new_price={x.new_price} old_price={x.old_price}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default NewCollections