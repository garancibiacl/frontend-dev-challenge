
import SectionArticulo from "./components/SectionArticulo";
import SectionPsicology from "./components/SectionPsicology";
import banner from "./img/banner-summer.png";
import SumerMobile from "./img/Summer-Camp-mobile.png";
import SectionFaq from "./components/SectionFaq";
import TestimonialSlider from "./components/TestimonialSlider";
import SectionDestacado from "./components/SectionDestacado";
import SectionContacto from "./components/SectionContacto";
// import Footer from "./components/Footer";
import "./index.scss";

import "./App.scss";

function App() {
  return (
<div class="container__main">

  <div class="container__section">  
   <SectionArticulo />
   </div>
  <div class="container__section">
  <SectionPsicology />
  </div>
  <div class="container__section">
  <img className="banner__img" src={banner} alt="Separator" />
  <img className="banner__img--mobile" src={SumerMobile} alt="Separator" />
  </div>
  <div class="container__section">
  <SectionFaq />
  </div>
  <div class="container__section">
  <TestimonialSlider />
  </div>
  <div class="container__section">  <SectionDestacado /></div>
  <div class="container__section">      <SectionContacto /></div>



</div>

  );
}

export default App;


