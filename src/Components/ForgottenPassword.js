import React from 'react';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from './Navbar.js';
import {Link} from 'react-router-dom';
export default class ForgottenPassword extends React.Component{
    
    render(){
        return (
            <div className="falseContainer">
            <div className="container">
        <div className="row mt-5">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
            <div className="card-body">

                
                <div className="card-body">
                    <div className="text-center mb-4">
                    <h4>Forgot your password?</h4>
                    <p>Enter your email address and we will send you instructions on how to reset your 
                        password.</p>
                    </div>
                    <form>
                    <div className="form-group">
                        <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Enter 
                        email address" required="required" autofocus="autofocus"/>
                        <label for="inputEmail">Enter email address</label>
                        </div>
                    </div>
                    <a className="btn btn-primary btn-block" href="login.html">Reset Password</a>
                    </form>
                    
                </div>
                

                <div className="text-center">
                <Link className="d-block small mt-2" to="/registeruser">Registrarse</Link>
                <Link className="d-block small" to="/forgotpassword">Olvide mi contraseña</Link>
                </div>
            </div>
            </div>
        </div>
        </div>
  </div>
          </div>
        );

    }
}