import React from 'react';
import { useState, useEffect } from 'react';
import Api from '../../axios/config';
import axios from 'axios';
import ModalBto from '../Modalbuttoncomprar/ModalButton';
import './Impressoras.css'

const Imp = () => {

  const [Impre, setImpre] = useState([])
  
  const getimpre = async() => {
    
     try{
     const responce = await Api.get("/Impressoras")

    const data = responce.data

  
    setImpre(data)
    console.log(data)
    }
  catch(error){ console.log(error)}
} 

useEffect(()=>{
 getimpre()
},[] )

return <div >
    <div className="impressoras">
   {Impre.length === 0 ? (<p>Carregando...</p>) : (Impre.map((Impre) => (
     <div className="impre" key={Impre.id}>
       <img className="imgs" src={Impre.imagem} />
      <h2>{Impre.nome}</h2>
      <h3>{Impre.valor}</h3>
      <ModalBto />
     </div>
   )))}</div>
   <button onClick={NewImpressora} >Novo</button>
      <button onClick={EditarImpressora}>Editar</button>
      <button onClick={delImp}>Deletar</button>
  </div>
};
function NewImpressora (id, nome, valor) {
  id = prompt("Insira o id da Impressora.")
  nome = prompt("Insira o nome da Impressora.")
  valor = prompt("Insira o valor do Produto.")
  axios
    Api.post("/impressoras", {"id": id, "nome": nome, "valor": valor})
    .then((result) => {
      console.log(result);
      setImpre(result.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
};
function EditarImpressora (id, nome, valor) {
  id = prompt("Insira o id da Impressora.")
  nome = prompt("Insira o nome da Impressora.")
  valor = prompt("Insira o valor do Produto.")
  axios
    Api.put("/impressoras/" + `${id}`, {"id": id, "nome": nome, "valor": valor})
    .then((result) => {
      console.log(result);
      setImpre(result.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
};
function delImp(idImp) {
  idImp = prompt("Insira o id da Impressora que deseja deletar.")
  axios
    Api.delete("/impressoras/" + idImp)
    .then((result) => {
      console.log(result);
      setImpre(result.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
}

export default  Imp