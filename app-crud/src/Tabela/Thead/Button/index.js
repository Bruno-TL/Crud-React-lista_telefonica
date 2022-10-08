
import {React, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tbody from '../../Tbody';

export default function Buttonn() {
  const [show, setShow] = useState(false);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');

  
  let dados = {
        nome: nome,
        telefone: telefone,
        cidade: cidade,
      }
      

  const handleClose = () => {
    fetch('http://localhost:3000/agenda',{
        method: 'POST',
        body: JSON.stringify(dados),
        headers:{
          'Content-Type' : 'application/json'
        }})
          .then(response => response.json())
          .then(() => <Tbody/>)
    setShow(false)
  };

  const handleShow = () =>  setShow(true);

  return (
    <>
      <Button className="btn btn-info d-flex align-items-center" variant="primary" onClick={handleShow}>
        Adicione
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicione uma pessoa nova</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='input-group input-group-sm  mb-3'>
            <input type="text" value={nome}  onChange={(e)=>setNome(e.target.value)} className='form-control' placeholder='Diga o seu Nome'/>          
            <input type="text" value={telefone}  onChange={(e)=>setTelefone(e.target.value)} className='form-control' placeholder='Diga o seu Telefone'/>
            <input type="text" value={cidade}  onChange={(e)=>setCidade(e.target.value)} className='form-control' placeholder='Diga a sua Cidade'/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}