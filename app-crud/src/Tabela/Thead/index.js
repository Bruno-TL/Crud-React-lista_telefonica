import Buttonn from "./Button";
import Input from "./Input";

export default function Thead() {
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>CIdade</th>
                <th>
                    <Buttonn/>
                </th>
                <th>
                    <Input />
                </th>
            </tr>
        </thead>
    );
}