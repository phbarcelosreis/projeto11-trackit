import React, { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { UserContext } from "../../App";
import { useContext } from "react";

const PaginaHabitos = styled.div`
    box-sizing: border-box;
    padding: 5px;
    width: 340px;
    height: 180px;
    background-color: #FFF;
    border: 0px solid;
    border-radius: 5px;
    display: ${props => props.mostrar ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    & input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin: 15px 0px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }

`

const ContainerBotoes = styled.div`
    margin-left: 140px;
    width: 170px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & button:nth-child(1){
        width: 84px;
        height: 35px;
        border-radius: 4.63636px;
        background: #FFFF;
    }
    & button:nth-child(2){
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
    }
`

function CriarHabito({ setClicado, clicado }) {

    const [nome, setNome] = useState("");
    const [dias, setDias] = useState([]);
    const [desabilitar, setDesabilitar] = useState(false);

    const { token, setChecado } = useContext(UserContext);


    const Api = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

    function Habito() {

        setDesabilitar(true);

        const something = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const Habitos = {
            name: nome,
            days: dias
        }

        if (Habitos.name !== "" && Habitos.days.length > 0) {
            const promessa = axios.post(Api, Habitos, something);
            promessa.then(() => {
                setDesabilitar(false);
                setClicado(false);
                setDias([]);
                setNome("");
                setChecado([]);
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
        <PaginaHabitos mostrar={clicado}>
            <input type="text" placeholder="nome do hábito" value={nome} onChange={(e) => setNome(e.target.value)} disabled={desabilitar}></input>
            <DiasSemana dias={dias} selecionado={Selecionar} />
            <ContainerBotoes>
                <button onClick={() => setClicado(false)}>Cancelar</button>
                <button onClick={Habito}>Salvar</button>
            </ContainerBotoes>
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
    margin-left: 4px;
    margin-bottom: 29px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${props => props.letraCor ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${props => props.backgroundColor ? "#CFCFCF" : "#FFFFFF"};

`

const Semana = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;


`

function DiasSemana({ dias, selecionado }) {

    const DiasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

    return (

        <Semana>
            {DiasDaSemana.map((props, i) => <Dia key={i}
                onClick={() => selecionado(i)}
                backgroundColor={dias.includes(i) ? true : false}
                letraCor={dias.includes(i) ? true : false}> {props}
            </Dia>)}

        </Semana>


    )


}

export default CriarHabito;