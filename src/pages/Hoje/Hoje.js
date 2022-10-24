import React from "react"
import styled from "styled-components"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const Page = styled.div`

    box-sizing: border-box;
    height: 527px;
    width: 375px;
`
const TituloHoje = styled.div`

`

const Sequencia = styled.div`

`

const CardHabito = styled.div`


`

const Pontuacao = styled.div`
    color: ${p => p.colorText ? "#8FC549" : "#666666"} ;
`
const MelhorPontos = styled.div`
    color: ${p => p.colorText ? "#8FC549" : "#666666"} ;
`

export default function Hoje({ props }) {


    return (

        <>
            <Header></Header>
            <Page>
                <TituloHoje>
                    <h1>a</h1>
                    <h2>a</h2>
                </TituloHoje>

                <CardHabito>
                    <Sequencia>
                        <h1>{props.name}</h1>
                        <h3>Sequência Atual: <Pontuacao cor={props.done}>{props.currentSequence} {props.currentSequence > 1 ? "dias" : "dia"}</Pontuacao></h3>
                        <h3>Seu Recorde: 
                            <MelhorPontos cor={(props.currentSequence !== 0) && props.done && (props.currentSequence >= props.highestSequence)}>
                                {props.highestSequence} {props.highestSequence > 1 ? "dias" : "dia"}
                            </MelhorPontos>
                        </h3>
                    </Sequencia>
                    <img src="" alt="" />
                </CardHabito>
            </Page>
            <Footer></Footer>

        </>

    )
}