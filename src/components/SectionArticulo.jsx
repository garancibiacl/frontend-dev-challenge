// import React from "react";
import logo from "../img/img-articulo.png";
import ButtonPrimary from "./ButtonPrimary";
import React, { Component } from 'react'


export default class SectionArticulo extends Component {
  render() {
      return (
          <>
    <div id="articulo" class="articulo__container">
      <div class="articulo__container__tile">
        <h1 className="articulo__title">
          <strong>ARTÍCULOS</strong> POPULARES
        </h1>
      </div>
      <div class="articulo__title__secundary">
        <h3 className="articulo__text--style">
          <strong>
            ¿Cómo podemos diseñar una educación que tenga como resultado niños
            más responsables?
          </strong>{" "}
          En este artículo compartimos algunas estrategias que aumentan la
          probabilidad de éxito para este objetivo.
        </h3>
        <ButtonPrimary />
      </div>
      <div class="articulo__title__secundary">
        <img src={logo} width="532" alt="" />
      </div>
    </div>
          </>
      )
  }
}
