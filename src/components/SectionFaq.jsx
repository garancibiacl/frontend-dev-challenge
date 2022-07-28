




// import React from "react";

// function SectionFaq() {
//   return (
//     <div className="faq__containerM">
//     <h1 className="faq__title">
//       <strong>PREGUNTAS</strong>&nbsp;  FRECUENTES
//     </h1>
//     <div className="faq">
//   <ul>
//     <li>
//       <input type="checkbox" checked/>
//       <i></i>
//       <h2>Hvordan..?</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae debitis iusto voluptatum doloribus rem, qui nesciunt labore tempore fugit iste deserunt incidunt error provident repudiandae laudantium quo ipsa unde perspiciatis, nihil autem distinctio! Deserunt, aspernatur.</p>
//     </li>
//     <li>
//       <input type="checkbox" checked/>
//       <i></i>
//       <h2>Hvorfor..?</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi, quia provident facere recusandae itaque assumenda fuga veniam dicta earum dolorem architecto facilis nisi pariatur.</p>
//     </li>
//     <li>
//       <input type="checkbox" checked/>
//       <i></i>
//       <h2>Hvad..?</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.</p>
//     </li>
//   </ul>
// </div>
//     </div>
//   );
// }

// export default SectionFaq




import React from "react";
import $ from 'jquery';



function SectionFaq() {
  $(".accordion_tab").click(function(){
    $(".accordion_tab").each(function(){
      $(this).parent().removeClass("active");
      $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");
  });

  return (
    <div className="faq__containerM">
    <h1 className="faq__title">
      <strong>PREGUNTAS</strong>&nbsp;  FRECUENTES
    </h1>
    <div class="wrapper">
  <div class="accordion active">
    <div class="accordion_tab active">
    ¿Por qué nos gusta creer en el mito del alma gemela?
        <div class="accordion_arrow">
          <img src="https://i.imgur.com/PJRz0Fc.png" alt="arrow"/>
      </div>
    </div>
    <div class="accordion_content">
      <div class="accordion_item">
        <p class="item_title">Accordion SubTitle</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quis sed praesentium dolorem hic ipsam maiores magnam voluptatem deleniti sunt.</p>
      </div>
      <div class="accordion_item">
        <p class="item_title">Accordion SubTitle</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quis sed praesentium dolorem hic ipsam maiores magnam voluptatem deleniti sunt.</p>
      </div>
    </div>
  </div>
  <div class="accordion">
    <div class="accordion_tab">
        Accordion Title
        <div class="accordion_arrow">
          <img src="https://i.imgur.com/PJRz0Fc.png" alt="arrow"/>
      </div>
    </div>
    <div class="accordion_content">
      <div class="accordion_item">
        <p class="item_title">Accordion SubTitle</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quis sed praesentium dolorem hic ipsam maiores magnam voluptatem deleniti sunt.</p>
      </div>
      <div class="accordion_item">
        <p class="item_title">Accordion SubTitle</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quis sed praesentium dolorem hic ipsam maiores magnam voluptatem deleniti sunt.</p>
      </div>
    </div>
  </div>
  <div class="accordion">
    <div class="accordion_tab">
        Accordion Title
        <div class="accordion_arrow">
          <img src="https://i.imgur.com/PJRz0Fc.png" alt="arrow"/>
      </div>
    </div>
    <div class="accordion_content">
      <div class="accordion_item">
        <p class="item_title">Accordion SubTitle</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quis sed praesentium dolorem hic ipsam maiores magnam voluptatem deleniti sunt.</p>
      </div>
      <div class="accordion_item">
        <p class="item_title">Accordion SubTitle</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quis sed praesentium dolorem hic ipsam maiores magnam voluptatem deleniti sunt.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default SectionFaq