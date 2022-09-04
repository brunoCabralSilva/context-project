import React, { useContext } from 'react';
import context from '../context/context';

export default function Data() {

  const cont = useContext(context);
  const { exports } = cont;
  const { globalName, globalDate, globalNumber, globalLink } = exports;

  return(
    <article>
      {globalLink !== undefined
        ? 
        <div className="data">
          <div className="data-image">
            <img src={globalLink} alt="Imagem do Projeto" />
          </div>
          <div className="data-content">
            <p className="text">
              <strong>Nome do Projeto: </strong>
              <span>{ globalName }</span>
            </p>
            <p className="text">
              <strong>Data da entrega: </strong>
              <span>{ globalDate }</span>
            </p>
            <p className="text">
              <strong>Número de participantes: </strong>
              <span>{ globalNumber }</span>
            </p>
          </div>
        </div>
        : null
      }
    </article>
  );
}