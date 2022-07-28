




import React from "react";

// const page = document.querySelectorAll(".accordion_tab").click(function(){
//   const page  =  document.getElementByClassName(".accordion_tab").each(function(){
//     this.parent().classList.remove("active");
//     this.classList.remove("active");
//   });
//   this.parent().classList.add("active");
//   this.classList.add("active");
// });

function SectionFaq() {
  // $(".accordion_tab").click(function(){
  //   $(".accordion_tab").each(function(){
  //     $(this).parent().removeClass("active");
  //     $(this).removeClass("active");
  //   });
  //   $(this).parent().addClass("active");
  //   $(this).addClass("active");
  // });



  return (
<div class="container__faq">
  <div class="container__faq__answer">
  <h1 className="faq__title">
      <strong>PREGUNTAS</strong>&nbsp;  FRECUENTES
    </h1>
  </div>
  <div class="container__faq__answer">
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
  <div class="container__faq__answer">
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
  <div class="container__faq__answer">
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
</div>
  );
}

export default SectionFaq


