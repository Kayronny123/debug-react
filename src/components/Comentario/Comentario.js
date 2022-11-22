import React from "react";
import { Comentario } from "./styled";

export default function Comentarios(props) {
  return (
    <Comentario>
      <input
        placeholder="Adicionar comentario"
        value={props.comentario && props.comentario.comentario}
        onChange={props.onChangeComentario}
      />
      <button onclick={props.adicionaComentario}>Comentar Post</button>
      <p>{props && props.comentario}</p>
    </Comentario>
  );
}
