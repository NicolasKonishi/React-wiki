import React from 'react';
import { ItemContainer } from './styles.js';

function ItemRepo({ repo, handleRemoveRepo }) {
  
  const handleRemove = () => {
    handleRemoveRepo(repo?.id);
  };

  return (
    repo ? ( 
      <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <div className="button-container">
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a>
        <button onClick={handleRemove} className="remover">Remover</button>
      </div>
      <hr />
    </ItemContainer>
    ) : (
      <p>Repositório não encontrado.</p>  
    )
  );
}

export default ItemRepo;
