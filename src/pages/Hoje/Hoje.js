import React from "react"
import styled from "styled-components"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const Page = styled.div`

    box-sizing: border-box;
    height: 527px;
    width: 375px;
    padding: 0px 17px 0px 17px;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #8FC549;
    }

`

export default function Hoje() {


    return (

        <>
            <Header></Header>
            <Page></Page>
            <Footer></Footer>

        </>

    )
}