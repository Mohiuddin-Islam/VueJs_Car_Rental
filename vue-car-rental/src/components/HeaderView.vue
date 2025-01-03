<template>
    <!-- Back To Top Start -->
    <div class="scroll-up">
            <svg class="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>

        <!-- Offcanvas Area Start -->
        <div class="fix-area">
            <div class="offcanvas__info">
                <div class="offcanvas__wrapper">
                    <div class="offcanvas__content">
                        <div class="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div class="offcanvas__logo">
                                <RouterLink to="/">
                                    <img src="@/assets/img/logo/black-logo.svg" alt="logo-img">
                                </RouterLink>
                            </div>
                            <div class="offcanvas__close">
                                <button>
                                <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <p class="text d-none d-xl-block">
                            Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
                        </p>
                        <div class="mobile-menu fix mb-3"></div>
                        <div class="offcanvas__contact">
                            <h4>Contact Info</h4>
                            <ul>
                                <li class="d-flex align-items-center">
                                    <div class="offcanvas__contact-icon">
                                        <i class="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div class="offcanvas__contact-text">
                                        <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="offcanvas__contact-icon mr-15">
                                        <i class="fal fa-envelope"></i>
                                    </div>
                                    <div class="offcanvas__contact-text">
                                        <a href="mailto:info@example.com"><span class="mailto:info@example.com">info@example.com</span></a>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="offcanvas__contact-icon mr-15">
                                        <i class="fal fa-clock"></i>
                                    </div>
                                    <div class="offcanvas__contact-text">
                                        <RouterLink target="_blank" to="#">Mod-friday, 09am -05pm</RouterLink>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="offcanvas__contact-icon mr-15">
                                        <i class="far fa-phone"></i>
                                    </div>
                                    <div class="offcanvas__contact-text">
                                        <RouterLink to="tel:+11002345909">+11002345909</RouterLink>
                                    </div>
                                </li>
                            </ul>
                            <div class="header-button mt-4">
                                <RouterLink to="contact.html" class="theme-btn text-center">
                                    <span>Get A Quote<i class="fa-solid fa-arrow-right-long"></i></span>
                                </RouterLink>
                            </div>
                            <div class="social-icon d-flex align-items-center">
                                <RouterLink to="#"><i class="fab fa-facebook-f"></i></RouterLink>
                                <RouterLink to="#"><i class="fab fa-twitter"></i></RouterLink>
                                <RouterLink to="#"><i class="fab fa-youtube"></i></RouterLink>
                                <RouterLink to="#"><i class="fab fa-linkedin-in"></i></RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas__overlay"></div>

        <!-- Header Section Start -->
        <header class="header-section">
            <div class="header-top-section style-two">
                <div class="container-fluid">
                    <div class="header-top-wrapper style-2">
                        <ul class="contact-list">
                            <li>
                                <i class="fas fa-envelope"></i>
                                <RouterLink to="mailto:info@example.com" class="link">info@example.com</RouterLink>
                            </li>
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                88 Broklyn Golden Street. New York
                            </li>
                        </ul>
                        <div class="header-top-right">
                            <ul class="top-list">
                                <li><RouterLink to="contact.html">Help</RouterLink></li>
                                <li><RouterLink to="contact.html">Support</RouterLink></li>
                                <li><RouterLink to="contact.html">Contact</RouterLink></li>
                            </ul>
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
            <div id="header-sticky" class="header-3">
                <div class="container-fluid">
                    <div class="mega-menu-wrapper">
                        <div class="header-main">
                            <div class="header-left">
                                <div class="logo">
                                    <RouterLink to="/" class="header-logo-1">
                                        <img src="@/assets/img/logo/white-logo-2.svg" alt="logo-img">
                                    </RouterLink>
                                    <RouterLink to="/" class="header-logo-2">
                                        <img src="@/assets/img/logo/black-logo.svg" alt="logo-img">
                                    </RouterLink>
                                </div>
                                <div class="mean__menu-wrapper">
                                    <div class="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li class="has-dropdown active menu-thumb">
                                                    <RouterLink to="/">
                                                    Home
                                                    </RouterLink>
                                                </li>
                                                <li>
                                                    <RouterLink to="/about">About Us</RouterLink>
                                                </li>
                                                <li class="has-dropdown">
                                                    <RouterLink to="/carlist">
                                                        CarList
                                                    </RouterLink>
                                                </li>
                                                <li>
                                                    <RouterLink to="/faq">
                                                        FAQ
                                                        
                                                    </RouterLink>
                                                    
                                                </li>
                                                <li>
                                                    <a href="/contact">Contact</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div class="header-right d-flex justify-content-end align-items-center">
                                <div class="icon-items">
                                    <div class="icon">
                                        <i class="fas fa-phone-alt"></i>
                                    </div>
                                    <div class="content">
                                        <p>Call Anytime</p>
                                        <h6><RouterLink to="tel:+9288009850">+92 (8800) - 9850</RouterLink></h6>
                                    </div>
                                </div>
                                <a href="#0" class="search-trigger search-icon"><i class="fa-regular fa-magnifying-glass"></i></a>
                                <div class="header-button">
                                    <RouterLink to="car-details.html" class="theme-btn">
                                        Find a Car
                                    </RouterLink>
                                </div>
                                <div class="header__hamburger d-xl-none my-auto">
                                    <div class="sidebar__toggle">
                                        <i class="fas fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Search Area Start -->
        <div class="search-wrap">
            <div class="search-inner">
                <i class="fas fa-times search-close" id="search-close"></i>
                <div class="search-cell">
                    <form method="get">
                        <div class="search-field-holder">
                            <input type="search" class="main-search-input" placeholder="Search...">
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>