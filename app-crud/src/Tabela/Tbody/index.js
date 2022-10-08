import { useState, useEffect } from "react";

export default  function Tbody (){

        const [lista, setLista] = useState([])

        useEffect( ()=> {
            fetch('http://localhost:3000/agenda').then(response => response.json())
            .then(res => setLista(res))
        },[]) 
    
    
    
    return (
        <tbody>
            {lista.map( (cada) => (
                <tr className="table-info border border border-3">
                <td>{cada.id}</td>
                <td>{cada.nome}</td>
                <td>{cada.telefone}</td>
                <td>{cada.cidade}</td>
                <td className="d-flex flex-row-reverse">
                    <button className="btn btn-outline-primary" type="button">
                        Editar
                    </button>
                </td>
                <td >
                    <button className="btn btn-btn-outline-danger" >
                        Excluir
                    </button>
                </td>
                
            </tr>
            ))}
        </tbody>
    );
}