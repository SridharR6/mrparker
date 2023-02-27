// aria->accessible rich internet applications
import './Header.css';
import React, { useState } from "react";
import logo from "../images/logo.jpg";
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBNavbarBrand,
    MDBCol
  } from 'mdb-react-ui-kit';
import "../Components/Header";
import loggedin from "../images/loggedin.png";  
import { useNavigate } from "react-router-dom";

export function Header(){
    const [show, setShow] = useState(false);
    const [login, setLogin] = useState(0);
    const navigate = useNavigate();
    return(
        <>
        <MDBNavbar sticky="top" expand = "md" dark bgColor="dark" className='navbar'>
            <MDBContainer >
            <MDBNavbarBrand style = {{cursor:"pointer"}}onClick={()=>navigate("/aboutus")}>
                <img
                src= {logo}
                height='40'
                alt=''
                loading='lazy'
                />
                Mr.Parker
            </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbar'
                    aria-controls='navbar'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShow(!show)}
                >
                    <MDBIcon icon='bars' fas />
                
                </MDBNavbarToggler>
                <MDBCollapse navbar show={show}>

                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                    
                    <MDBNavbarItem style={{width:80,textAlign:"center"}} className = 'navitem'> 
                        <MDBNavbarLink active onClick={()=>navigate("/home")}>
                            Home
                        </MDBNavbarLink>
                    </MDBNavbarItem>


                    <MDBNavbarItem style={{width:110,cursor:"pointer",textAlign:"center"}} className = 'navitem'>
                        <MDBDropdown>
                            <MDBDropdownToggle tag='a' className='nav-link' >
                                Services
                            </MDBDropdownToggle>
                            
                            <MDBDropdownMenu dark>
                                <MDBDropdownItem onClick={()=>navigate("/findhub")} link>Find Hub</MDBDropdownItem>
                                <MDBDropdownItem onClick={()=>navigate("/registerhub")} link>Register Hub</MDBDropdownItem>
                            </MDBDropdownMenu>
                        
                        </MDBDropdown>
                    </MDBNavbarItem>


                    <MDBNavbarItem style={{width:90,textAlign:"center"}} className = 'navitem'>
                        <MDBNavbarLink  onClick={()=>navigate("/contact")} active>
                            Contact
                        </MDBNavbarLink>
                    </MDBNavbarItem>


                    <MDBNavbarItem style={{width:95,textAlign:"center"}} className = 'navitem'>
                        <MDBNavbarLink  onClick={()=>navigate("/aboutus")} active>
                            About Us
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem style={{width:80,textAlign:"center"}} className = 'navitem'>
                        <MDBNavbarLink  onClick={()=>(login===0)?navigate("/login"):navigate("/profile")} active>
                            {login===0 ?"Login":<img src = {loggedin} height = '30'/>}
                        </MDBNavbarLink>
                    </MDBNavbarItem>
            
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        </>
    );
}