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
        <ul class="menu__box">
          <li>
            <a class="menu__item" href="#">
              Home
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              About
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Team
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Contact
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <a class="nav__logo__container" href="#">
        <img class="nav__logo" src={logo} width="230px" alt="" />
      </a>
      <a class="nav__link" href="#">
        <box-icon name="search-alt" color="#414141" size={30}></box-icon>
      </a>
    </div>
  );
}

export default Nav;
