import React from "react";
import banner59 from "../assets/customPng/banner59.png";
import Banner from "./banner/banner";
import ItemListContainer from "./ItemListContainer";
import TextoInicio from "./text_inicio";

const Inicio = () => {
  return (
    <div>
      <br></br>
      <ItemListContainer greeting="Bienvenido a Punto 59!"></ItemListContainer>
      <Banner></Banner>
      <TextoInicio></TextoInicio>
      <div style={{ display: "flex" }}>
        <img
          style={{ position: "absolute", left: "calc((100% - 1920px)/2)" }}
          src={banner59}
          height="375"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Inicio;
