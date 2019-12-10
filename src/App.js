import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import EnfermedadesList from './Components/EnfermedadesList';
import Login from './Components/Login';
import RegistroUser from './Components/RegistroUser';
import {BrowserRouter as Router,} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ForgottenPassword from './Components/ForgottenPassword';
import AboutUs from './Components/AboutUs';
import EnfermedadDetalle from './Components/EnfermedadDetalle';
function App() {
  return (
    <Router>
    <div className="App">
    <Route path="/" exact render={
        ()=>{
          return ( <EnfermedadesList></EnfermedadesList> );
        }
      }/>
    <Route path="/login" exact render={
        ()=>{
          return ( <Login></Login> );
        }
      }/>
    <Route path="/registeruser" exact render={
        ()=>{
          return ( <RegistroUser></RegistroUser> );
        }
    }/>
    <Route path="/forgotpassword" exact render={
        ()=>{
          return ( <ForgottenPassword></ForgottenPassword> );
        }
    }/>
    <Route path="/aboutus" exact render={
        ()=>{
          return ( <AboutUs></AboutUs> );
        }
    }/>
    <Route path="/EnfermedadDetalle/:id" exact component={EnfermedadDetalle}/>
    </div>

    </Router>
    
  );
}

export default App;
