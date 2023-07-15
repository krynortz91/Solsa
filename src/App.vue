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
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  *{
    scroll-margin: 20px;
    margin: 0;
    padding: 0;
    border: 0;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    margin: 0 0 20px 0;
    font-family: "Open Sans", sans-serif;
  }
  
</style>
