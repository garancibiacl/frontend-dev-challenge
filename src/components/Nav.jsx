import React from "react";
import logo from "../img/logo.svg";
import Hamburger from "hamburger-react";
// import { useState } from 'react';
// import { SlButton, SlDrawer } from '@shoelace-style/shoelace/dist/react';

// import { Drawer, ANCHOR } from "baseui/drawer";
import ReactDOM from "react-dom";

function Nav() {
  return (
    <div className="nav ">
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <div class="menu__box">
          <a class="menu__title" href="">Embarazo</a>
          <ul >

            <li>
              <a class="menu__item" href="#">
                Quiero ser mamá
                <box-icon name='right-arrow-alt'></box-icon>
              </a>
            </li>
            <li>
              <a class="menu__item" href="#">
                Voy a ser mamá
                <box-icon name='right-arrow-alt'></box-icon>
              </a>
            </li>
            <li>
              <a class="menu__item" href="#">
                Parto
                <box-icon name='right-arrow-alt'></box-icon>
              </a>
            </li>
            <a class="menu__title" href="">Educación</a>
            <li>
              <a class="menu__item" href="#">
                Aprende a ser mamá
                <box-icon name='right-arrow-alt'></box-icon>
              </a>
            </li>
            <li>
              <a class="menu__item" href="#">
                Educación para bebés
                <box-icon name='right-arrow-alt'></box-icon>
              </a>
            </li>
            <li>
              <a class="menu__item" href="#">
                Educación para niños
                <box-icon name='right-arrow-alt'></box-icon>

              </a>
            </li>
          </ul>
        </div>
      </div>
      <a class="nav__logo__container" href="#">
        <img class="nav__logo" src={logo} width="230px" alt="" />
      </a>
      <a class="nav__search" href="#">
        <box-icon name="search-alt" color="#414141" size={30}></box-icon>
      </a>
    </div>
  );
}

export default Nav;
