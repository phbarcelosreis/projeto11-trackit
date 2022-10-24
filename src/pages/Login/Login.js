import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/Group8.png"
import { Link } from "react-router-dom";

const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & p {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    color: #FFFFFF;
    }
`
const LogIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: 100px;
    width: 375px;
    height: 667px;
    & > Link{
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        cursor: pointer;
    }& input{
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
        display: flex;
        text-align: center;
    } & img{
        margin-bottom: 32px;
    }& input ::placeholder{        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400px;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
`

function Login(){

    return (
        <LogIn>
            <img src={Logo} alt="Logo TrackIt" />
            <input placeholder="email"></input>
            <input onChange={e => e.target.value} placeholder="senha"></input>
            <Button><p>Entrar</p></Button>
            <Link to="/Cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </LogIn>

    )
}

export default Login;