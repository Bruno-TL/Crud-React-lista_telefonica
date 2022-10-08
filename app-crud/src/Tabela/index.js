import Thead from "./Thead";
import Tbody from "./Tbody";
import { useState } from "react";

export default function Tabela() {
    const [lista, setLista] = useState([])

    fetch('http://localhost:3000/agenda').then(response => response.json())
        .then(res => setLista(res))
        

    return (
        <table className="table table-dark">
            <Thead/>
            <Tbody corpo={lista} />
        </table>
    );
}