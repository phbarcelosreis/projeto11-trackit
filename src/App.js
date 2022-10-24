import React from "react";
import GlobalStyle from "./assets/styles/GlobalStyle"
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./route"
import Autenticador from "./components/Autenticador";

/* import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"; */


export default function App() {

    return (
        <Router>

            <GlobalStyle/>
            <Rotas>
                <Autenticador/>
            </Rotas>
        </Router>


    )

}