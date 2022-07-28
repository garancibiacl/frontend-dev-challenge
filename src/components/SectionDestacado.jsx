import React from "react";
import logo from "../img/logo.svg";

function SectionDestacado() {
  return (

<div class="container__destacado">
  <div class="container__destacado__card">
  <h1 className="container__destacado__title">
    <strong>DESTACADO</strong>
  </h1>
  </div>
  <div class="container__card">
    <div class="card-header">
      <img
        src="https://lamenteesmaravillosa.com/wp-content/uploads/2022/07/hermano-mayor-abrazando-hermano-pequeno-768x512.jpg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe"
        alt="rover"
      />
    </div>
    <div class="container__card-body">
      <span class="tag tag-teal">Familia</span>
      <h4>Hermanos que hacen de padres: ¿ha sido tu caso?</h4>
      <p>
        Algunos padres cometen el error de cargar con responsabilidades que
        no les corresponden a alguno de sus hijos
      </p>
    </div>
  </div>
  <div class="container__card">
    <div class="card-header">
      <img
        src="https://lamenteesmaravillosa.com/wp-content/uploads/2022/07/mujer-triste-cama-768x512.jpg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe"
        alt="rover"
      />
    </div>
    <div class="container__card-body">
      <span class="tag tag-pink">Psicología Clínica</span>
      <h4>Colapso mental: cuando siento el peso del mundo sobre mí</h4>
      <p>
        A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y
        le obligó a llevar el peso de…
      </p>
    </div>
  </div>
  <div class="container__card">
      <div class="card-header">
        <img
          src="https://lamenteesmaravillosa.com/wp-content/uploads/2022/07/mujer-problemas-concentracion-768x512.jpg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe"
          alt="rover"
        />
      </div>
      <div class="container__card-body">
        <span class="tag tag-purple">Desarrollo Personal</span>
        <h4>
          5 causas frecuentes de la falta de concentración y cómo mejorarla
        </h4>
        <p>
          La capacidad para concentrarnos es una variable fundamental en
          nuestro día a día, o lo que es similar, la falta…
        </p>
      </div>
    </div>
</div>
 
  );
}

export default SectionDestacado;


