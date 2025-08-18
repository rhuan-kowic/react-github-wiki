import React from "react";
import { ItemContainer } from "./styles";
export default function ItemRepo({ repo }) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noopener" target="_blank" >
        Ver repositorio
      </a>{" "}
      <br />
      <a href="#" className="remover" rel="noopener">
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}
