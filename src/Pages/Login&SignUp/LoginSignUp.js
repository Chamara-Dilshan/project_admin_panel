import React,{useState} from 'react'
import './LoginSignUp.css'

function LoginSignUp() {
    const [active, setActive] = useState(false)

    const activeSignUp = () => {
        setActive(true)
    }

    const activeLogin = () => {
        setActive(false)
    }

    const clickSignIn = () => {
        window.location.href = "/home"
    }
  return (
    <>
    <div className="l-s-container" >
        <div className={active ? "ls-container active" : "ls-container"} >
            <div className="form-container sign-up">
                <form action='POST'>
                <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registeration</span>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button onClick={clickSignIn}>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form action='POST'>
                <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <a href="#">→ Forget Your Password? ←</a>
                    <button onClick={clickSignIn}>Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" onClick={activeLogin}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="hidden" onClick={activeSignUp}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoginSignUp