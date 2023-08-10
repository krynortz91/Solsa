<template>
   <div id="navbar" class="container-fluid">
      <div>
         <!-- hamburguesa -->
         <i id="navbar-toggler" class="bi bi-list"></i>
         <!-- logo -->
         <router-link class="logo" to="/"><img src="../assets/logo.png" alt="Logo solsa"></router-link>
      </div>
      <!-- barra navegacion -->
      <nav >
         <ul id="navbar-collapse" data-collapsed="false">
            
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
   
      </nav>
   </div>
</template>
<script>
   export default {
      name: 'NavBar', 
      mounted(){
         const navbarToggler = document.getElementById("navbar-toggler");
         const navbar = document.getElementById("navbar-collapse");
         navbarToggler.addEventListener("click", ()=>{
            if(navbar.getAttribute("data-collapsed") == "false"){
               navbar.setAttribute("data-collapsed", "true");
               navbarToggler.classList.remove("bi-list");
               navbarToggler.classList.add("bi-x-lg");
            }
            else{
               navbar.setAttribute("data-collapsed", "false");
               navbarToggler.classList.add("bi-list");
               navbarToggler.classList.remove("bi-x-lg");
            }
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
      order: 1;
   }
   #navbar > div{
      order: 2;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
      display: flex;
      gap: 20px;
      padding-left: 7rem;
   }
   #navbar-toggler{
      color: #fff;
      font-size: 28px;
      cursor: pointer;
      line-height: 0;
      transition: 0.5s;
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
   
   /* Mobil version */
   @media(max-width: 991px) {
      #navbar{
         flex-direction: column;
         align-items: normal;
      }
      nav{
         order: 2;
         margin: 0;
      }
      #navbar > div{
         order: 1;
      }
      #navbar-collapse{
         padding-left: 0;
         flex-direction: column;
         padding-left: 1rem;
         display: flex;
         height: auto;
         opacity: 1;
         gap: 10px;
         transition: opacity .2s ease-in;
         visibility: visible;
      }
      #navbar-collapse[data-collapsed=false]{
         height: 0;
         opacity: 0;
         visibility: hidden;
         transition: none;
      }
      #navbar-toggler{
         display: block;
         width: 3rem;
      }
      i{
         display: none;
      }
      .dropdown:focus ul{
         display: none;
      }
      .dropdown:hover ul{
         display: none;
      }
      a{
         font-size: 15px;
      }
   }
</style>
