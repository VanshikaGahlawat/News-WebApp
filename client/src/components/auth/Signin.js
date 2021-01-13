import React from 'react'
import { Link } from 'react-router-dom'
import photo from '../../images/login.png'

const Signin = () => {
    return (
        <div className="container-login100">
        <div className="wrap-login100">
        <div className="login-img">
            <img src={photo} alt="IMG"/>
        </div>
        
    
        <form className="login100-form validate-form">
            <span className="login100-form-title">
                Login
            </span>
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                
                
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
            </div>
            <div className="container-login100-form-btn">
                <button className="btn btn-dark btn-block">
                Login
                </button>
            </div>
            <br />
            <div className="text-center p-t-136">
                <Link to="/signup">
                    Create your Account
                </Link>
            </div>
        </form>
        </div>
        </div>
    )
}

export default Signin
