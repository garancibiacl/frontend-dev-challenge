import React from "react";
import logo from "../img/logo.svg";
import Hamburger from 'hamburger-react'
// import { useState } from 'react';
// import { SlButton, SlDrawer } from '@shoelace-style/shoelace/dist/react';

// import { Drawer, ANCHOR } from "baseui/drawer";

function Nav() {

  // const [isOpen, setIsOpen] = React.useState(false);

  return (

      <div className="nav ">
        

      <a class="nav__link" href="#"  >
      <Hamburger size={30}    />
      </a>

   
      <a class="nav__link" href="#">
        <img class="nav__logo" src={logo} width="230px" alt='' />
      </a>
  


      <a class="nav__link" href="#">
        <box-icon name="search-alt" color="#414141" size={30} ></box-icon>
      </a>



  

    {/* <>
    <Drawer
      isOpen={isOpen}
      autoFocus
      onClose={() => setIsOpen(false)}
      anchor={ANCHOR.left}
    >
      <div>drawer content</div>
    </Drawer>
    </> */}
   </div>

  );
}

export default Nav;
