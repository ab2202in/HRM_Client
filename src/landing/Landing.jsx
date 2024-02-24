import React from "react";
import {BrowserRouter as Router, Routes, Route, Link}from "react-router-dom";
import LandingLogin from "../login/LandingLogin";
import Landing_Nav from "./Landing_Nav";
import AddUser from "../add_user/AddUser"

function Landing() {
    return(

        
       <Router>
        <>
        <Routes>
            <Route path={"/"} exact element={<Landing_Nav/>}/>
            <Route path="/login" exact element={<LandingLogin/>}/>
            <Route path="/add_user" exact element={<AddUser/>}/>
        </Routes>
        </>
       </Router> 
    )
}
export default Landing ;