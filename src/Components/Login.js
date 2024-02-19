import React from 'react'
import '../Pages/Login&SignUp/LoginSignUp.css'

function Login() {
    const clickSignIn = () => {
        window.location.href = "/home"
    }
  return (
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
  )
}

export default Login