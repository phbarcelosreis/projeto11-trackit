import React from "react";
import styled from "styled-components";
import { UserContext } from "../../App";
import { useContext } from "react";
import Trackit from "../../assets/images/TrackIt.png"

const Head = styled.div`
    justify-content: space-between;
    box-sizing: border-box;
    padding: 18px 10px;
    display: flex;
    align-items: center;
    width: 375px;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    & h1{
        width: 97px;
        height: 49px;
        background-color: red;
    } & img:nth-child(2){
        width: 51px;
        height: 51px;
        border-radius: 98px;
    } & img:nth-child(1){
        width: 97px;
        height: 30px;

    }
`



function Header() {

    const { usuarioImg } = useContext(UserContext);

    return (
        <Head>
            <img src={Trackit} alt="Logo"></img>
            <img src={usuarioImg} alt="Foto de Perfil" />
        </Head>
    )
}

export default Header;