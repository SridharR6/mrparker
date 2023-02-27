import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { MDBInput } from "mdbreact";
import { Header } from "./Header";
import gif from '../images/contactus.gif';
import {Footer} from './Footer';
import './Contact.css'
import { useNavigate } from "react-router-dom";
export const Contact = ()=>{
    const navigate = useNavigate();
    return(
        <>
        <Header/>
        <MDBContainer fluid>
            <MDBRow center>
                <img
                className="img-fluid"
                src={gif}
                style = {{padding:"0"}}
                />
            </MDBRow>
        </MDBContainer>
        <MDBContainer style={{marginTop:40,width:"85%"}}>  
        <form className="loginform">
        <p className="heading">Share your FeedBack/Report!!</p> 
            <MDBContainer>
                <MDBRow>
                    <MDBCol md={3} xs = {4} offsetMd = "3"> <MDBInput label = "FirstName" rows = "5" type={"text"} required/></MDBCol>
                    <MDBCol md={3} xs = {4} > <MDBInput label = "LastName" type={"text"} required/></MDBCol>
                </MDBRow>
                <br></br>
                
                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Email-id" type={"email"} required = {true}/></MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "General Feedback" type={"textarea"} required = {true}/></MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Report any error" type={"textarea"}/></MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Any other suggestions" type={"textarea"}/></MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>
                    <MDBCol offsetMd={3}> <MDBBtn>SUBMIT</MDBBtn> </MDBCol>
                    <MDBCol> <MDBBtn>CLEAR</MDBBtn> </MDBCol>
                </MDBRow>
                <br></br>
                
            </MDBContainer>
        </form>
        </MDBContainer>
        <br></br>
        <Footer/>
        </>
    );
}
