<template>
  <!-- ======= hero Section ======= -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">   <section id="hero">
     <div class="hero-container">
        <div id="heroCarousel" class="carousel slide carousel-fade">
           <div class="carousel-inner">
               <div class="hero-video">
  <video autoplay loop muted>
    <source src="../assets/video_solsa.mp4" type="video/mp4" />
    Tu navegador no admite el elemento de video.
  </video>
                 <div class="carousel-container">
                    <div class="container">
                       <h2 class="texto">
                          Montaje Industrial Soluciones de Ingeniería
                       </h2>
                       <p>Servicio de apoyo integral a operaciones industriales, Arriendo de equipos, Herramientas y más.</p>
                       <div  class="btn-get-started">
                        <router-link to="/ServiciosView">Servicios</router-link>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>
  <!-- End Hero Section -->
<ServiciosComp />
<CallComp />
<ContactoComp />

</template>
<script>
   import ServiciosComp from "@/components/ServiciosComp.vue"
   import CallComp from "@/components/CallComp.vue"
   import ContactoComp from "@/components/ContactoComp.vue"

   export default {
      name: "HomeView",
      components: {
         ServiciosComp,
         CallComp,   
         ContactoComp
      },
      updated() {
         var section=this.$router.currentRoute.value.hash.replace("#", "");
         if (section)
            this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
      },
      mounted(){
         var section=this.$router.currentRoute.value.hash.replace("#", "");
         if (section)
            this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
      }
   }

   
</script>
<style scoped>
  body {
   background: #fff;
   color: #666666;
   font-family: "Montserrat", sans-serif;
  }

  p {
   padding: 0;
   margin: 0 0 30px 0;
   font-family: "Montserrat", sans-serif;
  }

  #hero {
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;
  position: relative;
  font-family: "Montserrat", sans-serif;
  }
  @media (max-height: 500px) {
  #hero {
  height: 150vh;
  }
  }
  #hero .carousel,
  #hero .carousel-inner,
  #hero .carousel-item,
  #hero .carousel-item::before {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  }
  #hero .carousel-item {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  }
  #hero .carousel-item::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.7);
  }
  #hero .carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  top: 70px;
  left: 50px;
  right: 50px;
  }
  #hero .container {
  text-align: center;
  }
  #hero h2 {
  color: #fff;
  margin-bottom: 30px;
  font-size: 48px;
  font-weight: 700;
  }
  @media (max-width: 768px) {
  #hero h2 {
  font-size: 28px;
  }
  }
  #hero p {
  width: 80%;
  margin: 0 auto 30px auto;
  color: #fff;
  }
  @media (min-width: 1024px) {
  #hero p {
  width: 60%;
  }
  }
  #hero .carousel-fade {
  overflow: hidden;
  }
  #hero .carousel-fade .carousel-inner .carousel-item {
  transition-property: opacity;
  }
  #hero .carousel-fade .carousel-inner .carousel-item,
  #hero .carousel-fade .carousel-inner .active.carousel-item-start,
  #hero .carousel-fade .carousel-inner .active.carousel-item-end {
  opacity: 0;
  }
  #hero .carousel-fade .carousel-inner .active,
  #hero .carousel-fade .carousel-inner .carousel-item-next.carousel-item-start,
  #hero .carousel-fade .carousel-inner .carousel-item-prev.carousel-item-end {
  opacity: 1;
  transition: 0.5s;
  }
  #hero .carousel-fade .carousel-inner .carousel-item-next,
  #hero .carousel-fade .carousel-inner .carousel-item-prev,
  #hero .carousel-fade .carousel-inner .active.carousel-item-start,
  #hero .carousel-fade .carousel-inner .active.carousel-item-end {
  left: 0;
  transform: translate3d(0, 0, 0);
  }
  #hero .btn-get-started {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 36px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 10px;
  color: #fff;
  background: #18d26e;
  box-shadow: 0 15px 40px rgba(77, 249, 68, 0.5);

  }
  #hero .btn-get-started:hover {
  background: #fff;
  color: #18d26e;
  }
  a{
   text-decoration: none;
   color: #fff;
  }
  a:hover{
   text-decoration: none;
   color: #18d26e;
  }
</style>
