import React from "react";
import { ItemContainer } from "./styles";
export default function ItemRepo() {
  return (
    <ItemContainer>
      <h3>Rhuan</h3>
      <p>repo/rhuan</p>
      <a href="#">Ver repositorio</a> <br/>
      <a href="#" className="remover">
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}
