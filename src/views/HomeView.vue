<template>
  <section id="hero">
     <div class="hero-container">
         <video autoplay loop muted>
            <source src="../assets/video_solsa.mp4" type="video/mp4" />
            Tu navegador no admite el elemento de video.
         </video>
         <div class="hero-info">
            <h2 class="texto">
               Montaje Industrial Soluciones de Ingeniería
            </h2>
            <p>Servicio de apoyo integral a operaciones industriales, Arriendo de equipos, Herramientas y más.</p>
            <div  class="btn-get-started">
               <router-link to="/ServiciosView">Servicios</router-link>
            </div>
        </div>
     </div>
  </section>

<ServiciosComp />
<ContactoComp />

</template>
<script>
   import ServiciosComp from "@/components/ServiciosComp.vue"
   import ContactoComp from "@/components/ContactoComp.vue"

   export default {
      name: "HomeView",
      components: {
         ServiciosComp,
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
   font-family: var(--font-primary);
}

p {
   padding: 0;
   margin: 0 0 30px 0;
   font-family: var(--font-primary);
}
a{
   text-decoration: none;
   color: #fff;
}
a:hover{
   text-decoration: none;
   color: #18d26e;
}
#hero {
   width: 100%;
   height: 90vh;
   background: #000;
   overflow: hidden;
   position: relative;
   font-family: var(--font-primary);
}
@media (min-width: 500px) {
   #hero {
      height: 100vh;
   }
}
#hero video{
   object-fit: cover;
   object-position: center;
}
#hero .hero-info {
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   position: absolute;
   bottom: 0;
   top: 70px;
   left: 50px;
   text-align: center;
   right: 50px;
}
#hero .hero-info h2 {
   color: #fff;
   margin-bottom: 30px;
   font-size: 28px;
   font-weight: 700;
}
@media (min-width: 768px) {
   #hero .hero-info h2 {
      font-size: 48px;
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
#hero .btn-get-started {
   font-family: var(--font-primary);
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
</style>
