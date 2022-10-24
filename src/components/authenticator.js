import React from "react";
import {createContext , useState} from "react"

function Authenticator(){

    const [porcentagem, setPorcentagem] = useState(0);
    const [checagem, setChecagem] = useState([]);
    const [checado, setChecado] = useState([]);
    const [usuarioImg, setUsuarioImg] = useState("");

    function CalcularPorcentagem( props ){
        if(props.lenght === 0){
            setPorcentagem(0);
        } else{
            
        }
    }

}

export const Context = createContext({});
export default Authenticator;
