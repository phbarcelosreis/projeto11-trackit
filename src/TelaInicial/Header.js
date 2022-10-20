import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";

const Head = styled.div`
    width: 375px;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

function Header(){
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/Habitos" element={<Habitos/>}/>
                <Route path="/Hoje" element={<Hoje/>}/>
            </Routes>
            
        </Router>

    )
}

export default Header;