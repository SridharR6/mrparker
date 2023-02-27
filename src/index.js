import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { AboutUs } from './Components/AboutUs';
import {Contact} from './Components/Contact';
import { Login } from './Components/Login';
import { SignUp } from './Components/SignUp';
import { FindHub } from './Components/FindHub';
import { RegisterHub } from './Components/RegisterHub';
import { Profile } from './Components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path='/aboutus' element = {<AboutUs/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
        <Route path='/findhub' element = {<FindHub/>}/>
        <Route path='/registerhub' element = {<RegisterHub/>}/>
        
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
