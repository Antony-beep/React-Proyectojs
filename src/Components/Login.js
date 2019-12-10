import React from 'react';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from './Navbar.js';
import {Link} from 'react-router-dom';
export default class Login extends React.Component{
    
    render(){
        return (
            <div className="falseContainer bg-info">
            <div className="container ">
        <div className="row mt-5">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
            <div className="card-body">
                <h5 className="card-title text-center">Iniciar Sesión</h5>
                <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    placeholder="Enter email" required/>
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu información personal</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                    required />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Recuerdame</label>
                </div>
                <Link className="btn btn-info  mt-3 "  to="" style={{paddingLeft:"60px",paddingRight:"60px",marginLeft:"6em"}}>
                    Iniciar Sesión</Link>
                </form>
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