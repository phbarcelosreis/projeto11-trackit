import {createContext , useState} from "react"

function Autenticador(){

    const [porcentagem, setPorcentagem] = useState(0);
    const [checagem, setChecagem] = useState([]);
    const [checado, setChecado] = useState([]);
    const [usuarioImg, setUsuarioImg] = useState("");
    const [token, setToken] = useState(null);

    function CalcularPorcentagem( props ){
        if(props.length === 0){
            setPorcentagem(0);
        } else{

        }
    }

}

export const Context = createContext({});
export default Autenticador;
