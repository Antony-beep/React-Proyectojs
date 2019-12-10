import React from 'react';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from './Navbar.js';
import {Link} from 'react-router-dom';
export default class Registro extends React.Component{
    
    render(){
        return (
            <div className="falseContainer bg-dark" >
            <div className="container">
        <div className="row ">
        <div className="col-sm-9 col-md-7 col-lg-5 m
        x-auto">
            <div className="card card-signin my-5">
            <div className="card-body">
            <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
            </div>
            <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" 
                placeholder="Apartment, studio, or floor"/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                </div>
                <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip"/>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <button type="submit" className="btn btn-info">Registrar</button>
            <button type="submit" className="btn btn-link">
                <Link className="nav-link" to="/login">Volver</Link></button>
            </form>

            </div>
            </div>
        </div>
        </div>
  </div>
          </div>
        );

    }
}