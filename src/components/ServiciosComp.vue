<template>
<section id="servicios">
    <div class="container">
        <div class="row">
            <header class="section-header">
                <h2 class="text-start">Nuestros Servicios</h2>
                <div class="line"></div>
            </header>
        </div>
        <div class="grid-container">
            <div class="grid-item">
                <div class="img">
                    <img src="../assets/servicios/3.jpg" alt="" class="img-fluid">
                    <div class="icon"><i class="bi bi-gear-fill"></i></div>
                </div>
                <h2 class="title">Mecanizado en Terreno</h2>
                <p>
                    Maximiza la eficiencia y minimiza los tiempos de inactividad con nuestro servicio de mecanizado directamente en tu ubicación. Descubre cómo podemos llevar tu proyecto al siguiente nivel. 
                </p>
                <router-link to="/ServiciosView#mecanizado"><img src="../assets/more.png" alt="" srcset="" width="20">  Ver más</router-link>
            </div>

            <div class="grid-item">
                <div class="img">
                    <img src="../assets/5.jpg" alt="" class="img-fluid">
                    <div class="icon"><i class="bi bi-box-seam"></i></div>
                </div>
                <h2 class="title">Arriendo de Equipos <br> de Apoyo</h2>
                <p>
                    Potencia tu proyecto con la mejor infraestructura. Contamos con una amplia gama de equipos disponibles para arriendo, listos para brindarte el respaldo necesario. 
                </p>
                <router-link to="/ServiciosView#arriendo-equipos"><img src="../assets/more.png" alt="" srcset="" width="20">  Ver más</router-link>
            </div>

            <div class="grid-item">
                <div class="img">
                    <img src="../assets/showcase/arriendocamioneta4x4.jpg" alt="" class="img-fluid">
                    <div class="icon"><i class="bi bi-truck"></i></div>
                </div>
                <h2 class="title">Arriendo de Camionetas 4x4 <br>con equipamiento Minero</h2>
                <p>
                    Potencia tu proyecto con la movilidad y resistencia que necesitas. Nuestras camionetas 4x4 equipadas para el sector minero están listas para enfrentar cualquier desafío.             
                </p>
                <router-link to="/ServiciosView#arriendo-camionetas"><img src="../assets/more.png" alt="" srcset="" width="20">  Ver más</router-link>
            </div>

            <div class="grid-item">
                <div class="img">
                    <img src="../assets/servicios/1.jpg" alt="" class="img-fluid">
                    <div class="icon"><i class="bi bi-wrench"></i></div>
                </div>
                <h2 class="title">Reparación de Equipos Autónomos</h2>
                <p>
                    Nuestro servicio de reparación especializado en equipos autónomos garantiza su pronta recuperación y funcionamiento óptimo.
                </p>
                <router-link to="/ServiciosView#reparacion-equipos"><img src="../assets/more.png" alt="" srcset="" width="20">  Ver más</router-link>
            </div>

            <div class="grid-item">
                <div class="img">
                    <img src="../assets/servicios/4.jpg" alt="" class="img-fluid">
                    <div class="icon"><i class="bi bi-bar-chart"></i></div>
                </div>
                <h2 class="title">Proyectos</h2>
                <p>
                    Confía en nuestro equipo para llevar a cabo proyectos integrales que abarcan desde la ingeniería y diseño, hasta la fabricación, reparación y mantenimiento.
                </p>
                <router-link to="/ServiciosView#proyectos"><img src="../assets/more.png" alt="" srcset="" width="20">  Ver más</router-link>
            </div>

            <div class="grid-item">
                <div class="img">
                    <img src="../assets/servicios/5.jpg" alt="" class="img-fluid">
                    <div class="icon"><i class="bi bi-tools"></i></div>
                </div>
                <h2 class="title"> Ferretería especializada</h2>
                <p>
                    Encuentra todo lo que necesitas para tus proyectos. Nuestra amplia selección de herramientas y materiales de alta calidad te ofrece soluciones confiables y duraderas. 
                </p>
                <router-link to="/ServiciosView#ferreteria"><img src="../assets/more.png" alt="" srcset="" width="20">Ver más</router-link>
            </div>
        </div>
    </div>
</section>
   <!-- End servicios Us Section -->
</template>
<script>
   export default {
     name: "ServiciosComp",
     }
</script>
<style scoped>
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
    font-family: var(--font-primary);
}
h2 {
    font-family: var(--font-primary);
    font-weight: 800;
    padding: 0;
    color: #333333;
}
#servicios {
    padding: 60px 0 40px 0;
}
#servicios .line{
    height: 6px;
    width: 3rem;
    background-color: var(--color-green);
    border-radius: 5px;
}
#servicios .grid-container{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 24px;
    row-gap: 20px;
}
@media(min-width: 480px){
    #servicios .grid-container{
        grid-template-columns: repeat(2, 1fr);
        
    }
}
@media(min-width: 980px){
    #servicios .grid-container{
        grid-template-columns: repeat(3, 1fr); 
    }
}

#servicios .grid-item {
    background: #d6ffed2c;
    border-radius: 0 0 4px 4px;
    box-shadow:  1px 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease-in;
    height: 590px;
}

#servicios .grid-item:hover {
    scale: 1.03;
}

#servicios .grid-item .img {
    position: relative;
}

#servicios .grid-item .icon {
    width: 64px;
    height: 64px;
    text-align: center;
    position: absolute;
    background-color: var(--color-green);
    border-radius: 50%;
    border: 4px solid #fff;
    left: calc(50% - 32px);
    bottom: -30px;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
}
#servicios .grid-item i {
    font-size: 28px;
    line-height: 0;
    color: #fff;
    transition: 0.3s;
}

#servicios .grid-item h2 {
    color: #000;
    text-align: start;
    font-weight: 700;
    font-size: 22px;
    padding-left: 20px;
    margin: 60px 0 12px 0;
}

#servicios .grid-item p {
    font-size: 14px;
    line-height: 24px;
    color: #333;
    margin-bottom: 0;
    padding: 20px 20px 20px 20px;
    font-weight: 400;
}
.grid-item a{
    color: var(--color-green);
    font-family: var(--font-primary);
    font-size: 14px;
    margin-left: 20px;
}
.section-header{
    margin-top: 3rem;
    margin-bottom: 5rem;
    font-family: var(--font-primary);
    letter-spacing: 1px;
    font-weight: 800;
}
</style>
