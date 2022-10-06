import Button from "./Button";
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
                    <Button/>
                </th>
                <th>
                    <Input />
                </th>
            </tr>
        </thead>
    );
}