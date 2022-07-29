import React from 'react'
import LogoFooter from "../img/logo-footer.png";
import Separator from "../img/Separator.png";




function Footer() {
  return (

<div class="footer__container">
  <div class="footer__logo">
    <img className=""  src={LogoFooter}  alt='' />
</div>
  <div className="footer__text">
    <p>La Mente es Maravillosa is a property of Grupo MContig 2020. All rights reserved.
        Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>
</div>
  <div class="footer__separacion">
    <img className="footer__img"  src={Separator}  alt='' /> 
</div>

<div className='footer__item__container'>
  <div className=''>
    <a href="">Política de Cookies</a>
  </div>
  <div>
    <a href="">Política de Privacidad</a>
  </div>
  <div>
    <a href="">Términos y condiciones de uso</a>
  </div>
  <div>
    <a href="">Cláusula Informativa de Consentimiento</a>
  </div>
  </div>
</div>






  );
}

export default Footer


