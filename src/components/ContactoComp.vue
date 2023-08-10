<template>
  <section id="contact" class="section-bg">
   <div class="container">
      <div class="row">
         <div class="section-header">
            <h2 class="text-start">Contáctanos</h2>
            <div class="line"></div>
            </div>
         </div>    
      </div>
      <div class="container-fluid px-0" >
         <div class="map">
            <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.7084182658523!2d-70.69881492436093!3d-32.74693236182972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9688113c6b7e8dc3%3A0x74d54bb20bb144d7!2sSergio%20Caballero%20Espinoza%2C%20San%20Felipe%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1690321163802!5m2!1ses!2scl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 

         </div>
         <form action="correo.php" method="POST" role="form" class="form">
            <div class="row">
               <div class="form-group col-12 col-md-6">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Tu nombre" required>
               </div>

               <div class="form-group col-12 col-md-6">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Tu Email" required>
               </div>

               <div class="form-group col-12">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" required>
               </div>

               <div class="form-group col-12">
                  <textarea class="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
               </div>
            </div>
            <div class="text-center"><button type="submit">Enviar mensaje</button></div>
         </form>
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
   font-family: var(--font-primary);
   font-weight: 800;
   padding: 0;
   color: #333333;
}
#contact {
   padding: 60px 0;
}
#contact .map{
   margin-top: 4rem;
}
.section-header{

    font-family: var(--font-primary);
    letter-spacing: 1px;
    font-weight: 800;
}
#contact .line{
   height: 6px;
   width: 3rem;
   background-color: var(--color-green);
   border-radius: 5px;
}
#contact .form {
   box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
   padding: 30px;
   background: #fff;
   margin-top: 2rem;
}
@media(min-width: 600px){
   #contact .form{
      margin-inline: 3rem;
   }
}
@media(min-width: 800px){
   #contact .form{
      margin-inline: 5rem;
   }
}
@media(min-width: 1200px){
   #contact .form{
      margin-inline: 20rem;
   }
}
#contact .form .form-group {
   margin-bottom: 20px;
   font-family: var(--font-primary);
}
#contact .form input,
#contact .form textarea {
   padding: 10px 14px;
   border-radius: 0;
   box-shadow: none;
   font-size: 15px;
   font-family: var(--font-primary);
}
#contact .form input::focus,
#contact .form textarea::focus {
background-color: var(--color-green);
}
#contact .form button[type=submit] {
   font-family: var(--font-primary);
   background: var(--color-green);
   border: 0;
   padding: 10px 30px;
   color: #fff;
   transition: 0.4s;
   cursor: pointer;
   border-radius: 30px;
}
#contact .form button[type=submit]:hover {
   background: #13a456;
}
</style>
