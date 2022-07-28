import React from "react";

function SectionContacto() {
  return (
    <div className="container__contacto">
            <h1 className="contacto__title">
      <strong>FORMULARIO</strong>&nbsp;  DE CONTÁCTO
    </h1>
<div className="container__box">
        <div class="styled-input wide">
          <input type="text" required />
          <label>Nombre</label>
        </div>


      <div class="container__email-number">
        <div class="styled-input">
          <input type="text" required />
          <label>Email</label>
        </div>

				<div class="styled-input">
					<input type="text" required />
					<label>Teléfono</label> 
				</div>
			</div>

      <div class="">
      <div class="styled-input wide">
					<textarea required></textarea>
					<label>Comentario</label>
				</div>

                <div class="col-xs-12">
				<div class="btn-lrg submit-btn">Enviar</div>
			</div>
    
      </div>
      </div>
    </div>
    
  );
}

export default SectionContacto;
