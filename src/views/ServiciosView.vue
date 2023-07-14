<template>
   <!-- details page -->
   <section class="pt-5">
      <div class="container shadow section-sm rounded pt-5">
         <div class="row">
            <!-- sidebar -->
            <div class="col-lg-3">
               <ul class="sidenav">
                  <li title="Basic Startup" class="sidelist parent">
                     <!-- <a href="list.html">Basic Startup</a> -->
                     <ul>
                        <!-- <li class="sidelist parent active">
                           <a href="single.html">Elements</a>
                           <li class="sidelist">
                           <a href="single.html">Installation</a>
                           <li class="sidelist">
                           <a href="single.html">Configuration</a>
                           <li class="sidelist">
                           <a href="single.html">Customization</a>
                           <li class="sidelist">
                           <a href="single.html">Requerments</a>
                           </li> -->
                     </ul>
                  </li>
                  <li class="sidelist">
                     <a href="https://www.google.com">Mecanizados en Terreno</a>
                  </li>
                  <li class="sidelist">
                     <a href="https://www.google.com">Arriendo de Equipos de Apoyo</a>
                     <ul>
                        <li class="sidelist">
                           <a href="https://www.google.com">Hidrolavadora Diesel Autónoma</a>
                        </li>
                        <li class="sidelist">
                           <a href="https://www.google.com">Hitorc</a>
                        </li>
                        <li class="sidelist">
                           <a href="https://www.google.com">Enerpac</a>
                        </li>
                        <li class="sidelist">
                           <a href="https://www.google.com">FullTorque</a>
                        </li>
                     </ul>
                  </li>
                  <li class="sidelist">
                     <a href="https://www.google.com">Arriendo de Camionetas 4x4 con equipamiento Minero</a>
                  </li>
                  <li class="sidelist">
                     <a href="https://www.google.com">Reparación de Equipos Autónomos</a>
                     <ul>
                        <li class="sidelist">
                           <a href="https://www.google.com">Hidrolavadoras</a>
                        </li>
                        <li class="sidelist">
                           <a href="https://www.google.com">Calefactores Diesel</a>
                        </li>
                        <li class="sidelist">
                           <a href="https://www.google.com">Torres de Iluminación</a>
                        </li>
                     </ul>
                  </li>
                  <li class="sidelist">
                     <a href="https://www.google.com">Proyectos</a>
                     <ul>
                        <li class="sidelist">
                           <a href="https://www.google.com">Ingeniería</a>
                        </li>
                        <li class="sidelist">
                           <a href="https://www.google.com">Maestranza</a>
                        </li>
                        <li class="sidelist">
                           <a href="https://www.google.com">Mantenimiento Industrial</a>
                        </li>
                        <li class="sidelist">
                           <a href="https://www.google.com">Mantenimiento de Instalaciones</a>
                        </li>
                     </ul>
                  </li>
                  <li class="sidelist">
                     <a href="https://www.google.com">Ferretería especializada</a>
                     <ul>
                        <li class="sidelist">
                           <a href="https://www.google.com">Suministro de Insumos en menos de 24 horas</a>
                        </li>
                        <li class="sidelist">
                           <a href="https://www.google.com">Suministro de Herramientas en menos de 24 horas</a>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
            <div class="col-lg-8">
               <div class="px-lg-5 px-4">
                  <h2 class="mb-4 font-weight-medium">Mecanizados en Terreno</h2>
                  <div class="content">
                     <!-- heading -->
                     <h4 id="heading-example">Heading example</h4>
                     <p>Here is example of hedings. You can use this heading by following markdownify rules. For example: use
                        <code>#</code> for heading 1 and use <code>######</code> for heading 6.
                     </p>
                     <hr>
                     <!-- paragraph -->
                     <h5 id="paragraph">Paragraph</h5>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam
                        aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur!
                        Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni
                        perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis
                        nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit
                        impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non,
                        omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis
                        voluptatum rerum laboriosam.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
   // import ServiciosComp from "@/components/ServiciosComp.vue"
   // import ContactoComp from "@/components/ContactoComp.vue"
   
   export default {
      name: "ServiciosView",
      components: {
         // ServiciosComp,
         // ContactoComp
   },
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
   font-family: "Montserrat", sans-serif;
   }
   a:hover,
   a:active,
   a:focus {
   color: #18d36e;
   outline: none;
   text-decoration: none;
   }
   p {
   margin: 0 0 30px 0;
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
   background: #FF0043;
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
   font-size: 18px;
   font-weight: 500;
   }
   .sidenav > li:not(:last-child) {
   border-bottom: 1px solid #E2E2E2;
   }
   .sidenav .sidelist ul {
   display: none;
   }
   .sidenav .parent > a {
   color: #FF0043 !important;
   position: relative;
   margin-left: 10px;
   }
   .sidenav .parent > a::before {
   position: absolute;
   content: "";
   left: -10px;
   top: 25%;
   height: 50%;
   width: 1px;
   background: #FF0043;
   }
   .sidenav .parent ul {
   display: block;
   margin-bottom: 10px;
   }
   .sidenav .parent ul a {
   padding: 5px 0;
   font-size: 14px;
   font-weight: 400;
   color: #222;
   }
   .sidenav .parent ul li.active > a {
   margin-left: 10px;
   }
   .sidenav .parent ul li.active > a::before {
   height: 5px;
   width: 5px;
   border-radius: 50%;
   display: block;
   top: 13px;
   }
</style>
