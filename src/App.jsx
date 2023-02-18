import React from "react";
import CreateUser from "./components/CreateUser";
import ShowUser from "./components/ShowUser";
import Header from "./components/Header";

import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Route,Routes } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App=()=>{
    return(
        <>
            <Header/>
            <Routes>
                <Route path="" element={<ShowUser/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/show" element={<ShowUser/>} />
                <Route path="/create" element={<CreateUser/>} />
                <Route path="/details/:slug" element={<Details/>} />
            </Routes>
            <Footer/>
        </>
    )
}
export default App