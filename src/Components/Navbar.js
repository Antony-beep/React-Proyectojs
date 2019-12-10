import React from 'react';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import 'bootstrap/dist/css/bootstrap.css';
import icon1 from './images/pills.png';
import {Link} from 'react-router-dom';
export default class EnfermedadesList extends React.Component{
    
    render(){
        //atributo className="nav-item active" para declarar algo como activo
        return (
            <div className="falseContainer">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
        <Link className="navbar-brand" to=""><img style={{width:"30px"}} src={icon1} alt=""/>  MediInf</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-1" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            
            
            <li className="nav-item ">
                <Link className="nav-link" to="">Enfermedades
                <span className="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://mediinf.herokuapp.com/enfermedades/lista">Registrar Enfermedades</a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/aboutus">Acerca de Nosotros</Link>
            </li>
            
            
            </ul>
            
        </div>
        
        </div>
        <a className="nav-link btn-link" href="https://mediinf.herokuapp.com/signup">Registrarse</a>
        <a className="nav-link btn-link" href="https://mediinf.herokuapp.com/login">Identificarme</a>
         
    </nav>

          </div>
        );

    }
}