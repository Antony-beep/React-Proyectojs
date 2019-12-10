import React from 'react';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Navbar from './Navbar.js';
import {Link} from 'react-router-dom';
import backg1 from './images/bg1.jpg';
export default class EnfermedadesList extends React.Component{
    constructor(){
        super();
        this.state = {
            search:'',
            enfermedades : [],
            numberC:''
        };
    }

    updateSearch(event) {
        this.setState({
            search:event.target.value.substr(0,20)
        });
    }

    
    componentDidMount(){
        axios.get(`/api/enfermedades`)
        .then(res => {
            console.log(res);
            this.setState({ enfermedades: res.data });
        });
        
    }
    render(){

        let filtrarL = this.state.enfermedades.filter(
            (enfermed) => {
                return enfermed.nombre.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ;
                
            }
        );
        

        return (

            <div className="falseContainer">
            <Navbar></Navbar>

            <div style={{backgroundImage: `url(${backg1})` }} className="jumbotron bg-cover text-white">
                <div className="container py-5 text-left">
                    <h1 className="display-4 font-weight-bold">Lista de enfermedades</h1>
                    <p className="font-italic mb-0">Lista de enfermedades más comunes entre las personas
                    que tienen problemas de salud.  
                    .</p>
                    <p className="font-italic">
                        Colección de enfermedades 
                    </p>
                </div>
            </div>

    <div className="container">

        <form className="d-none d-md-inline-block form-inline ml-auto  mr-md-3 my-0 my-md-0">
      <div className="input-group mb-4">
        <input type="text" className="form-control" placeholder="Buscar enfermedad..." aria-label="Search" 
        aria-describedby="basic-addon2" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" disabled>
            Buscar
          </button>
        </div>
      </div>
        </form>

        <div className="row text-center">

        {filtrarL.map(enfermed => 
//src={require('./images/'+enfermed.enfermedad_img)} en imagenes
        <div className="col-lg-3 col-md-6 mb-4" >
            <div className="card h-100">
            <img className="card-img-top" src={'https://mediinf.herokuapp.com/img/enfermedades/'+enfermed.enfermedad_img} style={{width:"252px",height:"160px"}}/>
            <div className="card-body">
                <h4 className="card-title" key={enfermed.id}>{enfermed.nombre}</h4>
            <p className="card-text"  value={this.state.numberC}>{enfermed.sintomas}</p>
            </div>
            <div className="card-footer">
                <Link to={"/EnfermedadDetalle/"+enfermed.id} className="btn btn-success">Más información</Link>
            </div>
            </div>
        </div>
        )}
        
        
        </div>
        
    </div>
    <footer className="py-4 bg-dark">
        <div className="container">
        <p className="m-0 text-center text-white"> &copy; MediInf 2019</p>
        </div>
    </footer>

          </div>
        );

    }
}