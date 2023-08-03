<template>
   <div id="navbar" class="container-fluid">
      <nav>
         <ul id="navbar-collapse" data-collapsed="true">
            <router-link to="/#hero">INICIO</router-link>
   
            <li class="dropdown">
               <router-link to="/ServiciosView">Servicios <i class="bi bi-chevron-down"></i></router-link>
               <ul>
                  <router-link to="/ServiciosView#mecanizado">Mecanizados en Terreno</router-link>
                  <li class="dropdown">
                     <router-link to="/ServiciosView#arriendo-equipos">Arriendo de Equipos de Apoyo <i class="bi bi-chevron-right"></i></router-link>
                     <ul>
                        <router-link to="/ServiciosView#arriendo-equipos_hidro">Hidrolavadora Diesel Autónoma</router-link>
                        <router-link to="/ServiciosView#arriendo-equipos_hytorc">Hytorc</router-link>
                        <router-link to="/ServiciosView#arriendo-equipos_enerpac">Enerpac</router-link>
                        <router-link to="/ServiciosView#arriendo-equipos_evotorque">EvoTorque - herramienta de torque eléctrica</router-link>
                     </ul>
                  </li>
   
                  <router-link to="/ServiciosView#arriendo-camionetas">Arriendo de Camionetas 4x4 con equipamiento Minero</router-link>
   
                  <li class="dropdown">
                     <router-link to="/ServiciosView#reparacion-equipos">Reparación de Equipos Autónomos <i class="bi bi-chevron-right"></i></router-link>
                     <ul>
                        <router-link to="/ServiciosView#reparacion-equipos">Hidrolavadoras</router-link>
                        <router-link to="/ServiciosView#reparacion-equipos">Calefactores Diesel</router-link>
                        <router-link to="/ServiciosView#reparacion-equipos">Torres de Iluminación</router-link>
                     </ul>
                  </li>
   
                  <li class="dropdown">
                     <router-link to="/ServiciosView#proyectos">Proyectos <i class="bi bi-chevron-right"></i></router-link>
                     <ul>
                        <router-link to="/ServiciosView#proyectos_ingenieria">Ingeniería</router-link>
                        <router-link to="/ServiciosView#proyectos_maestranza">Maestranza</router-link>
                        <router-link to="/ServiciosView#proyectos_industrial">Mantenimiento Industrial</router-link>
                        <router-link to="/ServiciosView#proyectos_instalacion">Mantenimiento de Instalaciones</router-link>
                     </ul>
                  </li>
   
                  <li class="dropdown">
                     <router-link to="/ServiciosView#ferreteria">
                     Ferretería especializada <i class="bi bi-chevron-right"></i></router-link>
                     <ul>
                        <router-link to="/ServiciosView#ferreteria_insumos">Suministro de Insumos en menos de 24 horas </router-link>
                        <router-link to="/ServiciosView#ferreteria_herramientas">Suministro de Herramientas en menos de 24 horas</router-link>
                     </ul>
                  </li>
   
               </ul>
            </li>
   
            <router-link to="/#contact">Contacto</router-link>
         </ul>
   
         <i id="navbar-toggler" class="bi bi-list"></i>
      </nav>

      <router-link class="logo" to="/"><img src="../assets/logo.png" alt="Logo solsa"></router-link>
   </div>
</template>
<script>
   export default {
      name: 'NavBar', 
      mounted(){
         const navbarToggler = document.getElementById("navbar-toggler");
         const navbar = document.getElementById("navbar-collapse");
         navbarToggler.addEventListener("click", ()=>{
            console.log(navbar.getAttribute("data-collapsed"))
            // if(navbar.getAttribute("data-collapsed") === "true"){
            //    navbar.setAttribute("data-collapsed") = "false";
            // }
            // else{
            //    navbar.setAttribute("data-collapsed") = "true";
            // }
         });
      }
   }
</script>
<style scoped>
   #navbar {
      background-color: #0000009f;
      position: fixed;
      z-index: 2;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
   }
   a{
      color: #fff;
      text-decoration: none;
      transition: .5s;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
   }
   a:hover,
   a:focus{
      color: var(--color-green);
      outline: none;
   }
   nav{
      margin-top: 1rem;
   }
   .logo img{
      height: 70px;
      padding: 5px 0;
   }
   ul{
      list-style: none;
   }

   i{
      font-size: 12px;
      line-height: 0;
      margin-left: 5px;
   }
   .dropdown{
      position: relative;
      display: flex;

   }
   .dropdown ul{
      display: none;
      transition: .5s;
      opacity: 0;
      position: absolute;
      background-color: #fff;
      min-width: 200px;
      padding-left: 0;

   }
   .dropdown ul a{
      color: #666;
      padding: 10px 20px;
      text-transform: capitalize;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
   }
   .dropdown ul a:hover{
      color: var(--color-green);
   }
   .dropdown .dropdown ul {
      top: 0;
      left: calc(100% - 30px);
      visibility: hidden;
   }


   #navbar-collapse{
      display: none;
   }
   #navbar-toggler{
      color: #fff;
      font-size: 28px;
      cursor: pointer;
      line-height: 0;
      transition: 0.5s;
   }
   @media(min-width: 991px) {
      #navbar-collapse{
         display: flex;
         gap: 20px;
         padding-left: 7rem;
      }
      #navbar-toggler{
         display: none;
      }
      .dropdown:hover > ul{
         display: block;
         opacity: 1;

         visibility: visible;
         top: 20px;
      }
      .dropdown .dropdown:hover>ul {
         opacity: 1;
         top: 0;
         left: 100%;
         visibility: visible;
      }
   }
  
 

   /*
   a {
      color: var(--color-green);
      transition: 0.5s;
      text-decoration: none;
      font-family: var(--font-primary);
   }
   .logo img{
      height: 70px;
      padding: 5px 0;
   }

   .navbar ul {
      display: flex;
      list-style: none;
      align-items: center;
   }
   .navbar li {
      position: relative;
   }
   .navbar a,
   .navbar a:focus {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0 10px 30px;
      font-size: 13px;
      font-weight: 600;
      color: #fff;
      white-space: nowrap;
      text-transform: uppercase;
      transition: 0.3s;
   }
   .navbar a i {
      font-size: 12px;
      line-height: 0;
      margin-left: 5px;
   }
   .navbar a:hover,
   .navbar .active,
   .navbar .active:focus,
   .navbar li:hover>a {
      color: var(--color-green);
   }
   .navbar .dropdown ul {
      display: block;
      position: absolute;
      left: 20px;
      top: calc(100% + 30px);
      padding: 10px 0;
      z-index: -1;
      opacity: 0;
      visibility: hidden;
      background: #fff;
      box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
      transition: .2s ease-in;
   }
   .navbar .dropdown ul li {
      min-width: 200px;
   }
   .navbar .dropdown ul a {
      padding: 10px 20px;
      text-transform: none;
      color: #666666;
   }
   .navbar .dropdown ul a i {
      font-size: 12px;
   }
   .navbar .dropdown ul a:hover,
   .navbar .dropdown ul .active:hover,
   .navbar .dropdown ul li:hover>a {
      color: var(--color-green);
   }
   .navbar .dropdown:hover>ul {
      opacity: 1;
      top: 100%;
      visibility: visible;
   }
   .navbar .dropdown .dropdown ul {
      top: 0;
      left: calc(100% - 30px);
      visibility: hidden;
   }
   .navbar .dropdown .dropdown:hover>ul {
      opacity: 1;
      top: 0;
      left: 100%;
      visibility: visible;
   }
   @media (max-width: 1366px) {
      .navbar .dropdown .dropdown ul {
         left: 50%;
      }
      .navbar .dropdown .dropdown:hover>ul {
         left: 100%;
      }
   }
   .mobile-nav-toggle {
      color: #fff;
      font-size: 28px;
      cursor: pointer;
      display: none;
      line-height: 0;
      transition: 0.5s;
   }
   @media (max-width: 991px) {
      .mobile-nav-toggle {
         display: block;
      }
      #navbar-toggle {
         display: none;
      }
   }
   .logo img{
      height: 80px;
      padding-top: 15px;
   } */
</style>
