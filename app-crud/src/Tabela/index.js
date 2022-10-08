import Thead from "./Thead";
import Tbody from "./Tbody";


export default function Tabela() {
    return (
        <table className="table table-dark">
            <Thead/>
            <Tbody />
        </table>
    );
}