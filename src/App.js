import React from "react";
import GlobalStyle from "./assets/styles/GlobalStyle"
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./route"
import { createContext, useState } from "react"

/* import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"; */

export const UserContext = createContext({});

export default function App() {

    const [porcentagem, setPorcentagem] = useState(0);
    const [checagem, setChecagem] = useState([]);
    const [checado, setChecado] = useState([]);
    const [usuarioImg, setUsuarioImg] = useState("");
    const [token, setToken] = useState(null);

    /*     function CalcularPorcentagem(props) {
            if (props.length === 0) {
                setPorcentagem(0);
            }
        } */

    return (
        <Router>
            <UserContext.Provider value={{ porcentagem, setPorcentagem, checagem, setChecagem, checado, setChecado, usuarioImg, setUsuarioImg, token, setToken }}>


                <GlobalStyle />

                <Rotas />

            </UserContext.Provider>
        </Router>

    )
}