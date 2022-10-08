

export default  function Tbody ({corpo}){
    
    return (
        <tbody>
            {corpo.map( (cada) => (
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