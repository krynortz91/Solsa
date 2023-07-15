<template>
   <!-- ======= Portfolio Section ======= -->
   <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet">
   <div class="image-gallery">
       <div class="swiper-container">
           <div class="swiper-wrapper">
               <div class="swiper-slide" v-for="image in images" :key="image.id">
                   <img :src="image.url" alt="Image" />
               </div>
           </div>
           <div class="swiper-pagination"></div>
       </div>
   </div>
</template>
<script>
   import Swiper from 'swiper';
   
   export default {
     mounted() {
       // Inicializar Swiper cuando el componente está montado
       this.initSwiper();
     },
     data() {
       return {
         images: [
           { id: 1, url: 'path/to/image1.jpg' },
           { id: 2, url: 'path/to/image2.jpg' },
           { id: 3, url: 'path/to/image3.jpg' },
           { id: 4, url: 'path/to/image4.jpg' },
           { id: 5, url: 'path/to/image5.jpg' },
           { id: 6, url: 'path/to/image6.jpg' },
           { id: 7, url: 'path/to/image7.jpg' },
           { id: 8, url: 'path/to/image8.jpg' },
           { id: 9, url: 'path/to/image9.jpg' },
         ],
         swiper: null,
       };
     },
     methods: {
       initSwiper() {
         // Configurar Swiper
         this.swiper = new Swiper('.swiper-container', {
           loop: true,
           pagination: {
             el: '.swiper-pagination',
             clickable: true,
           },
         });
       },
     },
   };
</script>
<style scoped>
   body {
   background: #fff;
   color: #666666;
   font-family: "Open Sans", sans-serif;
   }
   a {
   color: #18d26e;
   transition: 0.5s;
   text-decoration: none;
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
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
   font-family: "Montserrat", sans-serif;
   font-weight: 600;
   margin: 0 0 20px 0;
   padding: 0;
   }
   .image-gallery {
   width: 100%;
   max-width: 800px;
   margin: 0 auto;
   }
   .swiper-slide img {
   width: 100%;
   height: auto;
   }
</style>
