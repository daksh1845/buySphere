function LoginSignup(){
    return(
        <>
            <div className="loginsignup">
                <div className="loginsignup-container">
                    <h1>Sign Up</h1>
                    
                    <div className="loginsignup-fields">
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email Address"/>
                        <input type="password" placeholder="Password"/>
                    </div>

                    <button onClick={()=>alert("FRONTEND ONLY")}>Continue</button>

                    <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>

                    <div className="loginsignup-agree">
                        <input type="checkbox"/>
                        <p>By continuing, i agree to the terms of use & privacy policy.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSignup;