import React from "react";
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom"; 
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import Habitos from "./pages/Habitos/Habitos"
import Hoje from "./pages/Hoje/Hoje"

function Routes(){

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/Cadastro" element={<Cadastro />}/>
                <Route path="/Habitos" element={<Habitos />}/>
                <Route path="/Hoje" element={<Hoje />}/>
            </Routes>
        </Router>

    )

}