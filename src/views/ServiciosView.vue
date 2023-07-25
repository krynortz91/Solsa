<template>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">   
    <section class="pt-5" >
           <div class="container shadow section-sm rounded pt-5">
            <div class="row mb-5">
                <h1>SERVICIOS</h1>
            </div>
                <div class="row servicios">
                   <!-- sidebar -->
                   <div class="col-lg-3">
                       <ul class="sidenav">
                           <li class="sidelist main active" id="btn-mecanizado">
                               <a href="#">Mecanizados en Terreno</a>
                           </li>
                           <li class="sidelist main" id="btn-arriendo-equipos">
                               <a href="#">Arriendo de Equipos de Apoyo</a>
                               <ul>
                                   <li class="sidelist">
                                       <a href="#arriendo-equipos">Hidrolavadora Diesel Autónoma</a>
                                   </li>
                                   <li class="sidelist">
                                       <a href="#arriendo-equipos">Hitorc</a>
                                   </li>
                                   <li class="sidelist">
                                       <a href="#arriendo-equipos">Enerpac</a>
                                   </li>
                                   <li class="sidelist">
                                       <a href="#arriendo-equipos">FullTorque</a>
                                   </li>
                               </ul>
                           </li>
                           <li class="sidelist main" id="btn-arriendo-camionetas">
                               <a href="#">Arriendo de Camionetas 4x4 con equipamiento Minero</a>
                           </li>
                           <li class="sidelist main" id="btn-reparacion-equipos">
                               <a href="#">Reparación de Equipos Autónomos</a>
                               <ul>
                                   <li class="sidelist">
                                       <a href="#reparacion-equipos">Hidrolavadoras</a>
                                   </li>
                                   <li class="sidelist">
                                       <a href="#reparacion-equipos">Calefactores Diesel</a>
                                   </li>
                                   <li class="sidelist">
                                       <a href="#reparacion-equipos">Torres de Iluminación</a>
                                   </li>
                               </ul>
                           </li>
                           <li class="sidelist main" id="btn-proyectos">
                               <a href="#">Proyectos</a>
                               <ul>
                                   <li class="sidelist">
                                       <a href="#proyectos">Ingeniería</a>
                                   </li>
                                   <li class="sidelist">
                                       <a href="#proyectos">Maestranza</a>
                                   </li>
                                   <li class="sidelist">
                                       <a href="#proyectos">Mantenimiento Industrial</a>
                                   </li>
                                   <li class="sidelist">
                                       <a href="#proyectos">Mantenimiento de Instalaciones</a>
                                   </li>
                               </ul>
                           </li>
                           <li class="sidelist main" id="btn-ferreteria">
                               <a href="#">Ferretería especializada</a>
                               <ul>
                                   <li class="sidelist">
                                       <a href="#ferreteria">Suministro de Insumos en menos de 24 horas</a>
                                   </li>
                                   <li class="sidelist">
                                       <a href="#ferreteria">Suministro de Herramientas en menos de 24 horas</a>
                                   </li>
                               </ul>
                           </li>
                       </ul>
                   </div>
    
                   <div class="col-lg-8">
                       <div class="px-lg-5 px-4 servicio active" id="mecanizado">
                           <h2 class="mb-4 font-weight-medium">Mecanizados en Terreno</h2>
                           <div class="content">
                               <p>En SOLSA ofrecemos servicios de mecanizado en terreno, brindando soluciones  de barrenado de precisión, efectivas y eficiencientes con excelente gestión y manejo logístico, con un personal calificado y experimentado que nos asegura entregar un excelente servicio.
                               </p>
                               <!-- CARRUSEL DE IMAGENES -->
                                <div id="carousel-mecanizado" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="11" aria-label="Slide 12"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="12" aria-label="Slide 13"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="13" aria-label="Slide 14"></button>
                                        <button type="button" data-bs-target="#carousel-mecanizado" data-bs-slide-to="14" aria-label="Slide 15"></button> 

                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/1.jpg" alt="First slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/2.jpg" alt="Second slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/3.jpg" alt="Third slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/4.jpg" alt="Fourth slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/5.jpg" alt="Fifth slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/6.jpg" alt="Sixth slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/7.jpg" alt="Seventh slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/8.jpg" alt="Eighth slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/9.jpg" alt="Ninth slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/10.jpg" alt="Tenth slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/11.jpg" alt="Eleventh slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/12.jpg" alt="Twelfth slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/13.jpg" alt="Thirteenth slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/14.jpg" alt="Fourteenth slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src="../assets/showcase/Mecanizados/15.jpg" alt="Fifteenth slide">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-mecanizado" data-bs-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-mecanizado" data-bs-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Next</span>
                                    </button>
                                  </div>
                            </div>
                       </div>

                       <div class="px-lg-5 px-4 servicio" id="arriendo-equipos">
                           <h2 id="collapse">Arriendo de Equipos de Apoyo</h2>
                           <div class="content">
                               <p>Contamos con equipos de apoyo disponibles para arriendo, que se adaptan a las necesidades de su industria. Dentro de este servicio, ofrecemos:
                               </p>
                           </div>
                           <div class="border border-default collapse-wrapper">
                               <a class="d-flex py-2 collapse-head" data-toggle="collapse" href="#collapse-1" role="button">
                               Hidrolavadoras Diesel autónomas <i class="ti-plus ml-auto"></i>
                               </a>
                               <div class="collapse" id="collapse-1">Proporcionamos hidrolavadoras de alta presión que funcionan con motor diesel y son totalmente autónomas, lo que las hace ideales para trabajos en sitios remotos o sin acceso a energía eléctrica.</div>
                           </div>
                           <div class="border border-default collapse-wrapper">
                               <a class="d-flex py-2 collapse-head" data-toggle="collapse" href="#collapse-2" role="button">
                               Hitorc<i class="ti-plus ml-auto"></i>
                               </a>
                               <div class="collapse" id="collapse-2">Ponemos a su disposición equipos Hitorc, especializados en tensionado y torque controlado. Estos equipos son esenciales para el montaje y desmontaje de elementos sujetos a altos niveles de presión y torque.</div>
                           </div>
                           <div class="border border-default collapse-wrapper">
                               <a class="d-flex py-2 collapse-head" data-toggle="collapse" href="#collapse-3" role="button">
                               Enerpac <i class="ti-plus ml-auto"></i>
                               </a>
                               <div class="collapse" id="collapse-3">Ofrecemos equipos de alta calidad Enerpac para aplicaciones de alta presión, como cilindros hidráulicos, bombas y herramientas de torque. </div>
                           </div>
                           <div class="border border-default collapse-wrapper">
                               <a class="d-flex py-2 collapse-head" data-toggle="collapse" href="#collapse-3" role="button">
                               FullTorque<i class="ti-plus ml-auto"></i>
                               </a>
                               <div class="collapse" id="collapse-3">Contamos con herramientas FullTorque para aplicaciones de torque preciso y controlado, seguro y eficiente.
                               </div>
                           </div>
                       </div>

                       <div class="px-lg-5 px-4 servicio" id="arriendo-camionetas">
                           <h2 class="mb-4 font-weight-medium">Arriendo de Camionetas 4x4 con equipamiento Minero</h2>
                           <div class="content">
                               <p>Ponemos a su disposición camionetas 4x4 equipadas con todo lo necesario para enfrentar los desafíos del entorno minero. Nuestros vehículos cuentan con características especiales para garantizar la seguridad y el rendimiento en terrenos difíciles, lo que los convierte en la opción ideal para proyectos mineros y actividades relacionadas.
                               </p>
                           </div>
                       </div>

                       <div class="px-lg-5 px-4 servicio" id="reparacion-equipos">
                           <h2 class="mb-4 font-weight-medium">Reparación de equipos autónomos</h2>
                           <div class="content">
                               <p>En SOLSA nos especializamos en la reparación de equipos autónomos para mantener su funcionamiento óptimo y minimizar los tiempos de inactividad. Dentro de este servicio, ofrecemos reparación de:
                               </p>
                               <ul>
                                   <li>Hidrolavadora</li>
                                   <li>Calefactores Diesel</li>
                                   <li>Torres de Iluminación </li>
                               </ul>
                           </div>
                       </div>
                       <div class="px-lg-5 px-4 servicio" id="proyectos">
                           <h2 class="mb-4 font-weight-mediu" id="">Proyectos</h2>
                           <div class="content">
                               <p>Nuestro equipo de profesionales altamente calificados está preparado para llevar a cabo proyectos de diferentes categorías. Dentro de nuestros servicios de proyectos, ofrecemos:
                               </p>
                           </div>
                           <div class="border border-default collapse-wrapper">
                               <a class="d-flex py-2 collapse-head" data-toggle="collapse" href="#collapse-1" role="button">
                               Ingeniería <i class="ti-plus ml-auto"></i>
                               </a>
                               <div class="collapse" id="collapse-1">Ofrecemos servicios de ingeniería para el desarrollo y la implementación de soluciones técnicas en su industria, optimizando procesos y maximizando la eficiencia y seguridad.</div>
                           </div>
                           <div class="border border-default collapse-wrapper">
                               <a class="d-flex py-2 collapse-head" data-toggle="collapse" href="#collapse-2" role="button">
                               Maestranza<i class="ti-plus ml-auto"></i>
                               </a>
                               <div class="collapse" id="collapse-2">Contamos con una maestranza equipada para fabricación, reparación y mantenimiento de componentes y equipos industriales.</div>
                           </div>
                           <div class="border border-default collapse-wrapper">
                               <a class="d-flex py-2 collapse-head" data-toggle="collapse" href="#collapse-3" role="button">
                               Mantenimiento Industrial<i class="ti-plus ml-auto"></i>
                               </a>
                               <div class="collapse" id="collapse-3">Brindamos servicios integrales de mantenimiento industrial para asegurar el correcto funcionamiento de sus instalaciones y equipos, minimizando los tiempos de inactividad.</div>
                           </div>
                           <div class="border border-default collapse-wrapper">
                               <a class="d-flex py-2 collapse-head" data-toggle="collapse" href="#collapse-4" role="button">
                               Mantenimiento de instalaciones<i class="ti-plus ml-auto"></i>
                               </a>
                               <div class="collapse" id="collapse-3">Nos encargamos del mantenimiento de sus instalaciones, tanto preventivo como correctivo, limpieza, reparaciones estructurales para garantizar su operatividad y seguridad.
                               </div>
                           </div>
                       </div>
                       <div class="px-lg-5 px-4 pb-5 servicio" id="ferreteria">
                           <h2 class="mb-4 font-weight-mediu">Ferretería especializada</h2>
                           <div class="content">
                               <p>En SOLSA contamos con una ferretería especializada comprometida con satisfacer sus necesidades industriales, logísticas y operacionales. Dentro de nuestros servicios de ferretería, ofrecemos:
                               </p>
                           </div>
                           <div class="border border-default collapse-wrapper">
                               <a class="d-flex py-2 collapse-head" data-toggle="collapse" href="#collapse-1" role="button">
                               Suministro de Insumos en menos de 24 horas<i class="ti-plus ml-auto"></i>
                               </a>
                               <div class="collapse" id="collapse-1">Nos comprometemos a proveer los insumos que necesite en un plazo máximo de 24 horas, garantizando una rápida respuesta a sus requerimientos.</div>
                           </div>
                           <div class="border border-default collapse-wrapper">
                               <a class="d-flex py-2 collapse-head" data-toggle="collapse" href="#collapse-2" role="button">
                               Suministro de Herramientas en menos de 24 horas<i class="ti-plus ml-auto"></i>
                               </a>
                               <div class="collapse" id="collapse-2">Ponemos a su disposición una amplia gama de herramientas especializadas y nos comprometemos a entregarlas en un plazo máximo de 24 horas, para que pueda contar con las herramientas adecuadas en el momento oportuno, tanto para requerimientos permanentes como para imprevistos.</div>
                           </div>
                       </div>
                   </div>
               </div>
           </div> 
       </section>
    </template>
    <script>
    
    export default {
        name: "ServiciosView",   
        mounted(){
            const servicios = document.querySelectorAll("div.servicio"); 
            const btnsMain = document.querySelectorAll(".sidelist.main");
            btnsMain.forEach((e)=>{
                e.addEventListener("click", ()=>{
                    btnsMain.forEach((btn)=>{
                        btn.classList.remove("active");
                    });
                    e.classList.add("active");
                    servicios.forEach((s)=>{
                        s.classList.remove("active");
                    });
                    let idMostrar = "";
                    let lista = e.id.split("-");
                    for(let i=1; i<lista.length; i++){
                        idMostrar += lista[i];
                        if(i != lista.length-1){
                            idMostrar += "-";
                        }
                    }
           document.getElementById(idMostrar).classList.add("active");
                });
           });
        },
         };
    
    </script>
    <style scoped>
    .row.servicios{
        height: 45rem;
    }
    .servicio{
        opacity: 0;
        transition: 1s opacity;
        height: 0;
    }
    .servicio.active{
        opacity: 1;
        height: 1;
    }
    ul {
    list-style: none;
    font-family: "Montserrat", sans-serif;
    }

    a {
    color: #18d26e;
    transition: 0.5s;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    }
    a:hover,
    a:active,
    a:focus {
    color: #18d36e;
    outline: none;
    text-decoration: none;
    }
    h1, h2{
    color: #222;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    line-height: 1.2;
    font-size: 24px;
    }
    h1{
    font-size: 2rem;
    text-align: center;
    }
    p {
    font-weight: 400;
    color: #333;
    font-size: 16px;
    line-height: 26px;
    font-family: "Montserrat", sans-serif;
    }
    .content ol,
    .content ul {
    padding-left: 20px;
    }
    .content ol li,
    .content ul li {
    margin-bottom: 10px;
    }
    .content ul {
    padding-left: 0;
    margin-bottom: 20px;
    }
    .content ul li {
    padding-left: 20px;
    position: relative;
    }
    .content ul li::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: #18d26e;
    left: 3px;
    top: 8px;
    }
    /* sidenav */
    .sidenav {
    border-right: 1px solid #E2E2E2;
    padding-right: 20px;
    }
    .sidenav ul {
    padding-left: 10px;
    }
    .sidenav > li a {
    padding: 20px 0;
    color: #222;
    display: block;
    font-size: 16px;
    font-weight: 500;
    }
    .sidenav > li:not(:last-child) {
    border-bottom: 1px solid #E2E2E2;
    }
    .sidenav .sidelist ul {
    display: none;
    }
    .sidelist.active a{
    color: #18d36e !important;
    }
    .collapse-wrapper {
    padding: 5px 15px;
    }
    .collapse-wrapper .collapse-head {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    align-items: center;
    }
    .container.shadow.section-sm{
        margin-top: 4rem;
        margin-bottom: 5rem;
    }
    /* .d-block w-100{
       margin-bottom: 5rem;
    } */
    
    .carousel-item img{
        height: 30rem;
        object-fit: cover;
    }
    </style>