<template>
   <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">
  <section id="contact" class="section-bg">
     <div class="container-fluid" >
         <div class="datos">
            <div class="section-header">
               <h2 class="">Contáctanos</h2>
               <div class="line"></div>
               <!-- <p>Conoce todas las formas de ubicarnos</p> -->
            </div>
            <!-- <div class="row contact-info">
               <div class="col-md-4">
                  <div class="contact-address">
                     <i class="bi bi-geo-alt"></i>
                     <h3>Dirección</h3>
                     <address>San Felipe, Valparaíso, Chile</address>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="contact-phone">
                     <i class="bi bi-phone"></i>
                     <h3>Teléfono</h3>
                     <p><a href="tel:+155895548855">+56 9 9135 1542</a></p>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="contact-email">
                     <i class="bi bi-envelope"></i>
                     <h3>Email</h3>
                     <p><a href="mailto:info@example.com">info@solsa.cl</a></p>
                  </div>
               </div>
            </div>     -->
         </div>    
         <div class="map">
            <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.7084182658523!2d-70.69881492436093!3d-32.74693236182972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9688113c6b7e8dc3%3A0x74d54bb20bb144d7!2sSergio%20Caballero%20Espinoza%2C%20San%20Felipe%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1690321163802!5m2!1ses!2scl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 

         </div>
        <div class="form">
           <form action="correo.php" method="POST" role="form" class="php-email-form">
              <div class="row">
                 <div class="form-group col-md-6">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Tu nombre" required>
                 </div>
                 <div class="form-group col-md-6">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Tu Email" required>
                 </div>
              </div>
              <div class="form-group">
                 <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" required>
              </div>
              <div class="form-group">
                 <textarea class="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
              </div>
              <div class="my-3">
                 <div class="loading">Cargando</div>
                 <div class="error-message"></div>
                 <div class="sent-message">Tu mensaje se envió, gracias!</div>
              </div>
              <div class="text-center"><button type="submit">Enviar mensaje</button></div>
           </form>
        </div>
     </div>
  </section>
  <!-- End Contact Section -->
</template>
<script>
  export default {
  name: 'ContactoComp',
  }
</script>
<style scoped>
.datos,
.form{
   margin-inline: 20rem;
   margin-top: 2rem;
}
  a {
  color: var(--color-green);
  transition: 0.5s;
  text-decoration: none;
  }
  a:hover,
  a:active,
  a:focus {
  color: var(--color-green);
  outline: none;
  text-decoration: none;
  }
  p {
  padding: 0;
  margin: 0 0 30px 0;
  font-family: var(--font-primary);
  }
  h2 {

  padding: 0;
  font-family: var(--font-primary);
  font-weight: 800;
  }
  #contact {
  padding: 60px 0;
  }
  #contact .container-fluid{
   padding-inline: 0;
  }
  #contact .map{
   margin-top: 4rem;
  }
  #contact .line{
   height: 6px;
   width: 3rem;
   background-color: var(--color-green);
   border-radius: 5px;
  }

  #contact .contact-address,
  #contact .contact-phone,
  #contact .contact-email {
  margin-bottom: 20px;
  }
  @media (min-width: 768px) {
  #contact .contact-address,
  #contact .contact-phone,
  #contact .contact-email {
  padding: 20px 0;
  }
  }
  @media (min-width: 768px) {
  #contact .contact-phone {
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  }
  }
  #contact .php-email-form {
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 30px;
  background: #fff;
  }
  #contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
  }
  #contact .php-email-form .error-message br+br {
  margin-top: 25px;
  }
  #contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: var(--color-green);
  text-align: center;
  padding: 15px;
  font-weight: 600;
  }
  #contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
  }
  #contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid var(--color-green);
  border-top-color: #eee;
  animation: animate-loading 1s linear infinite;
  }
  #contact .php-email-form .form-group {
  margin-bottom: 20px;
  font-family: var(--font-primary);
  }
  #contact .php-email-form input,
  #contact .php-email-form textarea {
  padding: 10px 14px;
  border-radius: 0;
  box-shadow: none;
  font-size: 15px;
  font-family: var(--font-primary);
  }
  #contact .php-email-form input::focus,
  #contact .php-email-form textarea::focus {
  background-color: var(--color-green);
  }
  #contact .php-email-form button[type=submit] {
  font-family: var(--font-primary);
  background: var(--color-green);
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
  border-radius: 30px;
  }
  #contact .php-email-form button[type=submit]:hover {
  background: #13a456;
  }
  @keyframes animate-loading {
  0% {
  transform: rotate(0deg);
  }
  100% {
  transform: rotate(360deg);
  }
  }
</style>
