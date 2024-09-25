import Hero from "../Components/Hero";
import Offers from "../Components/Offers";
import NewCollections from "../Components/NewCollections";
import NewsLetter from "../Components/NewsLetter";

function Shop(){
    return(
        <>
            <div>
                <Hero/>
                <Offers/>
                <NewCollections/>
                <NewsLetter/>
            </div>
        </>
    )
}

export default Shop;