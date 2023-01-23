import React from 'react';
import { useState, useEffect } from 'react';
import Api from '../../axios/config';
import axios from 'axios';
import ModalBto from '../Modalbuttoncomprar/ModalButton';
import './Computadores.css'

const Compu = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      const response = await Api.get('/computadores');
      const data = response.data;
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <br />
      <div className="computadores">
        {posts.length === 0 ? (
          <p className='carre'>Carregando...</p>
        ) : (
          posts.map((post) => (
            <div className="compu" key={post.id}>
              <img className="imgs" src={post.imagem} />
              <h2>{post.nome}</h2>
              <h3>{post.valor}</h3>
              <ModalBto />
            </div>
          ))
        )}
      </div>
      <button onClick={NewComputador} >Novo</button>
      <button onClick={EditarComputador}>Editar</button>
      <button onClick={delComp}>Deletar</button>
    </div>
  );
  function NewComputador(id, nome, valor) {
    id = prompt('Insira o id do Computador.');
    nome = prompt('Insira o nome do Computador.');
    valor = prompt('Insira o valor do Produto.');
    axios;
    Api.post('/computadores', { id: id, nome: nome, valor: valor })
      .then((result) => {
        console.log(result);
        setClientes(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
  function EditarComputador(id, nome, valor) {
    id = prompt('Insira o id do Computador.');
    nome = prompt('Insira o nome do Computador.');
    valor = prompt('Insira o valor do Produto.');
    axios;
    Api.put('/computadores/' + `${id}`, { id: id, nome: nome, valor: valor })
      .then((result) => {
        console.log(result);
        setClientes(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function delComp(idComp) {
    idComp = prompt('Insira o id do Computador que deseja deletar.');
    axios;
    Api.delete('/computadores/' + idComp)
      .then((result) => {
        console.log(result);
        setClientes(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
};
export default Compu;
