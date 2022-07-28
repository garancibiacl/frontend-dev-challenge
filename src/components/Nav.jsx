import React from "react";
import logo from "../img/logo.svg";

function Nav() {
  return (
    <nav className="nav">
      <a class="nav__link" href="#">
        <box-icon
          name="menu"
          color="#414141"
          // size="md"
        ></box-icon>
      </a>

      <a class="nav__link" href="#">
        <img class="nav__logo" src={logo} width="160px" alt='' />
      </a>
      <a class="nav__link" href="#">
        <box-icon name="search-alt" color="#414141"></box-icon>
      </a>
    </nav>
  );
}

export default Nav;
