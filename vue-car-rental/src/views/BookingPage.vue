<template>
    <!--<< Breadcrumb Section Start >>-->
    <div class="breadcrumb-wrapper bg-cover" :style="{backgroundImage: 'url(\'src/assets/img/banner.jpg\')'}">
            <div class="container">
                <div class="page-heading">
                    <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                        <li>
                            <a href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <i class="fas fa-chevron-right"></i>
                        </li>
                        <li>
                            Cars
                        </li>
                    </ul>
                    <h1 class="wow fadeInUp" data-wow-delay=".5s">Single Car</h1>
                </div>
            </div>
        </div>

        <!-- Car Details Section Start -->
        <section class="car-details fix section-padding">
            <div class="container">
                <div class="car-details-wrapper">
                    <div class="row g-5">
                        <div class="col-lg-12">
                            <div class="car-details-items">
                                <div class="car-image">
                                    <img src="@/assets/img/car/car-details.webp" alt="img">
                                </div>
                                <div class="car-content">
                                    <div class="star">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <span>2 Reviews</span>
                                    </div>
                                    <h3>Hyundai Accent Limited</h3>
                                    <h6>$70.00 <span>/ Day</span></h6>
                                    <p class="mt-4 mb-4">
                                        To deliver on the promise of technology and human We help our clients become sions of themselves. Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem ipsum has been the industry’s standard dummy text ever since the 1500s.
                                    </p>
                                    <div class="icon-details-area">
                                        <h4>Key Features</h4>
                                        <div class="icon-details-main-items">
                                            <div class="icon-items">
                                                <div class="icon">
                                                    <img src="@/assets/img/car/icon/07.png" alt="img">
                                                </div>
                                                <div class="content">
                                                    <h6>body:</h6>
                                                    <p>Sedan</p>
                                                </div>
                                            </div>
                                            <div class="icon-items">
                                                <div class="icon">
                                                    <img src="@/assets/img/car/icon/07.png" alt="img">
                                                </div>
                                                <div class="content">
                                                    <h6>Mileage:</h6>
                                                    <p>70.000 (Mi)</p>
                                                </div>
                                            </div>
                                            <div class="icon-items">
                                                <div class="icon">
                                                    <img src="@/assets/img/car/icon/07.png" alt="img">
                                                </div>
                                                <div class="content">
                                                    <h6>Year:</h6>
                                                    <p>2024</p>
                                                </div>
                                            </div>
                                            <div class="icon-items">
                                                <div class="icon">
                                                    <img src="@/assets/img/car/icon/07.png" alt="img">
                                                </div>
                                                <div class="content">
                                                    <h6>Engine:</h6>
                                                    <p>2500 cc</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="icon-details-main-items">
                                            <div class="icon-items">
                                                <div class="icon">
                                                    <img src="@/assets/img/car/door.svg" alt="img">
                                                </div>
                                                <div class="content">
                                                    <h6>Passengers:</h6>
                                                    <p>6 Seats</p>
                                                </div>
                                            </div>
                                            <div class="icon-items">
                                                <div class="icon">
                                                    <img src="@/assets/img/car/seat.svg" alt="img">
                                                </div>
                                                <div class="content">
                                                    <h6>Gear:</h6>
                                                    <p>Automatic</p>
                                                </div>
                                            </div>
                                            <div class="icon-items">
                                                <div class="icon">
                                                    <img src="@/assets/img/car/automatic.svg" alt="img">
                                                </div>
                                                <div class="content">
                                                    <h6>Gear:</h6>
                                                    <p>Automatic</p>
                                                </div>
                                            </div>
                                            <div class="icon-items">
                                                <div class="icon">
                                                    <img src="@/assets/img/car/petrol.svg" alt="img">
                                                </div>
                                                <div class="content">
                                                    <h6>Fuel:</h6>
                                                    <p>Petrol</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="car-booking-items">
                                <div class="booking-header">
                                    <h3>Request for Booking</h3>
                                    <p>Send your requirement to us. We will check email and contact you soon.</p>
                                </div>
                                <form action="#" id="contact-form" method="POST" class="contact-form-items">
                                    <div class="row g-4">
                                        <div class="col-lg-6">
                                            <div class="form-clt">
                                                <label class="label-text">Your Name</label>
                                                <input type="text" name="name" id="name" placeholder="Enter Name">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-clt">
                                                <label class="label-text">Email</label>
                                                <input type="text" name="email" id="email" placeholder="Enter Email Address">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-clt">
                                                <label class="label-text">Phone Number</label>
                                                <input type="text" name="phone" id="phone" placeholder="+ 00 0000 - 000">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-clt">
                                                <label class="label-text">Address</label>
                                                <input type="text" name="address" id="address" placeholder="Address">
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-clt">
                                                <label class="label-text">CarList</label>
                                                <div class="category-oneadjust">
                                                    <select name="cate" class="category" style="display: none;">
                                                        <option value="1">
                                                            Select Location
                                                        </option>
                                                        <option value="1">
                                                            Houston
                                                        </option>
                                                        <option value="1">
                                                            Texas
                                                        </option>
                                                        <option value="1">
                                                            New York
                                                        </option>
                                                        <option value="1">
                                                            Other Location
                                                        </option>
                                                    </select><div class="nice-select category" tabindex="0"><span class="current">
                                                            Select Location
                                                        </span><ul class="list"><li data-value="1" class="option selected">
                                                            Select Location
                                                        </li><li data-value="1" class="option">
                                                            Houston
                                                        </li><li data-value="1" class="option">
                                                            Texas
                                                        </li><li data-value="1" class="option">
                                                            New York
                                                        </li><li data-value="1" class="option">
                                                            Other Location
                                                        </li></ul></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-clt">
                                                <label class="label-text">Pick-up Date</label>
                                                <div className="input-group date" data-date-format="dd-mm-yyyy">
                                                    <input class="form-control" type="date">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="form-clt">
                                                <label class="label-text">Drop-off Date</label>
                                                <div class="input-group date" data-date-format="dd-mm-yyyy">
                                                    <input class="form-control" type="date">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <button class="theme-btn" type="submit">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>