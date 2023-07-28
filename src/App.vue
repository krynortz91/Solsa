<template>
  <NavBar/>
  <router-view />
  <Whatsapp />
  <TopArrow />
  <FooterComp/>
</template>

<script>
import NavBar from "@/components/NavBar.vue" 
import FooterComp from "@/components/FooterComp.vue"
import Whatsapp from "@/components/Whatsapp.vue"
import TopArrow from "@/components/TopArrow.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp,
    Whatsapp,
    TopArrow
  },
  created(){
    document.title = "Solsa | Servicios industriales"
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
:root{
  --color-green: #18d26e;

  --font-primary: "Montserrat", sans-serif;
}
*{
    scroll-margin: 20px;
    margin: 0;
    padding: 0;
    border: 0;
  }
  
  
</style>
