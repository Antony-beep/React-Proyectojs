import React,{ Component } from 'react';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar.js';
import axios from 'axios';
import Router ,{Link} from 'react-router-dom';


export default class EnfermedadDetalle extends React.Component{
    
    state = {
        Enfermedades:[],
    }
    componentDidMount(){
        axios.get(`/api/enfermedad/${this.props.match.params.id}`)
        .then(res => {
            console.log(res);
            this.setState({ Enfermedades: res.data });
        });
        
    }
    render(){
        console.log(window.location.pathname);
        console.log(this.props.location.pathname)
        return (
            
            
            <div className="falseContainer " >
                <Navbar></Navbar>
                
                <header className="bg-info py-5 mb-5">
            <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-lg-12">
                
        <h3 className=" text-white mt-5 mb-2">Enfermedad en cuestión: {this.state.Enfermedades.nombre}</h3>
        <p> Las enfermedades mostradas cuentan con moderada información acerca de cada medicamento<br/> 
            respecto a la enfermedad que se este mostrando.</p>
                </div>
            </div>
            </div>
        </header>
            
        <div className="container">

            <div className="row">
            <div className="col-md-8 mb-5">
                <h1>{this.state.Enfermedades.nombre}</h1>
                <hr/>
                <h5 >Los medicamentos son aptos para {this.state.Enfermedades.apto}</h5>
                <h5>Sintomas: {this.state.Enfermedades.sintomas}</h5>
                <hr/>
                <h3>Esta enfermedad se puede tratar mediante: </h3>
                
            </div>
            
            </div>

            <div className="row">
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                <img className="card-img-top" style={{width:"348px",height:"350px"}} src={'https://mediinf.herokuapp.com/img/medicamentos/'+this.state.Enfermedades.medi_g}/> 
                <div className="card-body">
        <h4 className="card-title">{this.state.Enfermedades.medicamento_g}</h4>
                    <p className="card-text">Este es un medicamento generico el cual es generalmente brindado por el estado.</p>
                </div>
                <div className="card-footer">
                </div>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                 <img className="card-img-top" style={{width:"348px",height:"350px"}} src={'https://mediinf.herokuapp.com/img/medicamentos/'+this.state.Enfermedades.medi_l}/> 
                <div className="card-body">
                    <h4 className="card-title">{this.state.Enfermedades.medicamento_l}</h4>
                    <p className="card-text">Medicamento de laboratorio que se puede encontrar en cualquier farmacia.</p>
                </div>
                <div className="card-footer">
                </div>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                <img className="card-img-top" style={{width:"348px",height:"350px"}} src={'https://mediinf.herokuapp.com/img/medicamentos/'+this.state.Enfermedades.medi_n}/> 
                <div className="card-body">
                    <h4 className="card-title">{this.state.Enfermedades.medicamento_n}</h4>
                    <p className="card-text">Medicamento de origen natural ,puede ser hecho en casa.</p>
                </div>
                <div className="card-footer">
                    
                </div>
                </div>
                <div className="card-footer ">
                <Link to="/" className="btn btn-success px-5">volver</Link>
                </div>
            </div>
            </div>

        </div>
        
        </div>
        
            
            
        );

    }
}