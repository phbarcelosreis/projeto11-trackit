import React from "react";
import { createContext, useState } from "react"

function Autenticador({ c }) {

    const [porcentagem, setPorcentagem] = useState(0);
    const [checagem, setChecagem] = useState([]);
    const [checado, setChecado] = useState([]);
    const [usuarioImg, setUsuarioImg] = useState("");
    const [token, setToken] = useState(null);

/*     function CalcularPorcentagem(props) {
        if (props.length === 0) {
            setPorcentagem(0);
        }
    } */

    return (
        <Context.Provider value={{ porcentagem, setPorcentagem, checagem, setChecagem, checado, setChecado, usuarioImg, setUsuarioImg, token, setToken }}>
            {c}
        </Context.Provider>
    )

}

export const Context = createContext({});
export default Autenticador;
