import React from "react";
import Logo from "../../assets/images/Group8.png"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots as Loading } from "react-loader-spinner";
import axios from "axios";


const LogIn = styled.form`
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
    } & > p{
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
    margin-bottom: 25px;
    & p {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    color: #FFFFFF;
    }
`

function Cadastro() {

    /* States Locais */
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);

    /* States do Autenticador / Navigate / Context */
    const Navegar = useNavigate();
    const Api = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    function Register(){

        const emailUser = {
            email: email,
            senha: senha,
            nome: nome,
            foto: foto
        }
        
        const promessa = axios.post(Api, emailUser);
        setDesabilitar(true);
        
        promessa.then(() => {
            Navegar("/")
        });

        promessa.catch((e) => {
            setDesabilitar(false);
            alert(e.response.data.message);
        });

    }

    function Criado(e){
        e.preventDefault();
        Register();
    }

    return (
        <LogIn onSubmit={Criado}>
            <img src={Logo} alt="Logo Cadastro" />
            <input onChange={e => setEmail(e.target.value)} disabled={desabilitar} type="email" placeholder="email" required/>
            <input onChange={e => setSenha(e.target.value)} disabled={desabilitar} type="password" placeholder="senha" required/>
            <input onChange={e => setNome(e.target.value)} disabled={desabilitar} placeholder="nome" required/>
            <input onChange={e => setFoto(e.target.value)} disabled={desabilitar} type="url" placeholder="foto" required/>
            <Button type="submit" disabled={desabilitar}>{!desabilitar ? "Cadastrar" : <Loading color="#FFFF"></Loading>}</Button>
            <Link to="/" ><p>Já tem uma conta? Faça login!</p></Link>
        </LogIn>

    )
};

export default Cadastro;