import React, { useState } from "react"
import axios from "axios"
import styled from "styled-components"

function CriarHabito() {

    const [nome, setNome] = useState("");
    const [dias, setDias] = useState([]);
    const [desabilitar, setDesabilitar] = useState(false);


    const Api = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

    function Habito() {

        setDesabilitar(true);

        const Habitos = {
            name: nome,
            days: dias
        }

        if (Habitos.name !== "" && Habitos.days.length > 0) {
            const promessa = axios.post(Api, Habitos, config);
            promessa.then(() => {
                setDesabilitar(false);
                setStaCreate(false);
                setDias([]);
                setNome("");
                setUpdate([]);
            });

            promessa.catch((erro) => {
                alert(erro.response.data);
                setDesabilitar(false);
            });

        } else if (Habitos.name !== "") {

            alert("Selecionar um dia da semana!");
            setDesabilitar(false);

        } else if (Habitos.days.length > 0) {

            alert("Nomeie seus Hábitos");
            setDesabilitar(false);
        } else {

            alert("Preencher os campos disponíveis!");
            setDesabilitar(false);
        }

    }

    function Selecionar(props) {

        if (dias.includes(props)) {
            let arrayzin = dias.filter((e) => e !== props);
            setDias([...arrayzin]);
        } else {
            setDias([...dias, props]);
        }

    }


    return (
        <PaginaHabitos>
            <input></input>
            <DiasSemana></DiasSemana>
        </PaginaHabitos>

    )

}

const Dia = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-bottom: 29px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${props => props.letraCor ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${props => props.backgroundColor ? "#CFCFCF" : "#FFFFFF"};

`

const Semana = styled.div`

`

function DiasSemana({ SelecionarDia }) {

    const DiasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

    return (

        <Semana>
            {DiasDaSemana.map((props, i) => <Dia key={i} onClick={() => selecionado(i)} backgroundColor={SelecionarDia.includes(i) ? true : false} letraCor={SelecionarDia.includes(i) ? true : false}></Dia>)}

        </Semana>


    )


}