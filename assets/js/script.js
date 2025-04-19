! function(e) {
    "use strict";

    function a() {
        if (e(".main-header").length) {
            var a = e(window).scrollTop(),
                n = e(".main-header"),
                t = e(".scroll-top");
            a >= 110 ? (n.addClass("fixed-header"), t.addClass("open")) : (n.removeClass("fixed-header"), t.removeClass("open"))
        }
    }
    if (e(".preloader-close").length && e(".preloader-close").on("click", function() {
            e(".loader-wrap").delay(200).fadeOut(500)
        }), a(), e(".main-header li.dropdown ul").length && e(".main-header .navigation li.dropdown").append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'), e(".mobile-menu").length) {
        e(".mobile-menu .menu-box").mCustomScrollbar();
        var n = e(".main-header .menu-area .main-menu").html();
        e(".mobile-menu .menu-box .menu-outer").append(n), e(".sticky-header .main-menu").append(n), e(".mobile-menu li.dropdown .dropdown-btn").on("click", function() {
            e(this).toggleClass("open"), e(this).prev("ul").slideToggle(500)
        }), e(".mobile-menu li.dropdown .dropdown-btn").on("click", function() {
            e(this).prev(".megamenu").slideToggle(900)
        }), e(".mobile-nav-toggler").on("click", function() {
            e("body").addClass("mobile-menu-visible")
        }), e(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on("click", function() {
            e("body").removeClass("mobile-menu-visible")
        })
    }
    e(".wow").length && new WOW({
        mobile: !1
    }).init();

    function t() {
        e(".switch_menu").length && (e(".switch_btn button").on("click", function() {
            e(".switch_menu").toggle(500)
        }), e("#styleOptions").styleSwitcher({
            hasPreview: !0,
            fullPath: "assets/css/color/",
            cookie: {
                expires: 30,
                isManagingLoad: !0
            }
        }))
    }

    function s() {
        e(".page_direction").length && e(".direction_switch button").on("click", function() {
            e("body").toggleClass(function() {
                return e(this).is(".rtl, .ltr") ? "rtl ltr" : "rtl"
            })
        })
    }
    e("#contact-form").length && e("#contact-form").validate({
        rules: {
            username: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0
            },
            subject: {
                required: !0
            },
            message: {
                required: !0
            }
        }
    }), e(".count-box").length && e(".count-box").appear(function() {
        var a = e(this),
            n = a.find(".count-text").attr("data-stop"),
            t = parseInt(a.find(".count-text").attr("data-speed"), 10);
        a.hasClass("counted") || (a.addClass("counted"), e({
            countNum: a.find(".count-text").text()
        }).animate({
            countNum: n
        }, {
            duration: t,
            easing: "linear",
            step: function() {
                a.find(".count-text").text(Math.floor(this.countNum))
            },
            complete: function() {
                a.find(".count-text").text(this.countNum)
            }
        }))
    }, {
        accY: 0
    }), e(".lightbox-image").length && e(".lightbox-image").fancybox({
        openEffect: "fade",
        closeEffect: "fade",
        helpers: {
            media: {}
        }
    }), e(".tabs-box").length && e(".tabs-box .tab-buttons .tab-btn").on("click", function(a) {
        a.preventDefault();
        var n = e(e(this).attr("data-tab"));
        if (e(n).is(":visible")) return !1;
        n.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn"), e(this).addClass("active-btn"), n.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0), n.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab"), e(n).fadeIn(300), e(n).addClass("active-tab")
    }), e(".accordion-box").length && e(".accordion-box").on("click", ".acc-btn", function() {
        var a = e(this).parents(".accordion-box"),
            n = e(this).parents(".accordion");
        if (!0 !== e(this).hasClass("active") && e(a).find(".accordion .acc-btn").removeClass("active"), e(this).next(".acc-content").is(":visible")) return !1;
        e(this).addClass("active"), e(a).children(".accordion").removeClass("active-block"), e(a).find(".accordion").children(".acc-content").slideUp(300), n.addClass("active-block"), e(this).next(".acc-content").slideDown(300)
    }), e(".banner-carousel").length && e(".banner-carousel").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        active: !0,
        smartSpeed: 1e3,
        autoplay: 6e3,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    }), e(".single-item-carousel").length && e(".single-item-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !1,
        smartSpeed: 3e3,
        autoplay: !0,
        navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    }), e(".two-column-carousel").length && e(".two-column-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 3e3,
        autoplay: 4e3,
        navText: ['<span class="fas fa-algle-left"></span>', '<span class="fas fa-algle-left-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1024: {
                items: 2
            }
        }
    }), e(".three-item-carousel").length && e(".three-item-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 1e3,
        autoplay: 500,
        navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    }), e(".three-item-carousel-2").length && e(".three-item-carousel-2").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        smartSpeed: 1e3,
        autoplay: 500,
        navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    }), e(".four-item-carousel").length && e(".four-item-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 500,
        autoplay: 5e3,
        navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    }), e(".scroll-nav").length && e(".scroll-nav").onePageNav(), e("#search-popup").length && (e(".search-toggler").on("click", function() {
        e("#search-popup").addClass("popup-visible")
    }), e(document).keydown(function(a) {
        27 === a.keyCode && e("#search-popup").removeClass("popup-visible")
    }), e(".close-search,.search-popup .overlay-layer").on("click", function() {
        e("#search-popup").removeClass("popup-visible")
    })), e(document).ready(function() {
        e("select:not(.ignore)").niceSelect()
    }), jQuery(document).on("ready", function() {
        jQuery,
        t(),
        s()
    }), e(window).on("scroll", function() {
        a()
    }), e(window).on("load", function() {
        e(".loader-wrap").length && e(".loader-wrap").delay(1e3).fadeOut(500), TweenMax.to(e(".loader-wrap .overlay"), 1.2, {
            force3D: !0,
            left: "100%",
            ease: Expo.easeInOut
        })
    })
}(window.jQuery);