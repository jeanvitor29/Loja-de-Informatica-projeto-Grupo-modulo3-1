import { useState, useEffect } from 'react';
import Api from '../axios/config.js'
import { Link } from 'react-router-dom';

import "./Home.css"
import axios from 'axios';

const Home = () => {
  const [categoria, setCategoria] = useState([])

  const getCategoria = async() => {
    
    try {

      const response = await Api.get("/Categorias")
      
      const data = response.data;

      setCategoria(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{
    getCategoria();

  }, []);

   return(
 <div className='home'>
      <h1>Categorias</h1>
      {categoria.length === 0 ? (<h1>Carregando...</h1>) : (
        categoria.map((categoria) => (
          <div className="categoria" key={categoria.id}>
            <h2>{categoria.nome}</h2>
            <img className='imgs' src={categoria.imagem} alt="" />
            <p>{categoria.corpo}</p>
            <Link to={`/${categoria.nome}`} className="btn" >Ver Produtos</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home