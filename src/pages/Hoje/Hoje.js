import React from "react"
import styled from "styled-components"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../App"



export default function Hoje() {

    const [habitos, setHabitos] = useState([])

    const Navegar = useNavigate()
    const Api = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const { token } = useContext(UserContext);

    useEffect(() => {

        const autorizacao = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promessa = axios.get(Api, autorizacao);
        promessa.then((props) => setHabitos(props.data))
        promessa.catch((e) => {alert('Error: ' + e.response.data.message)
        Navegar("/");
        window.location.reload();
        })
    }, [token, Navegar])


    return (

        <>
            <Header />
            {habitos.map( (props) => <HabitosHoje props={props} key={props.id} />)}
            <Footer />
        </>

    )

}


const Page = styled.div`

    box-sizing: border-box;
    height: 527px;
    width: 375px;
`
/* const TituloHoje = styled.div`

` */

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

function HabitosHoje({ props }) {


    return (

        <Page>
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

    )
}