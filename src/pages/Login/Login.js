import React, { useContext, useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/images/Group8.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {Context} from "../../components/Autenticador.js"
import { ThreeDots as Loading } from "react-loader-spinner";


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
const LogIn = styled.form`
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

function Login() {

    /* States Locais */
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);

    /* States do Autenticador / Navigate / Context */
    const {setUsuarioImg, setToken} = useContext(Context);
    const Navegar = useNavigate();
    const Api = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    

    function Logando(){

        const emailUser = {
            email: email,
            senha: senha
        }

        setDesabilitar(true);

        const promessa = axios.post(Api, emailUser);
        promessa.then((props) => {
            setUsuarioImg(props.data.image);
            setToken(props.data.token)

            Navegar("/hoje")
        });

        promessa.catch((e) => {
            setDesabilitar(false);
            alert(e.response.data.message);
        });

    }

    function JustDoIt(e){
        e.preventDefault();
        Logando();
    }


    return (
        <LogIn onSubmit={JustDoIt}>
            <img src={Logo} alt="Logo TrackIt" />
            <input type="email" placeholder="email" disabled={desabilitar} onChange={(e) => setEmail(e.target.value)} required></input>
            <input type="password" disabled={desabilitar} onChange={e => setSenha(e.target.value)} placeholder="senha" required></input>
            <Button type="submit" disabled={desabilitar}><p>{!desabilitar ? "Entrar" : <Loading color="#FFFF"></Loading>}</p></Button>
            <Link to="/Cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </LogIn>

    )
}

export default Login;