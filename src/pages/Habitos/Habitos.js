import React, { useEffect } from "react"
import styled from "styled-components";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import { UserContext } from "../../App";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CriarHabito from "./CriarHabitos";

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
    & h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
`

function Habitos() {
    /* State Local */
    const [clicado, setClicado] = useState(false);
    const [coisas, setCoisas] = useState([]);
    const Api = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    /*States Globais*/
    const { token, checado } = useContext(UserContext);
    const Navegar = useNavigate();

    useEffect(() => {

        const something = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promessa = axios.get(Api, something)
        promessa.then((props) => {
            setCoisas(props.data)
        })

        promessa.catch((errozin) => {
            alert('Error: ' + errozin.response.data.message);
            Navegar("/");
            window.location.reload();
        });


    }, [Navegar, token, checado])


    return (
        <div>
            <Header />
            <Screen>
                <Top>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setClicado(true)} />
                </Top>
                <CriarHabito setClicado={setClicado} clicado={clicado} />

                {coisas.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : (
                    coisas.map((props, i) => <HabitosSalvos hab={props} key={i} i={i} />)
                )
                }
            </Screen>
            <Footer />
        </div>



    )

}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
        margin-bottom: 10px;
    }
`

const ContainerHabitos = styled.div`
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 10px;
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 91px;
    margin-bottom: 15px;
    background-color: #FFFF;
    border: none;
    border-radius: 5px;
    & h1{
        margin-right: 100px;
    }
`
const Habits = styled.div`
    display: flex;

`

const DiaSemana = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${props => props.Letra ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${props => props.CorDeFundo ? "#CFCFCF" : "#FFFFFF"};
`

function HabitosSalvos({ hab }) {

    const DiasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"]

    return (

        <Container>
            <ContainerHabitos>
                <h1>{hab.name}</h1>
                <Habits>
                    {DiasDaSemana.map((props, i) =>
                        <DiaSemana key={i} Letra={hab.days.includes(i) ? true : false} CorDeFundo={hab.days.includes(i) ? true : false}>
                            {props}
                        </DiaSemana>
                    )}
                </Habits>
            </ContainerHabitos>


        </Container>

    )

}

export default Habitos;