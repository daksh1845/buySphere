import handIcon from '../Assets/Images/hand_icon.png'
import arrowIcon from '../Assets/Images/arrow.png'
import heroImage from '../Assets/Images/xyz.png'
import heroImage2 from '../Assets/Images/heroIcon.png'
import { IoIosArrowDown } from "react-icons/io";

function Hero(){

    const scrollToPosition = () => {
        window.scrollTo({
          top: 1535,
          behavior: 'smooth',
        });
    };

    const scrollToPosition2 = () => {
        window.scrollTo({
          top: 1460,
          behavior: 'smooth',
        });
    };

    return(
        <>
            <div className="hero">
                <div className="hero-left">
                    <h2>NEW ARRIVALS ONLY</h2>
                    
                    <div>
                        <div className="hero-hand-icon">
                            <p>new</p>
                            <img src={handIcon} alt="not found"/>
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>

                    <div className="hero-latest-btn" style={{cursor:"pointer"}} onClick={()=>scrollToPosition2()}>
                        <img src={arrowIcon} alt="not found"/>
                    </div>
                    
                </div>


                <div className="hero-right">
                    <img src={heroImage} alt="not found" style={{height:500, borderRadius:100}}/>
                </div>
            </div>



            <div className="hero-res">
                <div className="hero-left-res">
                    <h2>Buy SPHERE</h2>
                    
                    <div className="hero-right-res">
                        <img src={heroImage2} alt="not found"/>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center', width:"98vw",paddingTop:"30%"}}>
                        <div className="hero-latest-btn-res" style={{cursor:"pointer"}} onClick={()=>scrollToPosition()}>
                            <button style={{ display:"flex", alignItems:"center"}}>DISCOVER MORE<IoIosArrowDown/></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Hero;