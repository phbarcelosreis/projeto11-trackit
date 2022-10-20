import React from "react";
import Header from "./TelaInicial/Header";
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";


export default function App() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Cadastro" element={<Cadastro />} />
                    <Route path="/Habitos" element={<Habitos />} />
                    <Route path="/Hoje" element={<Hoje />} />
                </Routes>

            </Router>

        </div>


    )

}