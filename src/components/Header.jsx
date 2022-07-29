// import React, { Component } from 'react'
// import {Link} from 'react-scroll'



// function Header (Component)  {


//   return (
//     <div className="header">
//       <div className="header__wrap">
//         <div className="header__box">
//           <h2>Conoce nuestro profesionales con licencia</h2>
//           <h1>Su viaje de <strong style={{color:'#F778B9'}}>salud emocional  </strong>empieza aqui</h1>
//           <div className="header__button">
//       <a  className="header__button--primary" href=""><Link  to="contact" spy={true} smooth={true}>Conoce más</Link></a>

//       </div>
//         </div>
      
//       </div>
   
//     </div>
    
//   );
// }

// export default Header;


import React, { Component } from 'react'
import {Link} from 'react-scroll'

export default class Header extends Component {
    render() {
        return (
          <div className="header">
          <div className="header__wrap">
            <div className="header__box">
              <h2>Conoce nuestro profesionales con licencia</h2>
              <h1>Su viaje de <strong style={{color:'#F778B9'}}>salud emocional  </strong>empieza aqui</h1>
              <div className="header__button">
          <a  className="header__button--primary" ><Link  to="articulo" spy={true} smooth={true}>Conoce más</Link></a>
    
          </div>
            </div>
          
          </div>
       
        </div>
        )
    }
}
