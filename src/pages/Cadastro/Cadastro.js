import React from "react";
import Logo from "../../assets/images/Group8.png"
import styled from "styled-components";


const LogIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: 100px;
    width: 375px;
    height: 667px;
    & input{
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
    }
`
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

function Cadastro(){


    return (
        <LogIn>
            <img src={Logo} alt="Logo Cadastro" />
            <input placeholder="email" />
            <input placeholder="senha" />
            <input placeholder="nome" />
            <input placeholder="foto" />
            <Button>Cadastrar</Button>
        </LogIn> 

    )
};

export default Cadastro;