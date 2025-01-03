<template>
    <!--<< Breadcrumb Section Start >>-->
    <div class="breadcrumb-wrapper bg-cover" :style="{backgroundImage: 'url(\'src/assets/img/banner.jpg\')'}">
            <div class="container">
                <div class="page-heading">
                    <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                        <li>
                            <RouterLink to="/">
                                Home
                            </RouterLink>
                        </li>
                        <li>
                            <i class="fas fa-chevron-right"></i>
                        </li>
                        <li>
                            About Us
                        </li>
                    </ul>
                    <h1 class="wow fadeInUp" data-wow-delay=".5s">About Us</h1>
                </div>
            </div>
        </div>

        <!-- About Section Start -->
        <section class="about-section fix section-padding">
            <div class="container">
                <div class="about-wrapper-2">
                    <div class="row g-4">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div class="about-image">
                                <img src="@/assets/img/about/aboutus.webp" alt="about-image">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-content">
                                <div class="section-title">
                                    <img src="@/assets/img/sub-icon.png" alt="icon-img" class="wow fadeInUp">
                                    <span class="wow fadeInUp" data-wow-delay=".2s">Get to know us</span>
                                    <h2 class="wow fadeInUp" data-wow-delay=".4s">
                                        Trusted & Leading in 
                                        Car Rent Services
                                    </h2>
                                </div>
                                <p class="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".6s">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
                                </p>
                                <div class="about-list-wrapper">
                                    <div class="about-list-items wow fadeInUp" data-wow-delay=".3s">
                                        <ul>
                                            <li>
                                                <i class="fa-solid fa-arrow-right"></i>
                                                Nsectetur cing elit
                                            </li>
                                            <li>
                                                <i class="fa-solid fa-arrow-right"></i>
                                                Suspe ndisse suscit sagittis leo
                                            </li>
                                            <li>
                                                <i class="fa-solid fa-arrow-right"></i>
                                                If you are going to use pasage
                                            </li>
                                            <li>
                                                <i class="fa-solid fa-arrow-right"></i>
                                                Generators on the to repeatY
                                            </li>
                                        </ul>
                                        <RouterLink to="/about" class="theme-btn">Discover More</RouterLink>
                                    </div>
                                    <div class="author-items wow fadeInUp" data-wow-delay=".5s">
                                        <div class="icon">
                                            <i class="fa-solid fa-phone"></i>
                                        </div>
                                        <p>Need help? Talk to an <br> Expert</p>
                                        <h6><RouterLink to="tel:9288009850">+92 (8800) - 9850</RouterLink></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Section Start -->
        <section class="team-section fix section-padding pt-0">
            <div class="container">
                <div class="section-title text-center">
                    <img src="@/assets/img/sub-icon.png" alt="icon-img" class="wow fadeInUp">
                    <span class="wow fadeInUp" data-wow-delay=".2s">Our expert people</span>
                    <h2 class="wow fadeInUp" data-wow-delay=".4s">
                        Meet Our Professional <br>
                        Team Members
                    </h2>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div class="team-card-items">
                            <div class="border-shape">
                                <img src="@/assets/img/team/border.webp" alt="img">
                            </div>
                            <div class="team-image">
                                <img src="@/assets/img/team/team-01.webp" alt="team-img">
                            </div>
                            <div class="team-content">
                                <h3><RouterLink to="#">Mike Hardson</RouterLink></h3>
                                <p>manager</p>
                                <div class="social-icon d-flex align-items-center justify-content-center">
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-youtube"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div class="team-card-items">
                            <div class="border-shape">
                                <img src="@/assets/img/team/border.webp" alt="img">
                            </div>
                            <div class="team-image">
                                <img src="@/assets/img/team/team-02.webp" alt="team-img">
                            </div>
                            <div class="team-content">
                                <h3><RouterLink to="#">Aleesha Brown</RouterLink></h3>
                                <p>manager</p>
                                <div class="social-icon d-flex align-items-center justify-content-center">
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-youtube"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div class="team-card-items">
                            <div class="border-shape">
                                <img src="@/assets/img/team/border.webp" alt="img">
                            </div>
                            <div class="team-image">
                                <img src="@/assets/img/team/team-03.webp" alt="team-img">
                            </div>
                            <div class="team-content">
                                <h3><RouterLink to="#">David Jhonson</RouterLink></h3>
                                <p>manager</p>
                                <div class="social-icon d-flex align-items-center justify-content-center">
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-youtube"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Funfact Section Start -->
        <section class="funfact-section section-padding fix bg-cover mt-0" :style="{backgroundImage: 'url(\'src/assets/img/banner7.jpg\')'}">
            <div class="container">
                <div class="funfact-wrapper mt-0">
                    <div class="row g-4 align-items-center">
                        <div class="col-lg-6">
                            <div class="section-title mb-0">
                                <img src="@/assets/img/sub-icon-2.png" alt="icon-img" class="wow fadeInUp">
                                <span class="wow fadeInUp" data-wow-delay=".2s">fun facts</span>
                                <h2 class="text-white wow fadeInUp" data-wow-delay=".4s">
                                    Save Time & Money <br>
                                    with Top Car Rent <br>
                                    Services
                                </h2>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="funfact-counter-area">
                                <div class="funfact-items wow fadeInUp" data-wow-delay=".3s">
                                    <div class="icon">
                                        <img src="@/assets/img/icon/car.png" alt="img">
                                    </div>
                                    <h2><span class="count">990</span></h2>
                                    <p>
                                        Cars <br>
                                        rentouts
                                    </p>
                                </div>
                                <div class="funfact-items wow fadeInUp" data-wow-delay=".5s">
                                    <div class="icon">
                                        <img src="@/assets/img/icon/center.png" alt="img">
                                    </div>
                                    <h2><span class="count">230</span></h2>
                                    <p>
                                        Center <br>
                                        solutions
                                    </p>
                                </div>
                                <div class="funfact-items wow fadeInUp" data-wow-delay=".7s">
                                    <div class="icon">
                                        <img src="@/assets/img/icon/like.png" alt="img">
                                    </div>
                                    <h2><span class="count">660</span></h2>
                                    <p>
                                        Happy <br>
                                        Customers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>