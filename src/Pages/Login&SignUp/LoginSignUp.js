import React,{useState} from 'react'
import './LoginSignUp.css'
import Login from '../../Components/Login'
import Signup from '../../Components/Signup'

function LoginSignUp() {
    const [active, setActive] = useState(false)

    const activeSignUp = () => {
        setActive(true)
    }

    const activeLogin = () => {
        setActive(false)
    }

    
  return (
    <>
    <div className="l-s-container" >
        <div className={active ? "ls-container active" : "ls-container"} >
            <Signup />
            <Login />
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