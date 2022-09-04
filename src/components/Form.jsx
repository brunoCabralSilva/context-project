import React, { useState, useContext } from 'react';
import context from '../context/context';

export default function Form() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('2001/01/01');
  const [number, setNumber] = useState(0);
  const [link, setLink] = useState('');

  const cont = useContext(context);
  console.log("contexto:", cont);
  const { exports } = cont;
  const { update } = exports;

  return(
    <form>
      <div className="forms">
        <label>
          <p>Informe o nome do projeto:</p>
          <input type="text" placeholder="Título" onChange={ (e) => setName(e.target.value)} />
        </label>  
        <label>
        <p>Informe a data que este projeto foi concluído:</p>
        <input type="date" onChange={ (e) => setDate(e.target.value)} />
        </label>  
        <label>
        <p>Informe quantas pessoas estiveram envolvidas neste projeto:</p>
        <input type="number" placeholder="Número de pessoas envolvidas" onChange={ (e) => setNumber(e.target.value)} />
        </label>
        <label>
        <p>Cole abaixo um link de uma imagem para seu projeto:</p>
        <input type="text" placeholder="link da imagem" onChange={ (e) => setLink(e.target.value)} />
        </label>
        <button type="button" onClick={ () => update(name, date, number, link) }>
          Adicionar
        </button>
      </div>
    </form>
  );
}