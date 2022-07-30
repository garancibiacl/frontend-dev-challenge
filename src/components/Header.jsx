import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__wrap">
          <div className="header__box">
            <h2>Conoce nuestro profesionales con licencia</h2>
            <h1>
              Su viaje de
              <strong style={{ color: "#F778B9" }}>salud emocional </strong>
              empieza aqui
            </h1>
            <div className="header__button">
              <Link to="articulo" spy={true} smooth={true}>
                <button type="button" className="header__button--primary"> Conoce más 
                <box-icon name='chevron-right' color="#fff" size={60}></box-icon>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
