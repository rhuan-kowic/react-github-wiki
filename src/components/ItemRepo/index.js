import React from "react";
import { ItemContainer } from "./styles";
export default function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noopener noreferrer" target="_blank">
        Ver repositorio
      </a>{" "}
      <br />
      <span  className="remover" onClick={(e) => {
        e.preventDefault();
        handleRemove()
      }}>
        Remover
      </span>
      <hr />
    </ItemContainer>
  );
}
