import React from "react";
import logo from "../img/img-articulo.png";
import ButtonPrimary from './ButtonPrimary'

// import logo from "../img/logo.svg";

function SectionArticulo() {
  return (
    // <div className="articulo__container">
    //   <div className="">
    //     <h1 className="articulo__title"><strong>ARTÍCULOS</strong> POPULARES</h1>
    //   </div>
    //   <div className="articulo__text">
    //     <h3 className="articulo__text--style">
    //       <strong>¿Cómo podemos diseñar una educación que tenga como resultado niños más
    //       responsables?</strong> En este artículo compartimos algunas estrategias que
    //       aumentan la probabilidad de éxito para este objetivo.
    //     </h3>
    //     <ButtonPrimary/>
    //   </div>
      
    //   <div className="articulo__img">
    //     <img src={logo} width="532" alt="" />
    //   </div>
    // </div>

    <div class="articulo__container">
  <div class="articulo__container__tile">
  <h1 className="articulo__title"><strong>ARTÍCULOS</strong> POPULARES</h1>
  </div>
  <div class="articulo__title__secundary">
  <h3 className="articulo__text--style">
  <strong>¿Cómo podemos diseñar una educación que tenga como resultado niños más
 responsables?</strong> En este artículo compartimos algunas estrategias que
aumentan la probabilidad de éxito para este objetivo.
</h3>
<ButtonPrimary/>
  </div>
  <div class="articulo__title__secundary">
  <img src={logo} width="532" alt="" />
  </div>
</div>

  );
}

export default SectionArticulo;
