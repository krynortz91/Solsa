<template>
    <!-- End Footer -->
    <div class="bg-dark py-4 text-white">
        <div class="container">
            <div class="row py-4">
                <div class="col-lg-4 col-md-6">
                    <img class="mb-4" src="../assets/logo.png" alt="" width="200">
                    <p class=" text-sm mb-4">Solsa</p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="mt-3 mb-4 fw-normal">Sitio</h5>
                    <ul class="list-unstyled">
                        <li>
                            <router-link to="/HomeView">Inicio</router-link>
                        </li>
                        <li>
                            <router-link to="/ServiciosView#mecanizado">Servicios</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="mt-3 mb-4 fw-normal">Contactános</h5>
                    <p class="mb-1"><i class="bi bi-envelope-fill me-3"></i><span class="text-sm">info@solsa.cl</span></p>
                    <p class="mb-1"><i class="bi bi-telephone-fill me-3"></i><span class="text-sm">+56 9 9135 1542</span></p>
                    <p class="mb-1"><i class="bi bi-geo-alt-fill me-3"></i><span class="text-sm">San Felipe, Valparaíso, Chile</span></p>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-darker py-4">
        <div class="container text-center">
          <p class="mb-0 text-muted text-sm">&copy; All rights reserved. Designed by Coda Latam. </p>
        </div>
      </div>
</template>
<script>
    export default {
    name: 'FooterComp',
    }
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
    padding: 0;
    margin: 0 0 30px 0;
    font-family: "Montserrat", sans-serif;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    margin: 0 0 20px 0;
    padding: 0;
    }
    #footer {
    background: #000;
    padding: 0 0 30px 0;
    color: #eee;
    font-size: 14px;
    }
    #footer .footer-top {
    background: #111;
    padding: 60px 0 30px 0;
    }
    #footer .footer-top .footer-info {
    margin-bottom: 30px;
    }
    #footer .footer-top .footer-info h3 {
    font-size: 34px;
    margin: 0 0 20px 0;
    padding: 2px 0 2px 10px;
    line-height: 1;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    letter-spacing: 3px;
    border-left: 4px solid #18d26e;
    }
    #footer .footer-top .footer-info p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    font-family: "Montserrat", sans-serif;
    color: #eee;
    }
    #footer .footer-top h4 {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 12px;
    }
    #footer .footer-top h4::before,
    #footer .footer-top h4::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    }
    #footer .footer-top h4::before {
    right: 0;
    background: #555;
    }
    #footer .footer-top h4::after {
    background: #18d26e;
    width: 60px;
    }
    #footer .footer-top .footer-links {
    margin-bottom: 30px;
    }
    #footer .footer-top .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
    }
    #footer .footer-top .footer-links ul i {
    padding-right: 8px;
    color: #ddd;
    }
    #footer .footer-top .footer-links ul li {
    border-bottom: 1px solid #333;
    padding: 10px 0;
    }
    #footer .footer-top .footer-links ul li:first-child {
    padding-top: 0;
    }
    #footer .footer-top .footer-links ul a {
    color: #eee;
    }
    #footer .footer-top .footer-links ul a:hover {
    color: #18d26e;
    }
    #footer .footer-top .footer-contact {
    margin-bottom: 30px;
    }
    #footer .footer-top .footer-contact p {
    line-height: 26px;
    }
</style>
