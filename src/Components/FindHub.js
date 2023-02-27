import { Header } from "./Header"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { MDBCol, MDBContainer, MDBRow,MDBBtn } from "mdb-react-ui-kit";
import {Footer} from './Footer';
import parking1 from '../images/parking1.jpg';
import './Findhub.css';
export const FindHub = ()=>{
    return(
        <>
        <Header/>
        <br></br>
        <MDBContainer>
            <MDBRow >
                <MDBCol sm = {8} offsetSm={2}>
                <div className="search">
                    <div className="searchbar"><input className = "searchinput" type={"text"} placeholder= "Search"></input></div>
                    <div className="searchicon"><SearchOutlinedIcon/></div>
                </div>
                </MDBCol>

            </MDBRow>   
        </MDBContainer>
        <hr></hr>

        <MDBContainer>
            <MDBRow center style={{fontWeight : "bold",fontSize:"larger",fontFamily:"Times New Roman",textDecoration:"underline"}}>
                Popular Parking Lots Near You
            </MDBRow>
            <br></br>
            
            <MDBRow>
                <MDBCol md = {4} sm = {6} >
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
                <MDBCol md = {4} sm = {6} >
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
                <MDBCol md = {4} sm = {6} >
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
                <MDBCol md = {4} sm = {6} >
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
                <MDBCol md = {4} sm = {6} >
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
                <MDBCol md = {4} sm = {6} >
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
        <Footer/>
        </>
    );
}