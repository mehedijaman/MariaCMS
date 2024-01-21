<!DOCTYPE html>
<html
    class="js sizes customelements history pointerevents postmessage webgl websockets cssanimations csscolumns csscolumns-width csscolumns-span csscolumns-fill csscolumns-gap csscolumns-rule csscolumns-rulecolor csscolumns-rulestyle csscolumns-rulewidth no-csscolumns-breakbefore no-csscolumns-breakafter no-csscolumns-breakinside flexbox picture srcset webworkers"
    lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{{ $setting->name }}</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
    <!-- CSS here -->
    <link rel="stylesheet" href="/frontend/css/bootstrap.min.css">
    <link rel="stylesheet" href="/frontend/css/animate.min.css">
    <link rel="stylesheet" href="/frontend/css/magnific-popup.css">
    <link rel="stylesheet" href="/frontend/css/all.css">
    <link rel="stylesheet" href="/frontend/css/dripicons.css">
    <link rel="stylesheet" href="/frontend/css/slick.css">
    <link rel="stylesheet" href="/frontend/css/meanmenu.css">
    <link rel="stylesheet" href="/frontend/css/default.css">
    <link rel="stylesheet" href="/frontend/css/style.css">
    <link rel="stylesheet" href="/frontend/css/responsive.css">
</head>

<body>
    <!-- header -->
    <header class="header-area header-three">
        <div class="header-top second-header d-none d-md-block">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-lg-4 col-md-4 d-none d-lg-block ">
                        <div class="header-social">
                            <span>
                                Follow us:-
                                <a href="{{ $setting->facebook }}" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="{{ $setting->twitter }}" title="Twitter"><i class="fab fa-twitter"></i></a>
                                <a href="{{ $setting->instagram }}" title="Instagram"><i class="fab fa-instagram"></i></a>
                                <a href="{{ $setting->youtube }}" title="Youtube"><i class="fab fa-youtube"></i></a>
                                <a href="{{ $setting->whatsapp }}" title="whatsapp"><i class="fab fa-whatsapp"></i></a>
                            </span>
                            <!--  /social media icon redux -->
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8 d-none d-lg-block text-right">
                        <div class="header-cta">
                            <ul>
                                <li>
                                    <div class="call-box">
                                        <div class="icon">
                                            <img src="/frontend/images/phone-call.png" alt="img">
                                        </div>
                                        <div class="text">
                                            <span>Call Now !</span>
                                            <strong><a href="tel:+917052101786">{{ $setting->contact_no }}</a></strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="call-box">
                                        <div class="icon">
                                            <img src="/frontend/images/mailing.png" alt="img">
                                        </div>
                                        <div class="text">
                                            <span>Email Now</span>
                                            <strong><a href="mailto:info@example.com"> {{ $setting->email }}
                                                </a></strong>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="container my-3">
            <div class="row">
                <div class="col">
                    <a href="{{ route('index') }}"> <img src="{{ $setting->full_path_banner }}" alt="full size logo"> </a>
                </div>
            </div>
        </div>
        <div id="header-sticky" class="menu-area">
            <div class="container mb-3 pb-2">
                <div class="second-menu">
                    <div class="row justify-content-between">

                        <div class="col-xl-6 col-lg-6">

                            <div class="main-menu text-left text-xl-left">
                                <nav id="mobile-menu" style="display: block;">
                                    <ul>
                                        <li>
                                            <a href="{{ route('index') }}">Home</a>
                                        </li>
                                        <li class="has-sub"><a href="about.html">About Us</a>
                                            <ul>
                                                <li><a href="chairman-message.html">Chairman Message</a></li>
                                                <li> <a href="board-of-trustees.html">Board of Trustees</a></li>
                                                <li> <a href="governing-bodies.html">Syndicate</a></li>
                                                <li><a href="mission-vision.html">Mission & Vision</a></li>
                                                <li> <a href="aims-objective.html">Aims and Objectives</a></li>
                                            </ul>

                                        </li>

                                        <li class="has-sub">
                                            <a href="academics.html">Academics</a>
                                            <ul>
                                                <li><a href="departments.html">Departments</a></li>
                                                <li> <a href="centres-initiatives.html">Centers and Initiatives</a></li>
                                                <li> <a href="office-rRegistrar.html">Office of the Registrar</a></li>
                                                <li> <a href="fees-payment.html">Fees and Payment</a></li>
                                                <li> <a href="programs.html">Programs</a></li>
                                                <li> <a href="policies-procedures.html">Policies and Procedures</a></li>
                                                <li> <a href="residential-campus.html">Residential Campus</a></li>
                                                <li> <a href="teaching-research.html">Teaching and Research</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-sub"><a href="#">Admissions</a>
                                            <ul>
                                                <li><a href="undergraduate-admission.html">Undergraduate Admission</a>
                                                </li>
                                                <li><a href="postgraduate-admission.html">Postgraduate Admission</a>
                                                </li>
                                                <li><a href="scholarship-financial-aid.html">Scholarship / Financial
                                                        Aid</a></li>
                                                <li><a href="international-scholarship-offers.html">International
                                                        Scholarship Offers</a></li>
                                                <li><a href="waiver-postgraduate-programs.html">Waiver for Postgraduate
                                                        Programs</a></li>
                                                <li><a href="freshman-enrollment.html">Freshman Enrollment</a></li>
                                                <li><a href="tuition-fees.html">Tuition and Fees</a></li>
                                                <li><a href="faq.html">FAQs</a></li>
                                            </ul>
                                        </li>
                                        <li class="has-sub">
                                            <a href="#">News & Notices</a>
                                            <ul>
                                                <li><a href="announcements.html">Announcements</a></li>
                                                <li><a href="news.html">News</a></li>
                                                <li><a href="iiustb-media.html">IIUSTB in Media</a></li>
                                                <li><a href="events.html">Events</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 text-right d-none d-lg-block text-right text-xl-right">
                            <div class="login">
                                <ul>
                                    <li><a href="#" class="menu-tigger"><i class="fas fa-bars"></i></a></li>
                                    <li>
                                        <div class="second-header-btn">
                                            <a href="contact.html" class="btn">admission open</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- header-end -->


    <!-- offcanvas-area -->
    <div class="offcanvas-menu">
        <span class="menu-close"><i class="fas fa-times"></i></span>
        <form role="search" method="get" id="searchform" class="searchform" action="#">
            <input type="text" name="s" id="search" placeholder="Search">
            <button><i class="fa fa-search"></i></button>
        </form>
        <div id="cssmenu3" class="menu-one-page-menu-container">
            <ul class="menu">
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a
                        href="academic-calendar.html">Academic Calendar</a></li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a
                        href="teaching-research.html">Teaching & Research</a></li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a
                        href="conferences-workshops.html">Conferences & Workshops</a></li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="library.html">Library </a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="career-iiustb.html">Career
                        at IIUSTB</a></li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="iiustb-club.html">IIUSTB
                        Club</a></li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="faculty-staff.html">For
                        Faculty & Staff</a></li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="blog.html">Blog</a></li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
        <div id="cssmenu2" class="menu-one-page-menu-container">
            <ul id="menu-one-page-menu-12" class="menu">
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a
                        href="#home"><span>01774-709900</span></a></li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a
                        href="#howitwork"><span>iiustbbaipail@gmail.com </span></a></li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#howitwork"><span>Corporate
                            Office: Square Bhabon, 1/B, DIT Avenue, Motijheel C/A, Dhaka-1000 </span></a></li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#howitwork"><span>
                            Permanent Campus: Baipail, Ashulia, Dhaka-1349 </span></a></li>
            </ul>
        </div>
    </div>
    <div class="offcanvas-overly"></div>

    <!-- main-area -->
    <main>
        <!-- slider-area -->
        <section id="home" class="slider-area fix p-relative">

            <div class="slider-active slick-initialized slick-slider" style="background: #141b22;">
                <button type="button" class="slick-prev slick-arrow" style=""><i class="fas fa-angle-left"></i></button>
                <div class="slick-list draggable">
                    <div class="slick-track" style="opacity: 1; width: 3806px;">
                        <div class="single-slider slider-bg slick-slide"
                            style="background-image: url('/frontend/img/slider_bg_01.png'); background-size: cover; width: 1903px; position: relative; left: 0px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms ease 0s;"
                            data-slick-index="0" aria-hidden="true" tabindex="-1">
                            <div class="container">
                                <div class="row">

                                    <div class="col-lg-7 col-md-7">
                                        <div class="slider-content s-slider-content mt-130">
                                            <h5 data-animation="fadeInUp" data-delay=".4s"
                                                style="animation-delay: 0.4s;" class="">welcome To International Islami
                                                University of Science and Technology Bangladesh </h5>
                                            <h2 data-animation="fadeInUp" data-delay=".4s"
                                                style="animation-delay: 0.4s;" class="">Education is the best key
                                                success in life</h2>
                                            <p data-animation="fadeInUp" data-delay=".6s" style="animation-delay: 0.6s;"
                                                class="">Donec vitae libero non enim placerat eleifend aliquam erat
                                                volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl
                                                tristique, commodo gravida lectus non.</p>

                                            <div class="slider-btn mt-30">
                                                <a href="about.html" class="btn ss-btn mr-15"
                                                    data-animation="fadeInLeft" data-delay=".4s"
                                                    style="animation-delay: 0.4s;" tabindex="-1">Discover More <i
                                                        class="fa fa-long-arrow-right"></i></a>
                                                <a href="contact.html" class="btn ss-btn active"
                                                    data-animation="fadeInLeft" data-delay=".4s"
                                                    style="animation-delay: 0.4s;" tabindex="-1">Contact Us <i
                                                        class="fa fa-long-arrow-right"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-5 p-relative">
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="single-slider slider-bg slick-slide slick-current slick-active"
                            style="background-image: url('/frontend/img/slider_bg_01.png'); background-size: cover; width: 1903px; position: relative; left: -1903px; top: 0px; z-index: 999; opacity: 1;"
                            data-slick-index="1" aria-hidden="false" tabindex="0">
                            <div class="container">
                                <div class="row">

                                    <div class="col-lg-7 col-md-7">
                                        <div class="slider-content s-slider-content mt-130">
                                            <h5 data-animation="fadeInUp" data-delay=".4s"
                                                style="animation-delay: 0.4s;" class="">welcome To International Islami
                                                University of Science and Technology Bangladesh </h5>
                                            <h2 data-animation="fadeInUp" data-delay=".4s"
                                                style="animation-delay: 0.4s;" class="">Education is the best key
                                                success in life</h2>
                                            <p data-animation="fadeInUp" data-delay=".6s" style="animation-delay: 0.6s;"
                                                class="">Donec vitae libero non enim placerat eleifend aliquam erat
                                                volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl
                                                tristique, commodo gravida lectus non.</p>

                                            <div class="slider-btn mt-30">
                                                <a href="about.html" class="btn ss-btn mr-15"
                                                    data-animation="fadeInLeft" data-delay=".4s" tabindex="0"
                                                    style="animation-delay: 0.4s;">Discover More <i
                                                        class="fa fa-long-arrow-right"></i></a>
                                                <a href="contact.html" class="btn ss-btn active"
                                                    data-animation="fadeInLeft" data-delay=".4s" tabindex="0"
                                                    style="animation-delay: 0.4s;">Contact Us <i
                                                        class="fa fa-long-arrow-right"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-5 p-relative">
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <button type="button" class="slick-next slick-arrow" style=""><i
                        class="fas fa-angle-right"></i></button>
            </div>


        </section>
        <!-- slider-area-end -->
        <!-- service-area -->
        <section class="service-details-two p-relative">
            <div class="container">
                <div class="row">

                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="services-box07">

                            <div class="sr-contner">
                                <div class="icon">
                                    <img src="/frontend/images/sve-icon4.png" alt="icon01">
                                </div>
                                <div class="text">
                                    <h5><a href="about.html">Education Services</a></h5>
                                    <p>Seamlessly visualize quality ellectual capital without superior collaboration and
                                        idea sharing listically</p>
                                    <a href="about.html">Read More <i class="fa fa-long-arrow-right"></i></a>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="services-box07 active">
                            <div class="sr-contner">
                                <div class="icon">
                                    <img src="/frontend/images/sve-icon5.png" alt="icon01">
                                </div>
                                <div class="text">
                                    <h5><a href="about.html">International Hubs</a></h5>
                                    <p>Seamlessly visualize quality ellectual capital without superior collaboration and
                                        idea sharing listically</p>
                                    <a href="about.html">Read More <i class="fa fa-long-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="services-box07">
                            <div class="sr-contner">
                                <div class="icon">
                                    <img src="/frontend/images/sve-icon6.png" alt="icon01">
                                </div>
                                <div class="text">
                                    <h5><a href="about.html">Bachelor’s and Master’s</a></h5>
                                    <p>Seamlessly visualize quality ellectual capital without superior collaboration and
                                        idea sharing listically</p>
                                    <a href="about.html">Read More <i class="fa fa-long-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- service-details2-area-end -->

        <!-- about-area -->
        <section class="about-area about-p pt-120 pb-120 p-relative fix" style="background: #eff7ff;">
            <div class="animations-02"><img src="/frontend/images/an-img-02.png" alt="contact-bg-an-01">
            </div>
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft"
                            data-delay=".4s" style="visibility: hidden; animation-name: none;">
                            <img src="/frontend/img/mission.jpg" alt="img">
                            <!--<div class="about-text second-about">
                                    <span>25 <sub>+</sub></span>
                                    <p>Years of Experience</p>
                                </div>-->
                        </div>

                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="about-content s-about-content pl-15 wow fadeInRight  animated"
                            data-animation="fadeInRight" data-delay=".4s"
                            style="visibility: hidden; animation-name: none;">
                            <div class="about-title second-title pb-25">
                                <h5><i class="fas fa-graduation-cap"></i> About Our University</h5>
                                <h2>A Few Words About the University</h2>
                            </div>
                            <p class="txt-clr">The International Islami University of Science and Technology Bangladesh
                                (IIUSTB) is going to be established as a new
                                generation digital private University in Bangladesh having full commitment and
                                dedication for standard, quality, sincerity
                                and excellence. The proposed University will act as a torch-bearer for fulfilling the
                                long felt-desire, mission & vision of
                                the Trustees. It shall be a “Centre of Excellence” for higher education, research-based
                                education which will offer
                                practical need-based education, application-oriented curricula and syllabi. This
                                University is determined to provide
                                intellectual leadership to the society through creation of new knowledge and by
                                developing meaningful collaboration with
                                well established educational institution both home and abroad.</p>

                            <div class="slider-btn mt-20">
                                <a href="about.html" class="btn ss-btn smoth-scroll">Read More <i
                                        class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- about-area-end -->
        <!-- courses-area -->
        <section class="courses pt-120 pb-120 p-relative fix">
            <div class="animations-01"><img src="/frontend/images/an-img-03.png" alt="an-img-01"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 p-relative">
                        <div class="section-title center-align mb-50 wow fadeInDown animated"
                            data-animation="fadeInDown" data-delay=".4s"
                            style="visibility: hidden; animation-name: none;">
                            <h5><i class="fas fa-graduation-cap"></i> Our Departments</h5>
                            <h2>
                                Graduate Programs
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row class-active slick-initialized slick-slider"><button type="button"
                        class="slick-prev slick-arrow" style=""><i class="fas fa-angle-left"></i></button>
                    <div class="slick-list draggable">
                        <div class="slick-track"
                            style="opacity: 1; width: 6640px; transform: translate3d(-1660px, 0px, 0px);">
                            <div class="col-lg-4 col-md-6 slick-slide slick-cloned" data-slick-index="-4" id=""
                                aria-hidden="true" style="width: 415px;" tabindex="-1">
                                <div class="courses-item mb-30 hover-zoomin">
                                    <div class="thumb fix">
                                        <a href="single-courses.html" tabindex="-1"><img
                                                src="/frontend/images/couress-img-3.jpg"
                                                alt="contact-bg-an-01"></a>
                                    </div>
                                    <div class="courses-content">
                                        <div class="cat"><i class="fas fa-graduation-cap"></i> </div>
                                        <h3><a href="single-courses.html" tabindex="-1"> Business Media</a></h3>
                                        <p>Seamlessly visualize quality ellectual capital without superior collaboration
                                            and idea tically</p>
                                        <a href="single-courses.html" class="readmore" tabindex="-1">Read More <i
                                                class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                    <div class="icon">
                                        <img src="/frontend/images/cou-icon.png" alt="img">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 slick-slide slick-cloned" data-slick-index="-3" id=""
                                aria-hidden="true" style="width: 415px;" tabindex="-1">
                                <div class="courses-item mb-30 hover-zoomin">
                                    <div class="thumb fix">
                                        <a href="single-courses.html" tabindex="-1"><img
                                                src="/frontend/images/couress-img-4.jpg"
                                                alt="contact-bg-an-01"></a>
                                    </div>
                                    <div class="courses-content">
                                        <div class="cat"><i class="fas fa-graduation-cap"></i> Public</div>
                                        <h3><a href="single-courses.html" tabindex="-1"> Public Administration </a></h3>
                                        <p>Seamlessly visualize quality ellectual capital without superior collaboration
                                            and idea tically</p>
                                        <a href="single-courses.html" class="readmore" tabindex="-1">Read More <i
                                                class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                    <div class="icon">
                                        <img src="/frontend/images/cou-icon.png" alt="img">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 slick-slide slick-cloned" data-slick-index="-2" id=""
                                aria-hidden="true" style="width: 415px;" tabindex="-1">
                                <div class="courses-item mb-30 hover-zoomin">
                                    <div class="thumb fix">
                                        <a href="single-courses.html" tabindex="-1"><img
                                                src="/frontend/images/couress-img-5.jpg"
                                                alt="contact-bg-an-01"></a>
                                    </div>
                                    <div class="courses-content">
                                        <div class="cat"><i class="fas fa-graduation-cap"></i> Sciences</div>
                                        <h3><a href="single-courses.html" tabindex="-1"> Biotechnology</a></h3>
                                        <p>Seamlessly visualize quality ellectual capital without superior collaboration
                                            and idea tically</p>
                                        <a href="single-courses.html" class="readmore" tabindex="-1">Read More <i
                                                class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                    <div class="icon">
                                        <img src="/frontend/images/cou-icon.png" alt="img">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 slick-slide slick-cloned" data-slick-index="-1" id=""
                                aria-hidden="true" style="width: 415px;" tabindex="-1">
                                <div class="courses-item mb-30 hover-zoomin">
                                    <div class="thumb fix">
                                        <a href="single-courses.html" tabindex="-1"><img
                                                src="/frontend/images/couress-img-6.jpg"
                                                alt="contact-bg-an-01"></a>
                                    </div>
                                    <div class="courses-content">
                                        <div class="cat"><i class="fas fa-graduation-cap"></i> Finance</div>
                                        <h3><a href="single-courses.html" tabindex="-1"> Corporate Finance</a></h3>
                                        <p>Seamlessly visualize quality ellectual capital without superior collaboration
                                            and idea tically</p>
                                        <a href="single-courses.html" class="readmore" tabindex="-1">Read More <i
                                                class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                    <div class="icon">
                                        <img src="/frontend/images/cou-icon.png" alt="img">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 slick-slide slick-current slick-active" data-slick-index="0"
                                aria-hidden="false" style="width: 415px;" tabindex="0">
                                <div class="courses-item mb-30 hover-zoomin">
                                    <div class="thumb fix">
                                        <a href="single-courses.html" tabindex="0"><img
                                                src="/frontend/images/islamicstudies.jpg"
                                                alt="contact-bg-an-01" style="height: 217px !important"></a>
                                    </div>
                                    <div class="courses-content">
                                        <div class="cat"><i class="fas fa-graduation-cap"></i> Religious Science</div>
                                        <h3><a href="single-courses.html" tabindex="0"> BA (Hons) in Al Quran and
                                                Islamic Studies</a></h3>
                                        <p>Seamlessly visualize quality ellectual capital without superior collaboration
                                            and idea tically</p>
                                        <a href="#" class="readmore" tabindex="0">Read More <i
                                                class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                    <div class="icon">
                                        <img src="/frontend/images/cou-icon.png" alt="img">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 slick-slide slick-active" data-slick-index="1"
                                aria-hidden="false" style="width: 415px;" tabindex="0">
                                <div class="courses-item mb-30 hover-zoomin">
                                    <div class="thumb fix">
                                        <a href="single-courses.html" tabindex="0"><img
                                                src="/frontend/images/couress-img-2.jpg"
                                                alt="contact-bg-an-01"></a>
                                    </div>
                                    <div class="courses-content">
                                        <div class="cat"><i class="fas fa-graduation-cap"></i> Science and Engineering
                                        </div>
                                        <h3><a href="single-courses.html" tabindex="0"> B. Sc in Computer Science and
                                                Engineering</a></h3>
                                        <p>Seamlessly visualize quality ellectual capital without superior collaboration
                                            and idea tically</p>
                                        <a href="#" class="readmore" tabindex="0">Read More <i
                                                class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                    <div class="icon">
                                        <img src="/frontend/images/cou-icon.png" alt="img">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 slick-slide slick-active" data-slick-index="2"
                                aria-hidden="false" style="width: 415px;" tabindex="0">
                                <div class="courses-item mb-30 hover-zoomin">
                                    <div class="thumb fix">
                                        <a href="single-courses.html" tabindex="0"><img
                                                src="/frontend/images/couress-img-3.jpg"
                                                alt="contact-bg-an-01"></a>
                                    </div>
                                    <div class="courses-content">
                                        <div class="cat"><i class="fas fa-graduation-cap"></i> Science and Engineering
                                        </div>
                                        <h3><a href="single-courses.html" tabindex="0"> B. Sc in Electrical and
                                                Electronic Engineering</a></h3>
                                        <p>Seamlessly visualize quality ellectual capital without superior collaboration
                                            and idea tically</p>
                                        <a href="#" class="readmore" tabindex="0">Read More <i
                                                class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                    <div class="icon">
                                        <img src="/frontend/images/cou-icon.png" alt="img">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 slick-slide slick-active" data-slick-index="3"
                                aria-hidden="false" style="width: 415px;" tabindex="0">
                                <div class="courses-item mb-30 hover-zoomin">
                                    <div class="thumb fix">
                                        <a href="single-courses.html" tabindex="0"><img
                                                src="/frontend/images/couress-img-4.jpg"
                                                alt="contact-bg-an-01"></a>
                                    </div>
                                    <div class="courses-content">
                                        <div class="cat"><i class="fas fa-graduation-cap"></i> Business Administration
                                        </div>
                                        <h3><a href="single-courses.html" tabindex="0"> Bachelor of Business
                                                Administration </a></h3>
                                        <p>Seamlessly visualize quality ellectual capital without superior collaboration
                                            and idea tically</p>
                                        <a href="#" class="readmore" tabindex="0">Read More <i
                                                class="fa fa-long-arrow-right"></i></a>
                                    </div>
                                    <div class="icon">
                                        <img src="/frontend/images/cou-icon.png" alt="img">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>







                    <button type="button" class="slick-next slick-arrow" style=""><i
                            class="fas fa-angle-right"></i></button>
                </div>


            </div>
        </section>
        <!-- courses-area -->
        <!-- steps-area -->
        <section class="steps-area p-relative" style="background-color: #032e3f;">
            <div class="animations-10"><img src="/frontend/images/an-img-10.png" alt="an-img-01"></div>
            <div class="container">

                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="section-title mb-35 wow fadeInDown animated" data-animation="fadeInDown"
                            data-delay=".4s" style="visibility: hidden; animation-name: none;">
                            <h2>Our Best Features</h2>
                            <p>Special wedding garments are often worn, and the ceremony is sometimes followed by a
                                wedding reception. Music, poetry.</p>
                        </div>
                        <ul class="pr-20">
                            <li>
                                <div class="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s"
                                    style="visibility: hidden; animation-name: none;">
                                    <div class="dnumber">
                                        <div class="date-box"><img src="/frontend/images/fea-icon01.png"
                                                alt="icon"></div>
                                    </div>
                                    <div class="text">
                                        <h3>Skilled Teachers</h3>
                                        <p>Special wedding garments are often worn, and the ceremony is sttimes followed
                                            by a wedding reception. Music, poetry, prayers, or readings from.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s"
                                    style="visibility: hidden; animation-name: none;">
                                    <div class="dnumber">
                                        <div class="date-box"><img src="/frontend/images/fea-icon02.png"
                                                alt="icon"></div>
                                    </div>
                                    <div class="text">
                                        <h3>Affordable Courses</h3>
                                        <p>Special wedding garments are often worn, and the ceremony is sttimes followed
                                            by a wedding reception. Music, poetry, prayers, or readings from.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s"
                                    style="visibility: hidden; animation-name: none;">
                                    <div class="dnumber">
                                        <div class="date-box"><img src="/frontend/images/fea-icon03.png"
                                                alt="icon"></div>
                                    </div>
                                    <div class="text">
                                        <h3>Efficient &amp; Flexible</h3>
                                        <p>Special wedding garments are often worn, and the ceremony is sttimes followed
                                            by a wedding reception. Music, poetry, prayers, or readings from.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="step-img wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s"
                            style="visibility: hidden; animation-name: none;">
                            <img src="/frontend/img/hijabi-student.png" alt="class image">
                        </div>

                    </div>



                </div>

            </div>
        </section>
        <!-- steps-area-end -->
        <!-- event-area -->
        <section class="event pt-120 pb-90 p-relative fix">
            <div class="animations-06"><img src="/frontend/images/an-img-06.png" alt="an-img-01"></div>
            <div class="animations-07"><img src="/frontend/images/an-img-07.png" alt="contact-bg-an-01">
            </div>
            <div class="animations-08"><img src="/frontend/images/an-img-08.png" alt="contact-bg-an-01">
            </div>
            <div class="animations-09"><img src="/frontend/images/an-img-09.png" alt="contact-bg-an-01">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 p-relative">
                        <div class="section-title center-align mb-50 text-center wow fadeInDown animated"
                            data-animation="fadeInDown" data-delay=".4s"
                            style="visibility: hidden; animation-name: none;">
                            <h5><i class="fas fa-graduation-cap"></i> Our Events</h5>
                            <h2>
                                Upcoming Events
                            </h2>

                        </div>
                    </div>

                </div>
                <div class="row">

                    <div class="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s"
                        style="visibility: hidden; animation-name: none;">
                        <div class="event-item mb-30 hover-zoomin">
                            <div class="thumb">
                                <a href="single-event.html"><img src="/frontend/images/evn-img-1.jpg"
                                        alt="contact-bg-an-01"></a>
                            </div>
                            <div class="event-content">
                                <div class="date"><strong>18</strong> March, 2023</div>
                                <h3><a href="single-event.html"> Basic UI &amp; UX Design for new development</a></h3>
                                <p>Seamlessly visualize quality ellectual capital without superior collaboration and
                                    idea tically</p>
                                <div class="time">3:30 pm - 4:30 pm <i class="fa fa-long-arrow-right"></i>
                                    <strong>United Kingdom</strong></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s"
                        style="visibility: hidden; animation-name: none;">
                        <div class="event-item mb-30 hover-zoomin">
                            <div class="thumb">
                                <a href="single-event.html"><img src="/frontend/images/evn-img-2.jpg"
                                        alt="contact-bg-an-01" style="height: 278px !important"></a>
                            </div>
                            <div class="event-content">
                                <div class="date"><strong>20</strong> March, 2023</div>
                                <h3><a href="single-event.html">Digital Education Market Briefing: Minnesota 2023</a>
                                </h3>
                                <p>Seamlessly visualize quality ellectual capital without superior collaboration and
                                    idea tically</p>
                                <div class="time">3:30 pm - 4:30 pm <i class="fa fa-long-arrow-right"></i>
                                    <strong>United Kingdom</strong></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s"
                        style="visibility: hidden; animation-name: none;">
                        <div class="event-item mb-30 hover-zoomin">
                            <div class="thumb">
                                <a href="single-event.html"><img src="/frontend/images/evn-img-3.jpg"
                                        alt="contact-bg-an-01"></a>
                            </div>
                            <div class="event-content">
                                <div class="date"><strong>22</strong> March, 2023</div>
                                <h3><a href="single-event.html"> Learning Network Webinars for Music Teachers</a></h3>
                                <p>Seamlessly visualize quality ellectual capital without superior collaboration and
                                    idea tically</p>
                                <div class="time">3:30 pm - 4:30 pm <i class="fa fa-long-arrow-right"></i>
                                    <strong>United Kingdom</strong></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s"
                        style="visibility: hidden; animation-name: none;">
                        <div class="event-item mb-30 hover-zoomin">
                            <div class="thumb">
                                <a href="single-event.html"><img src="/frontend/images/evn-img-4.jpg"
                                        alt="contact-bg-an-01"></a>
                            </div>
                            <div class="event-content">
                                <div class="date"><strong>22</strong> March, 2023</div>
                                <h3><a href="single-event.html"> Next-Gen Higher Education Students Have Arrived?</a>
                                </h3>
                                <p>Seamlessly visualize quality ellectual capital without superior collaboration and
                                    idea tically</p>
                                <div class="time">3:30 pm - 4:30 pm <i class="fa fa-long-arrow-right"></i>
                                    <strong>United Kingdom</strong></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s"
                        style="visibility: hidden; animation-name: none;">
                        <div class="event-item mb-30 hover-zoomin">
                            <div class="thumb">
                                <a href="single-event.html"><img src="/frontend/images/evn-img-5.jpg"
                                        alt="contact-bg-an-01"></a>
                            </div>
                            <div class="event-content">
                                <div class="date"><strong>24</strong> March, 2023</div>
                                <h3><a href="single-event.html"> Digital Art &amp; 3D Model – a future for film
                                        company</a></h3>
                                <p>Seamlessly visualize quality ellectual capital without superior collaboration and
                                    idea tically</p>
                                <div class="time">3:30 pm - 4:30 pm <i class="fa fa-long-arrow-right"></i>
                                    <strong>United Kingdom</strong></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s"
                        style="visibility: hidden; animation-name: none;">
                        <div class="event-item mb-30 hover-zoomin">
                            <div class="thumb">
                                <a href="single-event.html"><img src="/frontend/images/evn-img-1.jpg"
                                        alt="contact-bg-an-01"></a>
                            </div>
                            <div class="event-content">
                                <div class="date"><strong>30</strong> March, 2023</div>
                                <h3><a href="single-event.html"> Conscious Discipline Summer Institute</a></h3>
                                <p>Seamlessly visualize quality ellectual capital without superior collaboration and
                                    idea tically</p>
                                <div class="time">3:30 pm - 4:30 pm <i class="fa fa-long-arrow-right"></i>
                                    <strong>United Kingdom</strong></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
        <!-- courses-area -->
        <!-- cta-area -->
        <section class="cta-area cta-bg pt-50 pb-50"
            style="background-image:url(/frontend/images/cta_bg02.png)">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="section-title cta-title wow fadeInLeft animated"
                            data-animation="fadeInDown animated" data-delay=".2s"
                            style="visibility: hidden; animation-name: none;">
                            <h2>Scholarship Programs</h2>
                            <p>At Estuidar University, we prepare you to launch your career by providing a supportive,
                                creative, and professional environment from which to learn practical skills and build a
                                network of industry contacts.</p>
                        </div>

                    </div>
                    <div class="col-lg-4 text-right">
                        <div class="cta-btn s-cta-btn wow fadeInRight animated mt-30"
                            data-animation="fadeInDown animated" data-delay=".2s"
                            style="visibility: hidden; animation-name: none;">
                            <a href="about.html" class="btn ss-btn smoth-scroll">Financial Aid <i
                                    class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- cta-area-end -->
        <!-- frequently-area -->
        <section class="faq-area pt-120 pb-120 p-relative fix">
            <div class="animations-10"><img src="/frontend/images/an-img-04.png" alt="an-img-01"></div>
            <div class="animations-08"><img src="/frontend/images/an-img-05.png" alt="contact-bg-an-01">
            </div>
            <div class="container">
                <div class="row justify-content-center  align-items-center">

                    <div class="col-lg-7">
                        <div class="section-title wow fadeInLeft animated" data-animation="fadeInDown animated"
                            data-delay=".2s" style="visibility: hidden; animation-name: none;">
                            <h2>News & Notice</h2>
                        </div>
                        <div class="faq-wrap mt-30 pr-30 wow fadeInUp animated" data-animation="fadeInUp"
                            data-delay=".4s" style="visibility: hidden; animation-name: none;">
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h2 class="mb-0">
                                            <button class="faq-btn" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree">
                                                01. Is your university approved by the Govt and UGC?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" class="collapse show" data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            Yes, approved by the Govt and UGC.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h2 class="mb-0">
                                            <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne">
                                                02. What is the name of the Chairman of your university?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" class="collapse" data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            Kazi Akram Uddin Ahmed. <br>
                                            Present Chairman, Standard Bank Limited, Past President, FBCCI, Past
                                            International Director, Lions Club International

                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h2 class="mb-0">
                                            <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo">
                                                03. Where is the location of your university?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" class="collapse" data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            Baipile, Ashulia, Dhaka. South side of EPZ and 700 yards north of Bypile Bus Stop.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <h2 class="mb-0">
                                            <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour">
                                                04. How many programs are running in your university?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" class="collapse" data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            Six. Namely, 1. Al Quran and Islamic Studies (Hons), 2. Al Quran and Islamic Studies (Masters), 3. Electrical and Electronic Engineering (Hons), 4. Computer Science and Engineering (Hons), 5. Bachelor of Business Administration, 6. Masters of Business Administration.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <h2 class="mb-0">
                                            <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive">
                                                05. Is your own campus?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFive" class="collapse" data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            Yes, own. Established on nine acres (27 bighas) of its own land.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <h2 class="mb-0">
                                            <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix">
                                                06. How much does it cost to study Honors in Al Quran and Islamic Studies?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseSix" class="collapse" data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            Total 2,16,000. There are discounts beyond that.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <h2 class="mb-0">
                                            <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseSeven">
                                                07. How much does a Masters in Al Quran and Islamic Studies cost?
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseSeven" class="collapse" data-bs-parent="#accordionExample">
                                        <div class="card-body">
                                            A total of 43,400. There are discounts beyond that.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="col-lg-5">
                        <div class="contact-bg02">
                            <div class="section-title wow fadeInDown animated" data-animation="fadeInDown"
                                data-delay=".4s" style="visibility: hidden; animation-name: none;">
                                <h2>
                                    Make An Contact
                                </h2>

                            </div>

                            <form action="mail.php" method="post" class="contact-form mt-30 wow fadeInUp animated"
                                data-animation="fadeInUp" data-delay=".4s"
                                style="visibility: hidden; animation-name: none;">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn" name="firstn" placeholder="First Name"
                                                required="">
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" id="email" name="email" placeholder="Email" required="">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" id="phone" name="phone" placeholder="Phone No."
                                                required="">
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-message mb-30">
                                            <textarea name="message" id="message" cols="30" rows="10"
                                                placeholder="Write comments"></textarea>
                                        </div>
                                        <div class="slider-btn">
                                            <button class="btn ss-btn" data-animation="fadeInRight"
                                                data-delay=".8s"><span>Submit Now</span> <i
                                                    class="fa fa-long-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- frequently-area-end -->
        <!-- video-area -->
        <section class="cta-area cta-bg pt-160 pb-160"
            style="background-image:url(/frontend/images/cta_bg.png)">
            <div class="container">
                <div class="row justify-content-center  align-items-center">
                    <div class="col-xl-6 col-lg-6 col-md-12">
                        <div class="section-title cta-title video-title wow fadeInLeft animated"
                            data-animation="fadeInDown animated" data-delay=".2s"
                            style="visibility: hidden; animation-name: none;">
                            <h2> We're <span>IIUSTB </span> &amp; We're Diffirent</h2>
                            <p>Our community is being called to reimagine the future. As the only university where a
                                renowned design school colleges, </p>
                        </div>

                    </div>
                    <div class="col-lg-2 col-md-2">
                    </div>
                    <div class="col-lg-4">

                        <div class="s-video-content">
                            <a href="https://www.youtube.com/watch?v=gyGsPlt06bo" class="popup-video mb-50"><img
                                    src="/frontend/images/play-button.png" alt="circle_right"></a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- video-area-end -->
        <!-- testimonial-area -->
        <section id="notice-section" class="testimonial-area pt-120 pb-115 p-relative fix">
            <div class="animations-01"><img src="/frontend/images/an-img-03.png" alt="an-img-01"></div>
            <div class="animations-02"><img src="/frontend/images/an-img-04.png" alt="contact-bg-an-01">
            </div>
            <div class="container">
                <div class="row">


                    <div class="col-md-6 wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s"
                        style="visibility: visible; animation-name: fadeInLeft;">
                        <div class="notice-carousel-wrap">
                            <div class="block-title title1">
                                <h2><span><span>Announcements</span></span></h2>
                            </div>

                            <ul class="notice-carousel slick-initialized slick-slider">


                                <div aria-live="polite" class="slick-list draggable">
                                    <div class="slick-track"
                                        style="opacity: 1; width: 2775px; transform: translate3d(-555px, 0px, 0px);"
                                        role="listbox">
                                        <li class="aos-animate slick-slide slick-cloned" data-aos-duration="400"
                                            data-aos-delay="400" data-slick-index="-1" aria-hidden="true"
                                            style="width: 555px;" tabindex="-1">
                                            <div class="notice-item">
                                                <div class="date">
                                                    <div>
                                                        12 <span>Jul 2023</span>
                                                    </div>
                                                </div>
                                                <div class="desc">
                                                    <p>Extension of Time- Call for Research Proposal- Round 16</p>
                                                    <a href="/notice-details/extension-time-call-research-proposal-round-16"
                                                        tabindex="-1">Read More</a>
                                                </div>
                                            </div>

                                        </li>
                                        <li class="aos-animate slick-slide slick-current slick-active"
                                            data-aos-duration="400" data-aos-delay="400" data-slick-index="0"
                                            aria-hidden="false" style="width: 555px;" tabindex="-1" role="option"
                                            aria-describedby="slick-slide00">
                                            <div class="notice-item">
                                                <div class="date">
                                                    <div>
                                                        04 <span>Sep 2023</span>
                                                    </div>
                                                </div>
                                                <div class="desc">
                                                    <p>Online Application for Graduation 23rd Convocation 2024</p>
                                                    <a href="/notice-details/online-application-graduation-23rd-convocation-2024-2"
                                                        tabindex="0">Read More</a>
                                                </div>
                                            </div>
                                            <div class="notice-item">
                                                <div class="date">
                                                    <div>
                                                        30 <span>Aug 2023</span>
                                                    </div>
                                                </div>
                                                <div class="desc">
                                                    <p>Submission of Admission Forms: Fall 2023</p>
                                                    <a href="/notice-details/submission-admission-forms-fall-2023"
                                                        tabindex="0">Read More</a>
                                                </div>
                                            </div>
                                            <div class="notice-item">
                                                <div class="date">
                                                    <div>
                                                        28 <span>Aug 2023</span>
                                                    </div>
                                                </div>
                                                <div class="desc">
                                                    <p>Dean’s List: Summer Semester 2023</p>
                                                    <a href="/notice-details/deans-list-summer-semester-2023"
                                                        tabindex="0">Read More</a>
                                                </div>
                                            </div>
                                            <div class="notice-item">
                                                <div class="date">
                                                    <div>
                                                        21 <span>Aug 2023</span>
                                                    </div>
                                                </div>
                                                <div class="desc">
                                                    <p>Online Advising of Courses for Fall Semester 2023 (Revised
                                                        Notice)</p>
                                                    <a href="/notice-details/online-advising-courses-fall-semester-2023"
                                                        tabindex="0">Read More</a>
                                                </div>
                                            </div>
                                            <div class="notice-item">
                                                <div class="date">
                                                    <div>
                                                        20 <span>Aug 2023</span>
                                                    </div>
                                                </div>
                                                <div class="desc">
                                                    <p>Online Faculty Evaluation: Summer 2023</p>
                                                    <a href="/notice-details/online-faculty-evaluation-summer-2023"
                                                        tabindex="0">Read More</a>
                                                </div>
                                            </div>
                                        </li>




                                    </div>
                                </div>



                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 wow fadeInRight animated" data-animation="fadeInRight" data-delay=".4s"
                        style="visibility: visible; animation-name: fadeInRight;">
                        <div class="notice-carousel-wrap">
                            <div class="block-title title1">
                                <h2><span><span>Academic Dates</span></span></h2>

                            </div>
                            <div class="section-calender">
                                <div class="calender-item clearfix">
                                    <div class="left calender">
                                        <div class="month color-white"> June</div>
                                        <div class="date"> 4</div>
                                    </div>
                                    <div class="calender-content">
                                        <div class="avenir-heavey title">
                                            June 04, 2023: First Day of Classes
                                        </div>

                                    </div>
                                </div>
                                <div class="calender-item clearfix">
                                    <div class="left calender">
                                        <div class="month color-white"> July</div>
                                        <div class="date"> 12</div>
                                    </div>
                                    <div class="calender-content">
                                        <div class="avenir-heavey title">
                                            July 12-18, 2023: Mid Term I Examinations
                                        </div>
                                        <!--<div>
                                    July 2nd, 2019 - 8:15am to July 11th, 2019 - 5:00pm
                                </div>-->
                                    </div>
                                </div>
                                <div class="calender-item clearfix">
                                    <div class="left calender">
                                        <div class="month color-white"> Aug</div>
                                        <div class="date"> 09</div>
                                    </div>
                                    <div class="calender-content">
                                        <div class="avenir-heavey title">
                                            August 09-14, 2023: Mid-Term II Examinations
                                        </div>
                                        <!--<div>
                                    July 2nd, 2019 - 8:15am to July 11th, 2019 - 5:00pm
                                </div>-->
                                    </div>
                                </div>
                                <div class="calender-item clearfix">
                                    <div class="left calender">
                                        <div class="month color-white"> Sept</div>
                                        <div class="date"> 02</div>
                                    </div>
                                    <div class="calender-content">
                                        <div class="avenir-heavey title">
                                            September 02, 2023: Admission Test for Fall 2023
                                        </div>
                                        <!--<div>
                                    July 2nd, 2019 - 8:15am to July 11th, 2019 - 5:00pm
                                </div>-->
                                    </div>
                                </div>
                                <div class="calender-item clearfix">
                                    <div class="left calender">
                                        <div class="month color-white"> Sept</div>
                                        <div class="date"> 10</div>
                                    </div>
                                    <div class="calender-content">
                                        <div class="avenir-heavey title">
                                            September 10-14, 2023: Final Examinations
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- testimonial-area-end -->
        <!-- search-area -->
        <section class="search-area pt-120 pb-120 p-relative fix"
            style="background-image:url(/frontend/images/search_bg.png);  background-position: center center; background-repeat: no-repeat; background-size: cover;">
            <div class="animations-10"><img src="/frontend/images/an-img-04.png" alt="an-img-01"></div>
            <div class="animations-08"><img src="/frontend/images/an-img-05.png" alt="contact-bg-an-01">
            </div>
            <div class="container">
                <div class="row justify-content-center  align-items-center">
                    <div class="col-lg-8">
                        <div class="contact-bg">
                            <div class="section-title wow fadeInDown animated" data-animation="fadeInDown"
                                data-delay=".4s" style="visibility: hidden; animation-name: none;">
                                <h2>
                                    Search For Departments
                                </h2>
                                <p>Our community is being called to reimagine the future. As the only university where a
                                    renowned design school comes together with premier colleges, we are making learning
                                    more relevant and transformational.</p>
                            </div>

                            <form action="mail.php" method="post" class="contact-form mt-30 wow fadeInUp animated"
                                data-animation="fadeInUp" data-delay=".4s"
                                style="visibility: hidden; animation-name: none;">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" id="firstn2" name="firstn" placeholder="First Name"
                                                required="">
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" id="email3" name="email" placeholder="Email" required="">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="contact-field p-relative c-option mb-20">
                                            <select name="instructor" id="instructor">
                                                <option value="instructore">Instructor</option>
                                                <option value="hot-stone-message">Hot Stone Message</option>
                                                <option value="facil-therophy">Facil &amp; Therophy</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="contact-field p-relative c-option mb-20">
                                            <select name="department" id="department">
                                                <option value="department">Department</option>
                                                <option value="hot-stone-message">Hot Stone Message</option>
                                                <option value="facil-therophy">Facil &amp; Therophy</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="contact-field p-relative c-option mb-20">
                                            <select name="campus" id="campus">
                                                <option value="campus">Campus</option>
                                                <option value="hot-stone-message">Hot Stone Message</option>
                                                <option value="facil-therophy">Facil &amp; Therophy</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="contact-field p-relative c-option mb-20">
                                            <select name="level" id="level">
                                                <option value="level">Level</option>
                                                <option value="hot-stone-message">Hot Stone Message</option>
                                                <option value="facil-therophy">Facil &amp; Therophy</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">

                                        <div class="slider-btn">
                                            <button class="btn ss-btn" data-animation="fadeInRight"
                                                data-delay=".8s">Search Courses Here <i
                                                    class="fa fa-long-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                    <div class="col-lg-4">
                    </div>
                </div>
            </div>
        </section>
        <!-- search-area-end -->
        <!-- admission-area -->
        <section class="about-area about-p pt-120 pb-120 p-relative fix"
            style="background-image:url(/frontend/images/admission_bg.png); background-repeat: no-repeat; background-position: top;">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft"
                            data-delay=".4s" style="visibility: hidden; animation-name: none;">
                            <img src="/frontend/img/hijab-student-second.jpg" alt="img">
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="about-content s-about-content pl-15 wow fadeInRight  animated"
                            data-animation="fadeInRight" data-delay=".4s"
                            style="visibility: hidden; animation-name: none;">
                            <div class="about-title second-title pb-25">
                                <h2>Admission &amp; Aid</h2>
                            </div>
                            <p class="txt-clr">Our community is being called to reimagine the future. As the only
                                university where a renowned design school comes together with premier colleges, we are
                                making learning more relevant and transformational.</p>
                            <p class="txt-clr">At Estuidar University, we prepare you to launch your career by pro
                                supportive, creative, and professional environment from which to learn practical skills,
                                build a network of industry contacts.</p>
                            <div class="slider-btn mt-20">
                                <a href="about.html" class="btn ss-btn smoth-scroll">Read More <i
                                        class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- admission-area-end -->
        <!-- brand-area -->
        <div class="brand-area pt-60 pb-60" style="background-color:#ff7350">
            <div class="container">
                <div class="row brand-active slick-initialized slick-slider">
                    <div class="slick-list draggable">
                        <div class="slick-track"
                            style="opacity: 1; width: 4620px; transform: translate3d(-2970px, 0px, 0px); transition: transform 1000ms ease 0s;">
                            <div class="col-xl-2 slick-slide slick-cloned" data-slick-index="-4" id=""
                                aria-hidden="true" style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo2.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide slick-cloned" data-slick-index="-3" id=""
                                aria-hidden="true" style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo3.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide slick-cloned" data-slick-index="-2" id=""
                                aria-hidden="true" style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo4.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide slick-cloned" data-slick-index="-1" id=""
                                aria-hidden="true" style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo5.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide slick-current slick-active" data-slick-index="0"
                                aria-hidden="false" style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo1.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide slick-active" data-slick-index="1" aria-hidden="false"
                                style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo2.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide slick-active" data-slick-index="2" aria-hidden="false"
                                style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo3.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide slick-active" data-slick-index="3" aria-hidden="false"
                                style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo4.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide" data-slick-index="4" aria-hidden="true"
                                style="width: 330px;" tabindex="0">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo5.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide slick-cloned" data-slick-index="5" id="" aria-hidden="true"
                                style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo1.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide slick-cloned" data-slick-index="6" id="" aria-hidden="true"
                                style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo2.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide slick-cloned" data-slick-index="7" id="" aria-hidden="true"
                                style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo3.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide slick-cloned" data-slick-index="8" id="" aria-hidden="true"
                                style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo4.png" alt="img">
                                </div>
                            </div>
                            <div class="col-xl-2 slick-slide slick-cloned" data-slick-index="9" id="" aria-hidden="true"
                                style="width: 330px;" tabindex="-1">
                                <div class="single-brand">
                                    <img src="/frontend/images/brand/b-logo5.png" alt="img">
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
        <!-- brand-area-end -->
        <!-- blog-area -->
        <section id="blog" class="blog-area p-relative fix pt-120 pb-90"
            style="background-image:url(/frontend/images/blog_bg.png); background-repeat: no-repeat; background-position: top;">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="section-title center-align mb-50 text-center wow fadeInDown animated"
                            data-animation="fadeInDown" data-delay=".4s"
                            style="visibility: hidden; animation-name: none;">
                            <h5><i class="fas fa-graduation-cap"></i> Our Blog</h5>
                            <h2>
                                Latest Blog &amp; News
                            </h2>

                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp"
                            data-delay=".4s" style="visibility: hidden; animation-name: none;">
                            <div class="blog-thumb2">
                                <a href="blog-details.html"><img src="/frontend/images/blog/inner_b1.jpg"
                                        alt="img"></a>
                                <div class="date-home">
                                    <i class="fas fa-calendar-alt"></i> 24th March 2023
                                </div>
                            </div>
                            <div class="blog-content2">
                                <div class="b-meta">
                                    <div class="meta-info">
                                        <ul>
                                            <li><i class="fas fa-user"></i> By Admin </li>
                                            <li><i class="fas fa-comments"></i> 3 Comments</li>
                                        </ul>
                                    </div>
                                </div>
                                <h4><a href="blog-details.html">Cras accumsan nulla nec lacus ultricies placerat.</a>
                                </h4>
                                <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec
                                    tristique orci.</p>
                                <div class="blog-btn"><a href="blog-details.html">Read More <i
                                            class="fa fa-long-arrow-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp"
                            data-delay=".4s" style="visibility: hidden; animation-name: none;">
                            <div class="blog-thumb2">
                                <a href="blog-details.html"><img src="/frontend/images/blog/inner_b2.jpg"
                                        alt="img"></a>
                                <div class="date-home">
                                    <i class="fas fa-calendar-alt"></i> 24th March 2023
                                </div>
                            </div>
                            <div class="blog-content2">

                                <div class="b-meta">
                                    <div class="meta-info">
                                        <ul>
                                            <li><i class="fas fa-user"></i> By Admin </li>
                                            <li><i class="fas fa-comments"></i> 3 Comments</li>
                                        </ul>
                                    </div>
                                </div>
                                <h4><a href="blog-details.html">Dras accumsan nulla nec lacus ultricies placerat.</a>
                                </h4>
                                <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec
                                    tristique orci.</p>
                                <div class="blog-btn"><a href="blog-details.html">Read More <i
                                            class="fa fa-long-arrow-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp"
                            data-delay=".4s" style="visibility: hidden; animation-name: none;">
                            <div class="blog-thumb2">
                                <a href="blog-details.html"><img src="/frontend/images/blog/inner_b3.jpg"
                                        alt="img"></a>
                                <div class="date-home">
                                    <i class="fas fa-calendar-alt"></i> 24th March 2023
                                </div>
                            </div>
                            <div class="blog-content2">

                                <div class="b-meta">
                                    <div class="meta-info">
                                        <ul>
                                            <li><i class="fas fa-user"></i> By Admin </li>
                                            <li><i class="fas fa-comments"></i> 3 Comments</li>
                                        </ul>
                                    </div>
                                </div>
                                <h4><a href="blog-details.html">Seas accumsan nulla nec lacus ultricies placerat.</a>
                                </h4>
                                <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec
                                    tristique orci.</p>
                                <div class="blog-btn"><a href="blog-details.html">Read More <i
                                            class="fa fa-long-arrow-right"></i></a></div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
        <!-- blog-area-end -->

        <!-- newslater-area -->
        <section class="newslater-area pt-60 pb-60" style="background-color: #125875;">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-7 col-lg-7">
                        <div class="section-title newslater-title">
                            <div class="icon">
                                <img src="/frontend/images/send-mail.png" alt="img">
                            </div>
                            <div class="text">
                                <h2>Subscribe for Newsletter</h2>
                                <p>Manage Your Business With Our Software</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-5">
                        <form name="ajax-form" id="contact-form4" action="#" method="post"
                            class="contact-form newslater">
                            <div class="form-group p-relative">
                                <input class="form-control" id="email2" name="email" type="email"
                                    placeholder="Email Address..." value="" required="">
                                <button type="submit" class="btn btn-custom" id="send2">Subscribe Now</button>
                            </div>
                            <!-- /Form-email -->
                        </form>
                    </div>
                </div>

            </div>
        </section>
        <!-- newslater-aread-end -->

    </main>
    <!-- main-area-end -->

    <!-- footer -->
    <footer class="footer-bg footer-p pt-90"
        style="background-color: #125875; background-image: url(/frontend/images/footer-bg.png);">
        <div class="footer-top pb-70">
            <div class="container">
                <div class="row justify-content-between">

                    <div class="col-xl-3 col-lg-3 col-sm-6">
                        <div class="footer-widget mb-30">
                            <div class="f-widget-title">
                                <h2>About Us</h2>
                            </div>
                            <div class="f-contact">
                                <p style="text-align: justify">The International Islami University of Science and
                                    Technology Bangladesh (IIUSTB) is going to be established as a new generation
                                    digital private University in Bangladesh having full commitment and dedication for
                                    standard, quality, sincerity and excellence.</p>

                            </div>
                            <div class="footer-social mt-10">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-sm-6">
                        <div class="footer-widget mb-30">
                            <div class="f-widget-title">
                                <h2>Our Links</h2>
                            </div>
                            <div class="footer-link">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html"> About</a></li>
                                    <li><a href="courses.html">Courses</a></li>
                                    <li><a href="contact.html"> Contact Us</a></li>
                                    <li><a href="blog.html">Blog </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-sm-6">
                        <div class="footer-widget mb-30">
                            <div class="f-widget-title">
                                <h2>Latest Post</h2>
                            </div>
                            <div class="recent-blog-footer">
                                <ul>
                                    <li>
                                        <div class="thum"> <img
                                                src="/frontend/images/blog/s-blogimg-01.png" alt="img">
                                        </div>
                                        <div class="text"> <a href="blog-details.html">Nothing impossble to need hard
                                                work</a>
                                            <span>25 September, 2023</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="thum"> <img
                                                src="/frontend/images/blog/s-blogimg-02.png" alt="img">
                                        </div>
                                        <div class="text"> <a href="blog-details.html">Nothing impossble to need hard
                                                work</a>
                                            <span>25 September, 2023</span>
                                        </div>
                                    </li>

                                </ul>


                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-sm-6">
                        <div class="footer-widget mb-30">
                            <div class="f-widget-title">
                                <h2>Contact Us</h2>
                            </div>
                            <div class="f-contact">
                                <ul>
                                    <li>
                                        <i class="icon fas fa-phone"></i>
                                        <span><a href="tel:01774-709900"> 01774-709900</a></span>
                                    </li>
                                    <li><i class="icon fas fa-envelope"></i>
                                        <span>
                                            <a href="mailto:iiustbbaipail@gmail.com">iiustbbaipail@gmail.com</a>
                                        </span>
                                    </li>
                                    <li>
                                        <i class="icon fas fa-map-marker-alt"></i>
                                        <span>Corporate Office- Square Bhabon, 1/B, DIT Avenue, Motijheel C/A,
                                            Dhaka-1000</span><br>
                                    </li>
                                    <li>
                                        <i class="icon fas fa-map-marker-alt"></i>
                                        <span> Permanent Campus - Baipail, Ashulia, Dhaka-1349</span>

                                    </li>

                                </ul>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="copyright-wrap">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 text-left text-xl-right">
                        Copyright © IIUSTB 2023 . All rights reserved.
                    </div>
                    <div class="col-lg-6 text-center">

                    </div>

                </div>
            </div>
        </div>
    </footer>
    <!-- footer-end -->

    <!-- JS here -->
    <script src="/frontend/js/modernizr-3.5.0.min.js"></script>
    <script src="/frontend/js/jquery-3.6.0.min.js"></script>
    <script src="/frontend/js/popper.min.js"></script>
    <script src="/frontend/js/bootstrap.min.js"></script>


    <script src="/frontend/js/ajax-form.js"></script>
    <script src="/frontend/js/paroller.js"></script>
    <script src="/frontend/js/wow.min.js"></script>
    <script src="/frontend/js/js_isotope.pkgd.min.js"></script>
    <script src="/frontend/js/imagesloaded.min.js"></script>
    <script src="/frontend/js/parallax.min.js"></script>
    <script src="/frontend/js/jquery.waypoints.min.js"></script>
    <script src="/frontend/js/jquery.counterup.min.js"></script>
    <script src="/frontend/js/jquery.scrollUp.min.js"></script>

    <script src="/frontend/js/jquery.meanmenu.min.js"></script>
    <script src="/frontend/js/parallax-scroll.js"></script>
    <script src="/frontend/js/jquery.magnific-popup.min.js"></script>
    <script src="/frontend/js/element-in-view.js"></script>

    <script src="/frontend/js/main.js"></script>
    <a id="scrollUp" href="#top" style="display: none; position: fixed; z-index: 2147483647;">
        <i class="fas fa-level-up-alt"></i>
    </a>

</body>

</html>
