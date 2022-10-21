import React from "react";
import GlobalStyle from "./assets/styles/GlobalStyle"
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login/Login";

/* import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"; */


export default function App() {

    return (
        <Router>

            <GlobalStyle/>
            <Login/>
        </Router>


    )

}