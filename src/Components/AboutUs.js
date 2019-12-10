import React from 'react';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar.js';
import {Link} from 'react-router-dom';
export default class AboutUs extends React.Component{
    
    render(){
        return (
            <div className="falseContainer bg-dark" >
                <Navbar></Navbar>
                <div className="bg-light">
            <div className="container py-5">
                <div className="row h-100 align-items-center py-5">
                <div className="col-lg-6">
                    <h1 className="display-4">Sobre el equipo de desarrollo </h1>
                    <p className="lead text-muted mb-0">Estudiantes de la carrera de Diseño de Software e 
                    Integración de Sistemas tienen el merito de haber creado esta aplicación.</p>
                    <p className="lead text-muted">#Tecsup2019
                    </p>
                </div>
                <div className="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" 
                alt="" className="img-fluid"/></div>
                </div>
            </div>
            </div>

            <div className="bg-white py-5">
            <div className="container py-5">
                <div className="row align-items-center mb-5">
                <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                    <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                    <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.</p>
                    
                </div>
                <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" 
                alt="" className="img-fluid mb-4 mb-lg-0"/></div>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" 
                alt="" className="img-fluid mb-4 mb-lg-0"/></div>
                <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                    <h2 className="font-weight-light">Sobre MediInf</h2>
                    <p className="font-italic text-muted mb-4">Un medio el cual estas personas pueda informarse con respecto a lo que está metiendo a su cuerpo y los grandes costos que ellos llegan a gastar por recomendaciones de terceros o médicos que promocionan un medicamento en específico por el patrocinio que este lleva con el hospital o clínica. 
                </p>
                </div>
                </div>
            </div>
            </div>

            <div className="bg-light py-5">
            <div className="container py-5">
                <div className="row mb-4">
                <div className="col-lg-5">
                    <h2 className="display-4 font-weight-light">Nuestro equipo</h2>
                    <p className="font-italic text-muted">Equipo de desarrolladores encargados de llevar a cabo la aplicación</p>
                </div>
                </div>

                <div className="row text-center">
               



                <div className="col-xl-3 col-sm-6 mb-5">
                    <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" 
                    alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 className="mb-0">Jeff Llanos Orihuela</h5><span className="small text-uppercase text-muted">Desarrllador Android</span>
                    
                    </div>
                </div>
               
                <div className="col-xl-3 col-sm-6 mb-5">
                    <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" 
                    alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 className="mb-0">Alfredo Vilchez Ramos</h5><span className="small text-uppercase text-muted">Desarrollador Backend</span>
                    
                    </div>
                </div>
        
                <div className="col-xl-3 col-sm-6 mb-5">
                    <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png" 
                    alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                    <h5 className="mb-0">Antonio Cristobal</h5><span className="small text-uppercase text-muted">Desarrollador frontend </span>
                    <ul className="social mb-0 list-inline mt-3">
                        
                    </ul>
                    </div>
                </div>

                </div>
            </div>
            </div>

            </div>
        );

    }
}