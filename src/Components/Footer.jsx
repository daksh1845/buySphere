import footerLogo from '../Assets/Images/logo.png';

function Footer(){
    return(
        <>
            <div className="footer">
                <div className="footer-logo">
                    <img src={footerLogo} alt="not found"/>
                    <p>buySphere</p>
                </div>

                <div className="footer-copyright">
                    <hr style={{background:"#4B0082"}}/>
                    <p>Copyright @ 2024 - All Right Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer;