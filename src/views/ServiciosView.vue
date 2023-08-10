<template>
    <section id="servicios" >
        <div class="container shadow section-sm rounded pt-5">
            <div class="row mb-5">
                <h1>SERVICIOS</h1>
                <div class="line"></div>
            </div>
            <div class="row servicios">
                <!-- sidebar -->
                <div class="col-lg-3">
                    <ul class="sidenav">
                        <li class="sidelist main active" id="btn-mecanizado">
                            <a href="#servicios-section">Mecanizados en Terreno</a>
                        </li>
                        <li class="sidelist main" id="btn-arriendo-equipos">
                            <a href="#servicios-section">Arriendo de Equipos de Apoyo</a>
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
                            <a href="#servicios-section">Arriendo de Camionetas 4x4 con equipamiento Minero</a>
                        </li>
                        <li class="sidelist main" id="btn-reparacion-equipos">
                            <a href="#servicios-section">Reparación de Equipos Autónomos</a>
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
                            <a href="#servicios-section">Proyectos</a>
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
                            <a href="#servicios-section">Ferretería especializada</a>
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
                <!-- Contents -->
                <div class="col-lg-8" id="servicios-section">

                    <div class="px-lg-5 px-4 servicio active" id="mecanizado">
                        <h2 class="mb-4 font-weight-medium">Mecanizados en Terreno</h2>
                        <div class="content">
                            <p>En SOLSA ofrecemos servicios de mecanizado en terreno, brindando soluciones  de barrenado de precisión, efectivas y eficiencientes con excelente gestión y manejo logístico, con un personal calificado y experimentado que nos asegura entregar un excelente servicio.
                            </p>
                            <!-- CARRUSEL DE MECANIZADOS -->
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
                                        <img class="d-block w-100" src="../assets/showcase/Mecanizados/15.jpg" alt="Fifteenth slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="../assets/showcase/Mecanizados/16.jpg" alt="Fifteenth slide">
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
                        <h2 id="">Arriendo de Equipos de Apoyo</h2>
                        <div class="content">
                            <p>Contamos con equipos de apoyo disponibles para arriendo, que se adaptan a las necesidades de su industria. Dentro de este servicio, ofrecemos:
                            </p>
                        </div>

                        <div class="accordion" id="accordionEquipos">

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hidro" aria-expanded="false" aria-controls="hidro">
                                    Hidrolavadoras Diesel autónomas
                                </button>
                                </h2>
                                <div id="hidro" class="accordion-collapse collapse" data-bs-parent="#accordionEquipos">
                                    <div class="accordion-body">
                                        Proporcionamos hidrolavadoras de alta presión que funcionan con motor diesel y son totalmente autónomas, lo que las hace ideales para trabajos en sitios remotos o sin acceso a energía eléctrica.
                                        <div>
                                            <img src="../assets/showcase/Arriendoequipos/hidrolavadora.jpg" alt="hidro">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hytorc" aria-expanded="false" aria-controls="hytorc">
                                        Hytorc
                                    </button>
                                </h2>
                                <div id="hytorc" class="accordion-collapse collapse" data-bs-parent="#accordionEquipos">
                                    <div class="accordion-body">
                                        Ponemos a su disposición equipos Hytorc, especializados en tensionado y torque controlado. Estos equipos son esenciales para el montaje y desmontaje de elementos sujetos a altos niveles de presión y torque.
                                            <!-- CARRUSEL DE HYTORC -->
                                        <div id="carousel-hytorc" class="carousel slide">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carousel-hytorc" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carousel-hytorc" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img class="d-block w-100" src="../assets/showcase/Arriendoequipos/bombahytorc.jpg" alt="First slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Arriendoequipos/hytorc2.jpg" alt="Second slide">
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-hytorc" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carousel-hytorc" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        
                            <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#enerpac" aria-expanded="false" aria-controls="enerpac">
                                    Enerpac
                                </button>
                            </h2>
                            <div id="enerpac" class="accordion-collapse collapse" data-bs-parent="#accordionEquipos">
                                <div class="accordion-body">
                                    Ofrecemos equipos de alta calidad Enerpac para aplicaciones de alta presión, como cilindros hidráulicos, bombas y herramientas de torque. 
                                    <!--IMAGEN ENERPAC-->
                                    <div>
                                        <img src="../assets/showcase/Arriendoequipos/enerpac.jpg" alt="hidro">
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#evotorque" aria-expanded="false" aria-controls="evotorque">
                                Evotorque   
                                </button>
                            </h2>
                            <div id="evotorque" class="accordion-collapse collapse" data-bs-parent="#accordionEquipos">
                                <div class="accordion-body">
                                    Contamos con herramientas EvoTorque para aplicaciones de torque preciso y controlado, seguro y eficiente.
                                    <!--IMAGEN EVOTORQUE-->
                                    <div>
                                        <img src="../assets/showcase/Arriendoequipos/evotorque.jpg" alt="hidro">
                                    </div>
                                </div>
                            </div>
                            </div>
                        
                        </div>
                    </div>

                    <div class="px-lg-5 px-4 servicio" id="arriendo-camionetas">
                        <h2 class="mb-4 font-weight-medium">Arriendo de Camionetas 4x4 con equipamiento Minero</h2>
                        <div class="content">
                            <p>Ponemos a su disposición camionetas 4x4 equipadas con todo lo necesario para enfrentar los desafíos del entorno minero. Nuestros vehículos cuentan con características especiales para garantizar la seguridad y el rendimiento en terrenos difíciles, lo que los convierte en la opción ideal para proyectos mineros y actividades relacionadas.
                            </p>
                            <!--IMAGEN CAMIONETA 4X4-->
                                <div>
                                    <img src="../assets/showcase/arriendocamioneta4x4.jpg" alt="hidro">
                                </div>
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
                            <!-- CARRUSEL DE REPARACION DE EQUIPOS-->
                            <div id="carousel-reparacion" class="carousel slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carousel-reparacion" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carousel-reparacion" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carousel-reparacion" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carousel-reparacion" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carousel-reparacion" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carousel-reparacion" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                    <button type="button" data-bs-target="#carousel-reparacion" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                    <button type="button" data-bs-target="#carousel-reparacion" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                    <button type="button" data-bs-target="#carousel-reparacion" data-bs-slide-to="8" aria-label="Slide 10"></button>
                                    <button type="button" data-bs-target="#carousel-reparacion" data-bs-slide-to="9" aria-label="Slide 11"></button>

                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src="../assets/showcase/Reparaciones/reparacion1.jpg" alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="../assets/showcase/Reparaciones/reparacion2.jpg" alt="Second slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="../assets/showcase/Reparaciones/reparacion3.jpg" alt="Third slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="../assets/showcase/Reparaciones/reparacion4.jpg" alt="Fourth slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="../assets/showcase/Reparaciones/reparacion5.jpg" alt="Fifth slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="../assets/showcase/Reparaciones/reparacion7.jpg" alt="Six slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="../assets/showcase/Reparaciones/reparacion9.jpg" alt="Seventh slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="../assets/showcase/Reparaciones/reparacion10.jpg" alt="Eigth slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="../assets/showcase/Reparaciones/reparacion11.jpg" alt="Ninth slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src="../assets/showcase/Reparaciones/reparacion12.jpg" alt="Tenth slide">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carousel-reparacion" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carousel-reparacion" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="px-lg-5 px-4 servicio" id="proyectos">
                        <h2 class="mb-4 font-weight-mediu" id="">Proyectos</h2>
                        <div class="content">
                            <p>Nuestro equipo de profesionales altamente calificados está preparado para llevar a cabo proyectos de diferentes categorías. Dentro de nuestros servicios de proyectos, ofrecemos:
                            </p>
                        </div>

                        <div class="accordion" id="accordionProyectos">

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ingenieria" aria-expanded="false" aria-controls="ingenieria">
                                        Ingeniería
                                    </button>
                                </h2>
                                <div id="ingenieria" class="accordion-collapse collapse" data-bs-parent="#accordionProyectos">
                                    <div class="accordion-body">
                                        Ofrecemos servicios de ingeniería para el desarrollo y la implementación de soluciones técnicas en su industria, optimizando procesos y maximizando la eficiencia y seguridad.
                                    </div>
                                    <!-- CARRUSEL DE INGIENERIA -->
                                    <div id="carousel-ingenieria" class="carousel slide">
                                        <div class="carousel-indicators">
                                            <button type="button" data-bs-target="#carousel-ingenieria" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carousel-ingenieria" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carousel-ingenieria" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            <button type="button" data-bs-target="#carousel-ingenieria" data-bs-slide-to="3" aria-label="Slide 4"></button>

                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="../assets/showcase/Proyectos/ingieneria1.jpg" alt="First slide">
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="../assets/showcase/Proyectos/ingieneria2.jpg" alt="Second slide">
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="../assets/showcase/Proyectos/ingieneria3.jpg" alt="Third slide">
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="../assets/showcase/Proyectos/ingieneria4.jpg" alt="Fourth slide">
                                            </div>
                                            
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-ingenieria" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-ingenieria" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#maestranza" aria-expanded="false" aria-controls="maestranza">
                                        Maestranza
                                    </button>
                                </h2>
                                <div id="maestranza" class="accordion-collapse collapse" data-bs-parent="#accordionProyectos">
                                    <div class="accordion-body">
                                        Contamos con una maestranza equipada para fabricación, reparación y mantenimiento de componentes y equipos industriales.
                                        <!-- CARRUSEL DE MAESTRANZA -->
                                        <div id="carousel-maestranza" class="carousel slide">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carousel-maestranza" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carousel-maestranza" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carousel-maestranza" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#carousel-maestranza" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                <button type="button" data-bs-target="#carousel-maestranza" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                <button type="button" data-bs-target="#carousel-maestranza" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                <button type="button" data-bs-target="#carousel-maestranza" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                                <button type="button" data-bs-target="#carousel-maestranza" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                                <button type="button" data-bs-target="#carousel-maestranza" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/maestranza1.jpg" alt="First slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/maestranza2.jpg" alt="Second slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/maestranza3.jpg" alt="Third slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/maestranza4.jpg" alt="Fourth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/maestranza5.jpg" alt="Fifth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/maestranza6.jpg" alt="Sixth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/maestranza7.jpg" alt="Seventh slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/maestranza8.jpg" alt="Eighth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/ingieneria5.jpg" alt="Nineth slide">
                                            </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-maestranza" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carousel-maestranza" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#industrial" aria-expanded="false" aria-controls="industrial">
                                        Mantenimiento Industrial
                                    </button>
                                </h2>
                                <div id="industrial" class="accordion-collapse collapse" data-bs-parent="#accordionProyectos">
                                    <div class="accordion-body">
                                        Brindamos servicios integrales de mantenimiento industrial para asegurar el correcto funcionamiento de sus instalaciones y equipos, minimizando los tiempos de inactividad.
                                    
                                        <!-- CARRUSEL DE MANTENIMIENTO INDUSTRIAL -->
                                        <div id="carousel-industrial" class="carousel slide">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="11" aria-label="Slide 12"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="12" aria-label="Slide 13"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="13" aria-label="Slide 14"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="14" aria-label="Slide 15"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="15" aria-label="Slide 16"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="16" aria-label="Slide 17"></button> 
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="17" aria-label="Slide 18"></button> 
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="18" aria-label="Slide 19"></button>
                                                <button type="button" data-bs-target="#carousel-industrial" data-bs-slide-to="19" aria-label="Slide 20"></button>      
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial1.jpg" alt="First slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial2.jpg" alt="Second slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial3.jpg" alt="Third slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial4.jpg" alt="Fourth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial6.jpg" alt="Sixth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial7.jpg" alt="Seventh slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial8.jpg" alt="Eighth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial9.jpg" alt="Ninth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial10.jpg" alt="Tenth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial11.jpg" alt="Eleventh slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial12.jpg" alt="Twelfth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial13.jpg" alt="Thirteenth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial14.jpg" alt="Fourteenth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial15.jpg" alt="Fifteenth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial16.jpg" alt="Sixteenth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial17.jpg" alt="Seventeenth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial19.jpg" alt="Ninteenth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/mindustrial20.jpg" alt="Twentieth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones4.jpg" alt="Twenty first slide">
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-industrial" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carousel-industrial" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#instalacion" aria-expanded="false" aria-controls="instalacion">
                                        Mantenimiento de instalaciones
                                    </button>
                                </h2>
                                <div id="instalacion" class="accordion-collapse collapse" data-bs-parent="#accordionProyectos">
                                    <div class="accordion-body">
                                        Nos encargamos del mantenimiento de sus instalaciones, tanto preventivo como correctivo, limpieza, reparaciones estructurales para garantizar su operatividad y seguridad.
                                    
                                        <!-- CARRUSEL DE MANTENIMIENTO DE INSTALACIONES -->
                                        <div id="carousel-instalaciones" class="carousel slide">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carousel-instalaciones" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carousel-instalaciones" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carousel-instalaciones" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#carousel-instalaciones" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                <button type="button" data-bs-target="#carousel-instalaciones" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                <button type="button" data-bs-target="#carousel-instalaciones" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                <button type="button" data-bs-target="#carousel-instalaciones" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                                <button type="button" data-bs-target="#carousel-instalaciones" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                                <button type="button" data-bs-target="#carousel-instalaciones" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                                <button type="button" data-bs-target="#carousel-instalaciones" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                                <button type="button" data-bs-target="#carousel-instalaciones" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                                <button type="button" data-bs-target="#carousel-instalaciones" data-bs-slide-to="11" aria-label="Slide 12"></button>
                                               
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones1.jpg" alt="First slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones2.jpg" alt="Second slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones3.jpg" alt="Third slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones5.jpg" alt="Fifth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones6.jpg" alt="Sixth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones8.jpg" alt="Seventh slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones10.jpg" alt="Nineth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones11.jpg" alt="Tenth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones12.jpg" alt="Eleventh slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones13.jpg" alt="Twelfth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones14.jpg" alt="Thirteenth slide">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src="../assets/showcase/Proyectos/minstalaciones15.jpg" alt="Fourteenth slide">
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-instalaciones" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carousel-instalaciones" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="px-lg-5 px-4 pb-5 servicio" id="ferreteria">
                        <h2 class="mb-4 font-weight-mediu">Ferretería especializada</h2>
                        <div class="content">
                            <p>En SOLSA contamos con una ferretería especializada comprometida con satisfacer sus necesidades industriales, logísticas y operacionales. Dentro de nuestros servicios de ferretería, ofrecemos:
                            </p>
                            <!--IMAGEN DE FERRETERIA-->
                            <div>
                                <img src="../assets/showcase/ferreteria.jpg" alt="hidro">
                            </div> 
                        </div>

                        <div class="accordion" id="accordionFerreteria">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#insumos" aria-expanded="false" aria-controls="insumos">
                                        Suministro de Insumos en menos de 24 horas
                                    </button>
                                </h2>
                                <div id="insumos" class="accordion-collapse collapse" data-bs-parent="#accordionFerreteria">
                                    <div class="accordion-body">
                                        Nos comprometemos a proveer los insumos que necesite en un plazo máximo de 24 horas, garantizando una rápida respuesta a sus requerimientos.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#herramientas" aria-expanded="false" aria-controls="herramientas">
                                        Suministro de Herramientas en menos de 24 horas
                                    </button>
                                </h2>
                                <div id="herramientas" class="accordion-collapse collapse" data-bs-parent="#accordionFerreteria">
                                    <div class="accordion-body">
                                        Ponemos a su disposición una amplia gama de herramientas especializadas y nos comprometemos a entregarlas en un plazo máximo de 24 horas, para que pueda contar con las herramientas adecuadas en el momento oportuno, tanto para requerimientos permanentes como para imprevistos.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    </section>
       <CallComp />
    </template>
<script>
import CallComp from "@/components/CallComp.vue"

export default {
    name: "ServiciosView",  
    components: {
        CallComp,   
    }, 
    created(){
        window.scrollTo({ top: 0, behavior: 'instant' });
    },
    mounted(){
        const servicios = document.querySelectorAll("div.servicio"); 
        const btnsMain = document.querySelectorAll(".sidelist.main");
        // Control de sidebar
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

        // Control de secciones al cargar 
        let section = this.$router.currentRoute.value.hash.replace("#", "");

        if(section && section != "servicios-section"){
            let lista = section.split("_");
            let cat = lista[0];
            let subcat = "";
            if(lista.length == 2){
                subcat = lista[1];
            }

            btnsMain.forEach((btn)=>{
                btn.classList.remove("active");
            });
            servicios.forEach((s)=>{
                s.classList.remove("active");
            });
            if(cat){
                document.getElementById("btn-"+ cat).classList.add("active");
                document.getElementById(cat).classList.add("active");
            }
            if(subcat){
                let acordions = document.querySelectorAll(".accordion-collapse");
                acordions.forEach((a)=>{
                    a.classList.remove("show");
                });
                document.getElementById(subcat).classList.add("show");
                document.querySelectorAll(".accordion-button").forEach((e)=>{
                    e.classList.add("collapsed");
                });
                document.getElementById(subcat).previousElementSibling.childNodes[0].classList.remove("collapsed");
            }
            
            this.$router.push(this.$router.currentRoute.value.path);
        }
    },
    updated() {
        let section = this.$router.currentRoute.value.hash.replace("#", "");

        const servicios = document.querySelectorAll("div.servicio"); 
        const btnsMain = document.querySelectorAll(".sidelist.main");

        if(section && section != "servicios-section"){
            let lista = section.split("_");
            let cat = lista[0];
            let subcat = "";
            if(lista.length == 2){
                subcat = lista[1];
            }

            btnsMain.forEach((btn)=>{
                btn.classList.remove("active");
            });
            servicios.forEach((s)=>{
                s.classList.remove("active");
            });
            if(cat){
                document.getElementById("btn-"+ cat).classList.add("active");
                document.getElementById(cat).classList.add("active");
            }
            if(subcat){
                let acordions = document.querySelectorAll(".accordion-collapse");
                acordions.forEach((a)=>{
                    a.classList.remove("show");
                });
                document.getElementById(subcat).classList.add("show");
                document.querySelectorAll(".accordion-button").forEach((e)=>{
                    e.classList.add("collapsed");
                });
                document.getElementById(subcat).previousElementSibling.childNodes[0].classList.remove("collapsed");
            }
            this.$router.push(this.$router.currentRoute.value.path);
        }
        console.log(document.querySelector(".servicio.active"));

    },
};
    
    </script>
    <style scoped>
    #servicios{
        margin-top: 6rem;
    }
    #servicios .line{
        height: 6px;
        width: 60px;
        background-color: var(--color-green);
        border-radius: 3px;
        margin-left: calc(50% - 90px);
    }
    .servicio{
        opacity: 0;
        transition: 1s opacity ease-in-out;
        height: 0;
        visibility: hidden;
    }
    .servicio.active{
        height: auto;
        opacity: 1;

        visibility: visible;
    }
    #servicios-section{
        scroll-margin: 13rem; 
    }
    ul {
    list-style: none;
    font-family: var(--font-primary);
    }

    a {
    color: var(--color-green);
    transition: 0.5s;
    text-decoration: none;
    font-family: var(--font-primary);
    }
    a:hover,
    a:active,
    a:focus {
    color: var(--color-green);
    outline: none;
    text-decoration: none;
    }
    h1, h2{
    color: #222;
    font-family: var(--font-primary);
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
    font-family: var(--font-primary);
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
        background: var(--color-green);
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
        color: var(--color-green) !important;
    }

    .carousel{
        margin-top: 1rem;
    }
    .servicio img{
        height: 28rem;
        width: 100%;
        object-fit: cover;
    }
    .accordion-button:not(.collapsed){
        background-color: var(--color-green--transparent);
        box-shadow: none;
        color: #333;
    }
    .accordion-button:focus{
        border-color: none;
    }
    @media(max-width: 960px){
        #servicios-section{
            scroll-margin: 6rem; 
        }
        .servicio h2{
            font-size: 20px;
        }
        .servicio img{
            height: 14rem;
        }
    }
    </style>