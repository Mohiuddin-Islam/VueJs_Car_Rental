<template>

    <!--<< Breadcrumb Section Start >>-->
    <div class="breadcrumb-wrapper bg-cover" :style="{backgroundImage: 'url(\'src/assets/img/contact_us.jpeg\')'}">
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
                            Contact
                        </li>
                    </ul>
                    <h1 class="wow fadeInUp" data-wow-delay=".5s">Contact</h1>
                </div>
            </div>
        </div>

        <!-- Contact Section Start -->
        <section class="contact-section-1 fix section-padding pb-0">
            <div class="container">
                <div class="contact-wrapper-area">
                    <div class="row g-4">
                        <div class="col-lg-9">
                            <div class="contact-content">
                                <div class="section-title">
                                    <img src="@/assets/img/sub-icon.png" alt="icon-img" class="wow fadeInUp">
                                    <span class="wow fadeInUp" data-wow-delay=".2s">contact us</span>
                                    <h2 class="wow fadeInUp" data-wow-delay=".4s">
                                        Drop us a Line
                                    </h2>
                                </div>
                                <form action="#" id="contact-form" method="POST" class="contact-form-items mt-5 mt-md-0">
                                    <div class="row g-4">
                                        <div class="col-lg-6">
                                            <div class="form-clt">
                                                <input type="text" name="name" id="name" placeholder="Your Name">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-clt">
                                                <input type="text" name="email" id="email2" placeholder="Your Email">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-clt">
                                                <input type="text" name="subject" id="subject" placeholder="Subject">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-clt">
                                                <input type="text" name="phone" id="phone" placeholder="Phone">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-clt">
                                                <textarea name="message" id="message" placeholder="Write a Comment"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <button type="submit" class="theme-btn">
                                                Send a Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="contact-right-items">
                                <div class="contact-img">
                                    <img src="@/assets/img/contact.webp" alt="img">
                                </div>
                                <div class="icon-items">
                                    <div class="icon">
                                        <img src="@/assets/img/question.png" alt="img">
                                    </div>
                                    <div class="content">
                                        <p>Have Question?</p>
                                        <h6><RouterLink to="tel:+923076806860">+ 92 ( 307 ) 68 - 06860</RouterLink></h6>
                                    </div>
                                </div>
                                <div class="icon-items">
                                    <div class="icon">
                                        <img src="@/assets/img/email.png" alt="img">
                                    </div>
                                    <div class="content">
                                        <p>Write Email</p>
                                        <h6><RouterLink to="mailto:info@example.com" class="link">info@example.com</RouterLink></h6>
                                    </div>
                                </div>
                                <div class="icon-items">
                                    <div class="icon">
                                        <img src="@/assets/img/location.png" alt="img">
                                    </div>
                                    <div class="content">
                                        <p>Visit Office</p>
                                        <h6>
                                            24 Valentin, Street Road <br>
                                            New York
                                        </h6>
                                    </div>
                                </div>
                                <div class="social-icon d-flex align-items-center">
                                    <RouterLink to="#"><i class="fab fa-facebook-f"></i></RouterLink>
                                    <RouterLink to="#"><i class="fab fa-twitter"></i></RouterLink>
                                    <RouterLink to="#"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                                    <RouterLink to="#"><i class="fa-brands fa-youtube"></i></RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--<< Map Section Start >>-->
        <div class="map-section">
            <div class="map-items">
                <div class="googpemap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" style="border:0;" allowFullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
</template>