import React from "react"
import styled from "styled-components";
import Header from "./Header"
import Footer from "./Footes";

const Screen = styled.div`
    box-sizing: border-box;
    height: 527px;
    width: 375px;
    padding: 0px 17px 0px 17px;
    & h1{
        width: 148px;
        height: 29px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    } & button {
        height: 40px;
        width: 50px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
    } & button:hover{
        background: red;
    } & p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }

`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85px;
`

function Habitos(){

    let listaHabitos = [""];

    return (
        <div>
            <Header/>
            <Screen>
                <Top>
                    <h1>Meus hábitos</h1>
                    <button />
                </Top>
                {listaHabitos[0] === "" ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : "Habito"}
            </Screen>
            <Footer/>
        </div>



    )

}

export default Habitos;