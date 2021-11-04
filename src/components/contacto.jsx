import React from "react";
import ItemCount from "./ItemCount/ItemCount";

const Contacto = () => {
  return (
    <div>
      <h1>Contador</h1>
      <ItemCount stock={5} initial={1}></ItemCount>
    </div>
  );
};

export default Contacto;
