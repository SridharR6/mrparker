import { MDBContainer, MDBInput, MDBRow,MDBCol, MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import './Login.css';
export const Login = ()=>{
    const navigate = useNavigate();
    return(
        <>
        <Header/>
        <MDBContainer style={{marginTop:40,width:"75%"}}>
        <br></br><br></br><br></br>
        <form className="loginform">
        <p className="heading">Welcome Back!</p> 
            <MDBContainer>
                <br></br>
                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Email-id" type={"email"} required/></MDBCol>
                </MDBRow>
                <br></br>
                
                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Password" type={"password"} required/></MDBCol>
                </MDBRow>
                <br></br>
                
                <MDBRow>
                    <MDBCol offsetMd={3}> <MDBBtn type="submit">SUBMIT</MDBBtn> </MDBCol>
                    <MDBCol> <MDBBtn type="reset">CLEAR</MDBBtn> </MDBCol>
                </MDBRow>
                <br></br>
                
                <MDBRow>
                    <MDBCol offsetMd={5}> <a href = "#" className="linkst">Forgot Password?</a> </MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>
                    <MDBCol offsetMd={5}> <a onClick={()=>navigate('/signup')} className="linkst">Create an account?</a> </MDBCol>
                </MDBRow>
                <br></br>
            </MDBContainer>
        </form>
        </MDBContainer>
        
        </>
    );
}
