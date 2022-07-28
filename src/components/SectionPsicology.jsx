import React from "react";
import img from "../img/photo-01.png";
import ButtonPrimary from "./ButtonPrimary";

// import logo from "../img/logo.svg";

function SectionPsicology() {
  return (
    <div className="psicolo__containerM">
      <h1 className="psicolo__title">
        <strong>PSICOLOGÍA</strong> EDUCATIVA
      </h1>

      <div className=" row psicolo__container">
        <div class=" psicolo__card__one">
          <img src={img} width="200" alt="" />

          <div className="psicolo__card__one__img">
            <h4 >Los beneficios psicológicos</h4>
            <p>
              A pesar de que algunos padres se puedan quejar de lo mucho que
              acumulan sus hijos...
            </p>
            <a href="">VER MÁS</a>
          </div>
        </div>
        
        <div class=" psicolo__card__one">
          <img src={img} width="200" alt="" />

          <div className="psicolo__card__one__img">
            <h4 >Los beneficios psicológicos</h4>
            <p>
              A pesar de que algunos padres se puedan quejar de lo mucho que
              acumulan sus hijos...
            </p>
            <a href="">VER MÁS</a>
          </div>
        </div>
        <div class=" psicolo__card__one">
          <img src={img} width="200" alt="" />

          <div className="psicolo__card__one__img">
            <h4 >Los beneficios psicológicos</h4>
            <p>
              A pesar de que algunos padres se puedan quejar de lo mucho que
              acumulan sus hijos...
            </p>
            <a href="">VER MÁS</a>
          </div>
        </div>
        <div class=" psicolo__card__one">
          <img src={img} width="200" alt="" />

          <div className="psicolo__card__one__img">
            <h4 >Los beneficios psicológicos</h4>
            <p>
              A pesar de que algunos padres se puedan quejar de lo mucho que
              acumulan sus hijos...
            </p>
            <a href="">VER MÁS</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionPsicology;
