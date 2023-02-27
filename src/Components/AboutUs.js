import { Header } from "./Header";
import './AboutUs.css';
import logo from '../images/logo.jpg'
import {Footer} from './Footer';
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
export const AboutUs = ()=>{
    const navigate = useNavigate();
    return(
        <>
        <Header/>
        <br></br>
        <MDBContainer className="aboutus">
            <br></br>
            <MDBRow>
                <MDBCol lg = {6} md = {12} style = {{textAlign:"center"}}>
                    <img
                    className="img-fluid"
                    src = {logo}
                    />
                </MDBCol>
                
                <MDBCol lg = {6} md = {12} style = {{paddingRight:"25px"}}>
                    <br></br><br></br>
                <b><i>MR.PARKER</i></b> is company which is founded on the year 2023. The main motto of the company is to make the people's life 
                easier. The company of developed based on the idea of helping those who are struggling to find parking lot for their vehicles in new
                random city. Initially, it is not considered as big thing; but then days passed on, at someday the number of vehicles in a city increased
                the count of number of people in that city. Many people visiting to a new city or going for tours, going for office trips, have no idea on 
                where to park their vehicles. Maybe you can find the nearest parking lot with the help of GOOGLE MAPS, but it does not give assurance, whether
                the parking lot is available or not. Our website will let you know about the nearest parking hub; In addition to that, you can get all the necessary
                infrormation about that parking lot like: who is the owner of that hub, <b>how many free spaces are available, what is the cost they are charging</b>, all
                these things can be viewed with our website. You can also register your parking hub in our portal, which will be displayed to the every user of our
                company;
                <br></br>
                </MDBCol>
            </MDBRow>
            <br></br>
        </MDBContainer>
        <br></br>
        <MDBContainer className="aboutus">
            <br></br>
            <MDBRow center style={{fontWeight:"bold"}}>OUR SERVICES</MDBRow>
            <MDBRow>
                <MDBCol lg = {6} md = {12} style = {{padding:"20px", cursor:"pointer"}} onClick = {()=>navigate('/findhub')}>
                    <ins><b>FIND HUB</b></ins>
                    <br></br>
                    This is our main service which is built based on the requirements of the user. We provide this feature which will let you know about 
                     <b> the nearest parking hub;</b> In this service, we provide data like: Location of the nearest parking lot, Owner details of that parking lot,
                    <b>Total number of vehicles that can be parked</b> inside that lot, <b>Number of free spaces currently available</b> and finally the charges they are
                    asking to park a vehicle; You can directly contact the owner and make your parking slot ready directly. In the near future, 
                    we will let the customers to book their parking slot just throw a click like you are ordering things online.
                </MDBCol>
                <MDBCol lg = {6} md = {12} style = {{padding:"20px", cursor:"pointer"}} onClick = {()=>navigate('/registerhub')}>
                    <ins><b>REGISTER HUB</b></ins>
                    <br></br>
                    This feature is developed based on the owners of the parking lots. What the basic idea here is: you can register your parking hub
                    in our website, just like simply creating user account on websites.  For registering a hub, we need some general information;
                    They are: <b>Owner of the Parking lot, Total NO. of vehicles can be parked, No of Free space available right now,
                    Charges for parking the vehicles;</b> It is not mandatory to have a wide area which is capable of parking of 100 vehicles minimum; If you are having a small free area, you can also register that
                    as a parking lot and earn money with that when people starts using your parking area;
                </MDBCol>

            </MDBRow>
        </MDBContainer>
        <br></br>
        <Footer/>
        </>
    );
}