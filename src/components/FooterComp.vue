<template>
    <div id="footer">
        <div class="container">
            <div class="row py-4 justify-content-start">
                <div class="col-lg-4 col-md-12">
                    <img class="" src="../assets/logo.png" alt="" width="330">
                    <h2 class="solsa">Solsa SPA, Mantenimiento servicios industriales</h2>
                </div>
                <div class="col-lg-2 col-md-6 ms-auto">
                    <h5 class="mt-3 fw-normal">Sitio</h5>
                    <div class="line"></div>
                    <ul class="list-unstyled">
                        <li>
                            <router-link to="/HomeView">Inicio</router-link>
                        </li>
                        <li>
                            <router-link to="/ServiciosView#mecanizado">Servicios</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="mt-3 fw-normal">Contactános</h5>
                    <div class="line"></div>
                    <p class="mb-1"><i class="bi bi-envelope-fill me-3"></i><a href="mailto:info@solsa.cl" class="text-sm">info@solsa.cl</a></p>
                    <p class="mb-1"><i class="bi bi-telephone-fill me-3"></i><span class="text-sm">+56 9 9135 1542</span></p>
                    <p class="mb-1"><i class="bi bi-geo-alt-fill me-3"></i><span class="text-sm">San Felipe, Valparaíso, Chile</span></p>
                </div>
            </div>
        </div>
        <div id="coda" class=" py-4">
            <div class="container text-center">
                <p class="mb-0 text-sm">&copy; All rights reserved. Designed by </p> <h2>Coda Latam</h2>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
    name: 'FooterComp',
    }
</script>
<style scoped>

    a {
        color: #fff;
        transition: 0.5s;
        text-decoration: none;
        font-family: var(--font-primary);
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
    h2,
    h5{
    font-family: var(--font-primary);
    font-weight: 400;
    margin: 0 0 20px 0;
    padding: 0;
    }
    #footer img{
        margin-top: 1.5rem;
    }
    #footer .solsa{
        font-size: .9rem;
        margin: 0;
        margin-left: 5px;
        color: #777;
    }
    #footer h5{

        margin: 0;
    }
    #footer .line{
        background-color: var(--color-green);
        height: 2px;
        width: 50%;
        margin-top: 5px;
        margin-bottom: 1rem;
        border-radius: 1px;
    }
    #footer {
    background: #000;
    color: #eee;
    font-size: 14px;
    }
    #coda{
        background-color: #000;
    }
    #coda p {
        color: #444;
    }
    #coda h2{
        color: var(--color-green);
        font-size: 1rem;
    }
</style>
