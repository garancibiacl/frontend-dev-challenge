import React from "react";
import img from "../img/photo-01.png";

// import logo from "../img/logo.svg";

function SectionPsicology() {
  return (
    <div class="psicolo__container">
      <div class="psicolo__titleP">
        <h1 className="psicolo__title">
          <strong>PSICOLOGÍA</strong> EDUCATIVA
        </h1>
      </div>
      <div class="psicolo__container__card">
        <div class=" psicolo__card__one">
          <img
            src="https://lamenteesmaravillosa.com/wp-content/uploads/2021/06/madre-hablando-hija-pequena-cama-768x512.jpg?auto=webp&quality=45&width=320&crop=16:9,smart,safe"
            width="200"
            alt=""
          />

          <div className="psicolo__card__one__img">
            <h4>Los beneficios psicológicos</h4>
            <p>
              A pesar de que algunos padres se puedan quejar de lo mucho que
              acumulan sus hijos...
            </p>
            <a href="">VER MÁS</a>
          </div>
        </div>
      </div>
      <div class="psicolo__container__card">
        <div class=" psicolo__card__one">
          <img src={img} width="200" alt="" />

          <div className="psicolo__card__one__img">
            <h4>Los beneficios psicológicos</h4>
            <p>
              A pesar de que algunos padres se puedan quejar de lo mucho que
              acumulan sus hijos...
            </p>
            <a href="">VER MÁS</a>
          </div>
        </div>
      </div>
      <div class="psicolo__container__card">
        <div class=" psicolo__card__one">
          <img
            src="https://lamenteesmaravillosa.com/wp-content/uploads/2021/02/padres-hablando-hija-adolescente-768x512.jpg?auto=webp&quality=45&width=320&crop=16:9,smart,safe"
            width="200"
            alt=""
          />

          <div className="psicolo__card__one__img">
            <h4>Los beneficios psicológicos</h4>
            <p>
              A pesar de que algunos padres se puedan quejar de lo mucho que
              acumulan sus hijos...
            </p>
            <a href="">VER MÁS</a>
          </div>
        </div>
      </div>
      <div class="psicolo__container__card">
        <div class=" psicolo__card__one">
          <img
            src="https://lamenteesmaravillosa.com/wp-content/uploads/2022/02/nino-aburrido-estudiando-768x512.jpg?auto=webp&quality=45&width=320&crop=16:9,smart,safe"
            width="200"
            alt=""
          />

          <div className="psicolo__card__one__img">
            <h4>Los beneficios psicológicos</h4>
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
