import React from 'react';
import { useState, useEffect } from 'react';
import Api from '../../axios/config';
import axios from 'axios';
import ModalBto from '../Modalbuttoncomprar/ModalButton';
import './Perifericos.css'

const Perifericos = () => {

  const [Peri, setPeri] = useState([]);

  const getPrifericos = async() => {
    
     try{
    const response = await Api.get("/Perifericos")
  
    const data = response.data
  
  
    setPeri(data)
    
    console.log(data)
    }
  catch(error){ console.log(error)}
} 

useEffect(()=>{
 getPrifericos()
},[] )

return <div >
  
  <div>
    <br />
  <div className="perifericos">
   {Peri.length === 0 ? (<p>Carregando...</p>) : (Peri.map((peri) => (
     <div className="peri" key={peri.id}>
       <img className="imgs" src={peri.imagem}/>
      <h2>{peri.nome}</h2>
      <h3>{peri.valor}</h3>
      <ModalBto />    
     </div>
   )))}</div>
  </div>
  <button onClick={NewPerifericos} >Novo</button>
      <button onClick={PutPerifericos}>Editar</button>
      <button onClick={delPeri}>Deletar</button>
  </div>
};
function NewPerifericos (id, nome, valor) {
  id = prompt("Insira o id do Periferico.")
  nome = prompt("Insira o nome do Periferico.")
  valor = prompt("Insira o valor do Produto.")
  axios
    Api.post("/perifericos", {"id": id, "nome": nome, "valor": valor})
    .then((result) => {
      console.log(result);
      setPeri(result.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
};
function PutPerifericos (id, nome, valor) {
  id = prompt("Insira o id do Periferico.")
  nome = prompt("Insira o nome do Periferico.")
  valor = prompt("Insira o valor do Produto.")
  axios
    Api.put("/perifericos/" + `${id}`, {"id": id, "nome": nome, "valor": valor})
    .then((result) => {
      console.log(result);
      setPeri(result.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
};
function delPeri(idPeri) {
  idPeri = prompt("Insira o id do Periférico que deseja deletar.")
  axios
    .delete("https://json-server-api-resilia-loja-de.onrender.com/perifericos/" + idPeri)
    .then((result) => {
      console.log(result);
      setPeri(result.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
}



export default  Perifericos