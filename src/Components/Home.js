import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Header } from "./Header"
import {Footer} from './Footer';
import vid1 from '../images/vid1.mp4';
import logo from "../images/logo.jpg";
import './Home.css';
import parking1 from '../images/parking1.jpg';

export const Home = ()=>{
    return(
        <>
        <Header/>
        <MDBContainer style={{backgroundColor:"#f6f9fc",paddingTop:"30px",fontFamily:"Times New Roman"}} fluid>
            <br></br>
            <MDBRow>
                <MDBCol md = {5} offsetMd = {1}>
                    <div>
                        <h3>Who we are?</h3>
                        <div style={{textAlign:"justify"}}>
                        Providing a solution which aids the vehicle owners to lessen their worry towards parking in an unknown area.
                        The approach is very easy and simple. It is not only developed on the basis of customers but also designed to 
                        help the parking area owners to widen their community and get more occupied by the users. Instead of parking in some 
                        random place, this ensures security for your vehicle and also availability for your convinience <br></br>
                        This parking thing has 2 sides. One is based those who are searching for some free space to park their vehicles. And the other
                        one is based on those business people who are having free spaces and wants to make that as a parking area. In our website, we are handling
                        with both of these things. Any user can easily find the nearest parking area for them. And any user can easily register the parking area as per our norms. 
                        Everything will be verified by ourselves for better security.
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md = {5} style = {{textAlign:"center"}}>
                <video autoPlay = {true} loop = {true} muted = {true} playsInline = {true} width = "80%" height = "auto" style={{border:"1px solid black"}}>
                    <source type="video/mp4" src={vid1}></source>
                </video>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <br></br>
        <MDBContainer style={{fontFamily:"Times New Roman"}}>
            <MDBRow>
                <h3>Recent Popular Parking Areas</h3>
            </MDBRow>
            <br></br>
            <MDBRow>
                <MDBCol md = {4}>
                    <div className="cardd">
                        <img src = {parking1} className = "cardimage img-fluid" alt = "img"/>
                        <div className="cardcontent">
                            <div style={{marginBottom:"10px",textAlign:"justify"}}>
                                <div><b>Area of Location:</b> Perundurai, Erode</div>
                                <div><b>Name of the Owner:</b> Wanda</div>
                                <div><b>Available Parking Space:</b> 8</div>
                                <div><b>Total Parking Space:</b> 50</div>
                            </div>
                            <div><MDBBtn>More Info</MDBBtn></div>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md = {4}>
                    <div className="cardd">
                        <img src = {parking1} className = "cardimage img-fluid" alt = "img"/>
                        <div className="cardcontent">
                            <div style={{marginBottom:"10px",textAlign:"justify"}}>
                                <div><b>Area of Location:</b> Perundurai, Erode</div>
                                <div><b>Name of the Owner:</b> Wanda</div>
                                <div><b>Available Parking Space:</b> 8</div>
                                <div><b>Total Parking Space:</b> 50</div>
                            </div>
                            <div><MDBBtn>More Info</MDBBtn></div>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md = {4}>
                    <div className="cardd">
                        <img src = {parking1} className = "cardimage img-fluid" alt = "img"/>
                        <div className="cardcontent">
                            <div style={{marginBottom:"10px",textAlign:"justify"}}>
                                <div><b>Area of Location:</b> Perundurai, Erode</div>
                                <div><b>Name of the Owner:</b> Wanda</div>
                                <div><b>Available Parking Space:</b> 8</div>
                                <div><b>Total Parking Space:</b> 50</div>
                            </div>
                            <div><MDBBtn>More Info</MDBBtn></div>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <br></br>
        <MDBContainer style={{padding:"10px",paddingTop:"30px",fontFamily:"Times New Roman",textAlign:"center"}}>
            <MDBRow>
                <h3><ins>Join with our Community</ins></h3>
            </MDBRow>
            <MDBRow style={{verticalAlign:"bottom"}}>
                <MDBCol md={6}>
                <img src={logo}  width="200px" height={"auto"} ></img>
                </MDBCol>
                <MDBCol md={3} >
                    <br></br>
                    <h5 >
                        Join with our community and stay connected with us. Team Work makes the Dream Work
                    </h5>
                    <br></br>
                    <MDBBtn>Join</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <Footer/>
        </>
    );
}