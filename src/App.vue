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
  },
  mounted(){
    window.addEventListener("scroll",()=>{
      this.$router.push(this.$router.currentRoute.value.path);
    });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
:root{
  --color-green: #18d26e;
  --color-green--transparent: #18d26e44;

  --font-primary: "Montserrat", sans-serif;
}
*{
  scroll-margin: 20px;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: var(--font-primary);
}
  
  
</style>
