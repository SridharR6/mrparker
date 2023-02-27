import { MDBContainer, MDBInput, MDBRow,MDBCol, MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import './SignUp.css';

export const SignUp = ()=>{
   const navigate = useNavigate();
    return(
        <>
        <Header/>
        <MDBContainer style={{marginTop:40,width:"75%"}}>
        <br></br><br></br><br></br>
        <form className="loginform">
        <p className="heading">Create New Account!!</p> 
            <MDBContainer>
                <MDBRow>
                    <MDBCol md={3} xs = {4} offsetMd = "3"> <MDBInput label = "FirstName" type={"text"} required/></MDBCol>
                    <MDBCol md={3} xs = {4} > <MDBInput label = "LastName" type={"text"} required/></MDBCol>
                </MDBRow>
                <br></br>
                
                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Email-id" type={"email"} required = {true}/></MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "D.O.B" type={"date"} required/></MDBCol>
                </MDBRow>
                <br></br>
                
                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Create new Password" type={"password"} required/></MDBCol>
                </MDBRow>
                <br></br>
                
                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Confirm Password" type={"password"} required/></MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>
                    <MDBCol offsetMd={3}> <MDBBtn>SUBMIT</MDBBtn> </MDBCol>
                    <MDBCol> <MDBBtn>CLEAR</MDBBtn> </MDBCol>
                </MDBRow>
                <br></br>
                
                <MDBRow>
                    <MDBCol offsetMd={5}> <a onClick={()=>navigate('/login')} className="linkst">Already an User?</a> </MDBCol>
                </MDBRow>
                <br></br>
            </MDBContainer>
        </form>
        </MDBContainer>
        
        </>
    );
}
