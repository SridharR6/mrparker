import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { MDBInput } from "mdbreact";
import {Header} from './Header';
import { Footer } from './Footer';
export const RegisterHub = ()=>{
    return(
        <>
        <Header/>

        <MDBContainer style={{marginTop:40,width:"85%"}}>  
        <form className="loginform">
        <p className="heading">Register New Parking Area</p> 
            <MDBContainer>
                <br></br>
                <MDBRow>
                    <MDBCol md={3} xs = {4} offsetMd = "3"> <MDBInput label = "FirstName" type={"text"} required autoFocus = {true}/></MDBCol>
                    <MDBCol md={3} xs = {4} > <MDBInput label = "LastName" type={"text"} required/></MDBCol>
                </MDBRow>
                <br></br>
                
                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Email-id" type={"email"} required = {true}/></MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>
                    <MDBCol md={3} xs = {4} offsetMd = "3"> <MDBInput label = "Parking Area Location" type={"text"} required/></MDBCol>
                    <MDBCol md={3} xs = {4} > <MDBInput label = "Location's G-Map link" type={"url"} required/></MDBCol>
                </MDBRow>
                <br></br>


                <MDBRow>
                    <MDBCol md={3} xs = {4} offsetMd = "3" style={{fontWeight:"bold",textDecoration:"underline"}}>Upload images for Verification:</MDBCol>
                    <MDBCol md={3} xs = {4} ><input type={"file"} multiple = {true} accept = "image/*" required = {true}/></MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Total Capacity" type={"text"} required = {true}/></MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Currently Avail Space" type={"text"} required = {true}/></MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Parking Charge for 1-vehicle" type={"text"} required = {true}/></MDBCol>
                </MDBRow>
                <br></br>

                <MDBRow>
                    <MDBCol md={6} xs = {8} offsetMd = "3"> <MDBInput label = "Other Descriptions" type={"textarea"} required = {true}/></MDBCol>
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
