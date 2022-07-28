import React from 'react'
import LogoFooter from "../img/logo-footer.png";
import Separator from "../img/Separator.png";




function Footer() {
  return (
<div className="footer__container">

<div className="footer__logo">
<img className=""  src={LogoFooter}  alt='' />


<div className="footer__text">
<p>La Mente es Maravillosa is a property of Grupo MContig 2020. All rights reserved.
Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>
</div>
</div>
<div className="footer__separacion">
<img className="footer__img"  src={Separator}  alt='' />
</div>
<div className="footer__nav">
  <a href="">Política de Cookies</a>
  <a href="">Política de Privacidad</a>
  <a href="">Términos y condiciones de uso</a>
  <a href="">Cláusula Informativa de Consentimiento</a>
</div>
</div>
  );
}

export default Footer
