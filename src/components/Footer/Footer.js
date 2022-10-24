import React from "react";
import styled from "styled-components";
import Reflexo from "../../assets/images/Vector.png"
import { Link } from "react-router-dom";

const Bottom = styled.div`
    box-sizing: border-box;
    padding: 0px 36px 0px 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 375px;
    height: 70px;
    background-color: #FFFF;
    & h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    } & p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #FFFF;
    }
`

const Sphere = styled.div`
    position: relative;
    bottom:20px;
    height: 91px;
    width: 91px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #52B6FF;
    & img{
        position: absolute;
        left: 17px;
        
    }
    cursor: pointer;
`

function Footer() {

    return (
        <Bottom>
            <Link to="/Habitos">            
                <h2>
                    Hábitos
                </h2>
            </Link>
            <Link to="/Hoje"><Sphere>
                <p>Hoje</p>
                <img src={Reflexo} alt="" />
            </Sphere></Link>
            <Link to="/Historico">            
                <h2>
                    Historico
                </h2>
            </Link>
        </Bottom>
    )
}

export default Footer;
