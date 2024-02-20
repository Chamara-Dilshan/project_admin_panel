import React from 'react'
import '../Pages/Login&SignUp/LoginSignUp.css'

function Signup() {
    const clickSignUp = () => {
        window.location.href = "/home"
    }
  return (
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
                    <button onClick={clickSignUp}>Sign Up</button>
                </form>
            </div>
  )
}

export default Signup