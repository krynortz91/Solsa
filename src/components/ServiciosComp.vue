<template>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"> 
   <!-- ======= About Us Section ======= -->
   <section id="about">
       <div class="container" data-aos="fade-up">
           <header class="section-header">
               <h2 class="no-span">Nuestros Servicios<b></b></h2>
               <!-- <p>Revisa nuestros servicios.</p> -->
           </header>
           <div class="row about-cols">
               <div class="col-md-4 h-100" data-aos="fade-up" data-aos-delay="100">
                   <div class="about-col">
                       <div class="img">
                           <img src="../assets/servicios/3.jpg" alt="" class="img-fluid">
                           <div class="icon"><i class="bi bi-gear-fill"></i></div>
                       </div>
                       <h2 class="title">Mecanizado en Terreno</h2>
                       <p>
                           Maximiza la eficiencia y minimiza los tiempos de inactividad con nuestro servicio de mecanizado directamente en tu ubicación. Descubre cómo podemos llevar tu proyecto al siguiente nivel. 
                           <br><br>
                           <router-link to="/ServiciosView"><img src="../assets/more.png" alt="" srcset="" width="20">  Ver más</router-link>
                       </p>
                   </div>
               </div>
               <div class="col-md-4 h-100" data-aos="fade-up" data-aos-delay="200">
                   <div class="about-col">
                       <div class="img">
                           <img src="../assets/5.jpg" alt="" class="img-fluid">
                           <div class="icon"><i class="bi bi-box-seam"></i></div>
                       </div>
                       <h2 class="title">Arriendo de Equipos <br> de Apoyo</h2>
                       <p>
                           Potencia tu proyecto con la mejor infraestructura. Contamos con una amplia gama de equipos disponibles para arriendo, listos para brindarte el respaldo necesario. 
                           <br><br>
                           <router-link to="/ServiciosView"><img src="../assets/more.png" alt="" srcset="" width="20">  Ver más</router-link>
                       </p>
                   </div>
               </div>
               <div class="col-md-4 h-100" data-aos="fade-up" data-aos-delay="300">
                   <div class="about-col">
                       <div class="img">
                           <img src="../assets/servicios/2.jpg" alt="" class="img-fluid">
                           <div class="icon"><i class="bi bi-truck"></i></div>
                       </div>
                       <h2 class="title">Arriendo de Camionetas 4x4 <br>con equipamiento Minero</h2>
                       <p>
                           Potencia tu proyecto con la movilidad y resistencia que necesitas. Nuestras camionetas 4x4 equipadas para el sector minero están listas para enfrentar cualquier desafío.             
                           <br><br>
                           <router-link to="/ServiciosView"><img src="../assets/more.png" alt="" srcset="" width="20">  Ver más</router-link>
                       </p>
                   </div>
               </div>
           </div>
           <div class="row about-cols">
               <div class="col-md-4 h-100" data-aos="fade-up" data-aos-delay="100">
                   <div class="about-col">
                       <div class="img">
                           <img src="../assets/servicios/1.jpg" alt="" class="img-fluid">
                           <div class="icon"><i class="bi bi-wrench"></i></div>
                       </div>
                       <h2 class="title">Reparación de Equipos Autónomos</h2>
                       <p>
                           Nuestro servicio de reparación especializado en equipos autónomos garantiza su pronta recuperación y funcionamiento óptimo.
                           <br><br>
                           <router-link to="/ServiciosView"><img src="../assets/more.png" alt="" srcset="" width="20">  Ver más</router-link>
                       </p>
                   </div>
               </div>
               <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                   <div class="about-col">
                       <div class="img">
                           <img src="../assets/servicios/4.jpg" alt="" class="img-fluid">
                           <div class="icon"><i class="bi bi-bar-chart"></i></div>
                       </div>
                       <h2 class="title">Proyectos</h2>
                       <p>
                           Confía en nuestro equipo para llevar a cabo proyectos integrales que abarcan desde la ingeniería y diseño, hasta la fabricación, reparación y mantenimiento.
                           <br><br>
                           <router-link to="/ServiciosView"><img src="../assets/more.png" alt="" srcset="" width="20">  Ver más</router-link>
                       </p>
                   </div>
               </div>
               <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
                   <div class="about-col">
                       <div class="img">
                           <img src="../assets/servicios/5.jpg" alt="" class="img-fluid">
                           <div class="icon"><i class="bi bi-tools"></i></div>
                       </div>
                       <h2 class="title"> Ferretería especializada</h2>
                       <p>
                           Encuentra todo lo que necesitas para tus proyectos. Nuestra amplia selección de herramientas y materiales de alta calidad te ofrece soluciones confiables y duraderas. 
                           <br><br>
                           <router-link to="/ServiciosView"><img src="../assets/more.png" alt="" srcset="" width="20">  Ver más</router-link>
                       </p>
                   </div>
               </div>
           </div>
       </div>
   </section>
   <!-- End About Us Section -->
</template>
<script>
   export default {
     name: "ServiciosComp",
     }
</script>
<style scoped>
   body {
   background: #fff;
   color: #666666;
   }
   a {
   color: #18d26e;
   transition: 0.5s;
   text-decoration: none;
   }
   .bi-plus{
   color:#18d26e;
   }
   a:hover,
   a:active,
   a:focus {
   color: #18d36e;
   outline: none;
   text-decoration: none;
   }
   p {
   padding: 0;
   margin: 0 0 30px 0;
   font-family: "Montserrat", sans-serif;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
   font-family: "Montserrat", sans-serif;
   font-weight: 800;
   margin: 0 0 0px 0;
   padding: 0;
   }
   .section-header h2{
    padding-bottom: 3rem;
    color: #333333;
   }
   
   #about {
   /* background: url("../img/about-bg.jpg") center top no-repeat fixed; */
   background-size: cover;
   padding: 60px 0 40px 0;
   position: relative;
   }
   #about::before {
   content: "";
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   background: rgba(255, 255, 255, 0.92);
   z-index: 9;
   }
   #about .container {
   position: relative;
   z-index: 10;
   }
   #about .about-col {
   background: #d6ffed2c;
   border-radius: 0 0 4px 4px;
   box-shadow:  1px 2px 8px rgba(0, 0, 0, 0.08);
   margin-bottom: 20px;
   transition: all 0.3s ease-in;
   }

   #about .about-col:hover {
    scale: 1.03;
   }

   #about .about-col .img {
   position: relative;
   }
   #about .about-col .img img {
   border-radius: 4px 4px 0 0;
   }
   #about .about-col .icon {
   width: 64px;
   height: 64px;
   text-align: center;
   position: absolute;
   background-color: #18d26e;
   border-radius: 50%;
   border: 4px solid #fff;
   left: calc(50% - 32px);
   bottom: -30px;
   transition: 0.3s;
   display: flex;
   align-items: center;
   justify-content: center;
   }
   #about .about-col i {
   font-size: 28px;
   line-height: 0;
   color: #fff;
   transition: 0.3s;
   }
   /* #about .about-col:hover .icon {
   background-color: #fff;
   } */
   /* #about .about-col:hover i {
   color: #18d26e;
   } */
   #about .about-col h2 {
   color: #000;
   text-align: start;
   font-weight: 700;
   font-size: 22px;
   padding-left: 20px;
   margin: 60px 0 12px 0;
   }
   #about .about-col h2 a {
   color: #202020;
   }
   /* #about .about-col h2 a:hover {
   color: #18d26e;
   } */
   #about .about-col p {
   font-size: 14px;
   line-height: 24px;
   color: #333;
   margin-bottom: 0;
   padding: 20px 20px 20px 20px;
   font-weight: 400;
   }
   router-link{
   margin-top: 15px;
   display: inline-block;
   color: #18d26e;
   font-family: "Montserrat", sans-serif;
   font-size: 14px;
   }
   .section-header{
      text-align: center;
      margin-top: 3rem;
      margin-bottom: 5rem;
      font-family: "Montserrat", sans-serif;
      letter-spacing: 1px;
      font-weight: 800;
   }
   h2.no-span {
    display: table;
    white-space: nowrap;
    &:before, &:after {
      border-top: 1px solid green;
      content: '';
      display: table-cell;
      position: relative;
      top: 0.5em;
      width: 45%;
    }
    &:before { right: 1.5%; }
    &:after { left: 1.5%; }
}
</style>
