import Nav from "./components/Nav";
import Header from "./components/Header";
import SectionArticulo from "./components/SectionArticulo";
import SectionPsicology from "./components/SectionPsicology";
import banner from "./img/banner-summer.png";
import SectionFaq from "./components/SectionFaq";
import TestimonialSlider from "./components/TestimonialSlider";
import SectionDestacado from "./components/SectionDestacado";
import SectionContacto from "./components/SectionContacto";
import Footer from "./components/Footer";
import "./index.scss";

import "./App.scss";

function App() {
  return (
    <div className="container-main">
   
      {/* <!-- Navbar --> */}
      <Nav />
      
      {/* <!-- Header --> */}
      <Header />

      <div className="container">
 
        <SectionArticulo />
        <SectionPsicology />
        <img className="banner__img" src={banner} alt="Separator" />
        <SectionFaq />
        <TestimonialSlider />
        <SectionDestacado />
        <SectionContacto />
      </div>

      <Footer />
    </div>
  );
}

export default App;

