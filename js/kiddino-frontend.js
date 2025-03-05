; (function ($) {
    'use strict';

    /*=================================
     JS Index Here
    ==================================*/
    /*
      00. Popup Sidemenu
      01. Service Slider
      02. Category Slider One
      03. FAQ 
      04. Testimonial Area Slider
      05. Masonry Gallry
      06. Schedule Slider
      07. Class Slider
      08. Category Slider Two
      09. Brand Slider
      10. Counter Box
      11. Image Popup
      12. Gallery Tab Slider
    */
    /*=================================
        JS Index End
    ==================================*/

    $(window).on('elementor/frontend/init', function () {

        /*---------- 00. Popup Sidemenu ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinooffcanvas.default', function ($scope) {
            function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
                // Sidebar Popup
                $($sideMunuOpen).on("click", function (e) {
                    e.preventDefault();
                    $($sideMenu).addClass($toggleCls);
                });
                $($sideMenu).on("click", function (e) {
                    e.stopPropagation();
                    $($sideMenu).removeClass($toggleCls);
                });
                var sideMenuChild = $sideMenu + " > div";
                $(sideMenuChild).on("click", function (e) {
                    e.stopPropagation();
                    $($sideMenu).addClass($toggleCls);
                });
                $($sideMenuCls).on("click", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $($sideMenu).removeClass($toggleCls);
                });
            }

            popupSideMenu(
                ".sidemenu-wrapper",
                ".sideMenuToggler",
                ".sideMenuCls",
                "show"
            );
        });

        /*----------- 01. Service Slider ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinoserviceslider.default', function ($scope) {
            let $slickcarousels = $scope.find('.service-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: $slickcarousels.data('slick-dots'),
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });

        /*----------- 02. Category Slider One ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/categoryslider.default', function ($scope) {
            // Function For Custom Arrow Btn
            $('[data-slick-next]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    $($(this).data('slick-next')).slick('slickNext');
                })
            })

            $('[data-slick-prev]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    $($(this).data('slick-prev')).slick('slickPrev');
                })
            })

            let $category_slider = $scope.find('.category-carousel');
            $category_slider.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: $category_slider.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                slidesToShow: $category_slider.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });
        });
        /*----------- 03. FAQ ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinofaq.default', function ($scope) {
            $(".accordion-button").on("click", function () {
                console.log("hello");
                let btn = $(this).closest(".accordion-item");
                btn.toggleClass("active").siblings().removeClass("active");
            });
        });

        /*-----------  04. Testimonial Area Slider ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinotestimonialslider.default', function ($scope) {


            // Function For Custom Arrow Btn
            $('[data-slick-next]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    $($(this).data('slick-next')).slick('slickNext');
                })
            })

            $('[data-slick-prev]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    $($(this).data('slick-prev')).slick('slickPrev');
                })
            })


            let $slickcarousels = $scope.find('.testimonial-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: $slickcarousels.data('slick-dots'),
                infinite: true,
                arrows: false,
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 10000,
                centerPadding: '0px',
                fade: $slickcarousels.data('slick-fade'),
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: $slickcarousels.data('slide-to-show'),
                        centerPadding: '0px',
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0px',
                    }
                }
                ]
            });

        });

        /*----------- 05. Masonry Gallry  ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinomasonrygallery.default', function ($scope) {

            // Gallry
            $(".filter-active").imagesLoaded(function () {
                var $filter = ".filter-active",
                    $filterItem = ".filter-item",
                    $filterMenu = ".filter-menu-active";

                if ($($filter).length > 0) {
                    var $grid = $($filter).isotope({
                        itemSelector: $filterItem,
                        filter: "*",
                        masonry: {
                            // use outer width of grid-sizer for columnWidth
                            columnWidth: 1,
                        },
                    });

                    // filter items on button click
                    $($filterMenu).on("click", "button", function () {
                        var filterValue = $(this).attr("data-filter");
                        $grid.isotope({
                            filter: filterValue,
                        });
                    });

                    // Menu Active Class
                    $($filterMenu).on("click", "button", function (event) {
                        event.preventDefault();
                        $(this).addClass("active");
                        $(this).siblings(".active").removeClass("active");
                    });
                }
            });

            // Slider version
            let $gallery_slider = $scope.find('.gallery-carousel');
            $gallery_slider.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: $gallery_slider.data('slick-autoplay'),
                autoplaySpeed: $gallery_slider.data('slider-speed'),
                fade: false,
                slidesToShow: $gallery_slider.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 2,
                    }
                }
                ]
            });

        });

        /*----------- 06. Schedule Slider ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinoschedule.default', function ($scope) {
            // Function For Custom Arrow Btn
            $('[data-slick-next]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    $($(this).data('slick-next')).slick('slickNext');
                })
            })

            $('[data-slick-prev]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    $($(this).data('slick-prev')).slick('slickPrev');
                })
            })

            let $schedule_slider = $scope.find('.schedule-carousel');
            $schedule_slider.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: $schedule_slider.data('slick-autoplay'),
                autoplaySpeed: $schedule_slider.data('slider-speed'),
                fade: false,
                slidesToShow: $schedule_slider.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });

        /*-----------  07. Class Slider ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinoclassbox.default', function ($scope) {

            let $classboxcarousel = $scope.find('.classbox-carousel');
            $classboxcarousel.not('.slick-initialized').slick({
                dots: true,
                infinite: true,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 6000,
                centerPadding: '0px',
                fade: false,
                speed: 1000,
                slidesToShow: $classboxcarousel.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '0px',
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0px',
                    }
                }
                ]
            });

        });


        /*----------- 08. Category Slider Two ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/categoryslider2.default', function ($scope) {
            let $category_slider2 = $scope.find('.category-carouseltwo');
            $category_slider2.not('.slick-initialized').slick({
                dots: true,
                infinite: true,
                arrows: false,
                autoplay: $category_slider2.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                slidesToShow: $category_slider2.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    },
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                    },

                }
                ]
            });
        });

        /*----------- 09. Brand Slider ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinobrandlogo.default', function ($scope) {
            let $brandlogo = $scope.find('.brand-carousel');
            $brandlogo.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: $brandlogo.data('slick-autoplay'),
                autoplaySpeed: $brandlogo.data('slider-speed'),
                fade: false,
                slidesToShow: $brandlogo.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });
        });


        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinocounterbox.default', function ($scope) {
            /*----------- 10. Counter Box ----------*/
            $.fn.countdown = function () {
                $(this).each(function () {
                    var $counter = $(this),
                        countDownDate = new Date($counter.data('end-date')).getTime(), // Set the date we're counting down toz
                        exprireCls = 'expired';

                    // Finding Function
                    function s$(element) {
                        return $counter.find(element);
                    }

                    // Update the count down every 1 second
                    var counter = setInterval(function () {
                        // Get today's date and time
                        var now = new Date().getTime();

                        // Find the distance between now and the count down date
                        var distance = countDownDate - now;

                        // Time calculations for days, hours, minutes and seconds
                        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                        // if low than 10 add zero
                        function addZero(element) {
                            return element < 10 ? '0' + element : element;
                        }

                        // If the count down is over, write some text 
                        if (distance < 0) {
                            clearInterval(counter);
                            $counter.addClass(exprireCls);
                            $counter.find('.message').css('display', 'block');
                        } else {
                            // Output the result in elements
                            s$('.day').html(addZero(days))
                            s$('.hour').html(addZero(hours))
                            s$('.minute').html(addZero(minutes))
                            s$('.seconds').html(addZero(seconds))
                        }
                    }, 1000);
                })
            }

            if ($('.countdown-active').length) {
                $('.countdown-active').countdown();
            }

            console.log("hellworld");

        });




        /*----------- 12. Gallery Tab Slider ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinosalidergallerytab.default', function ($scope) {

            /* magnificPopup video view */
            $(".popup-video").magnificPopup({
                type: "iframe",
            });

            let $gallery_big = $scope.find('.gallery-big');
            let $gallery_small = $scope.find('.gallery-small');


            $gallery_big.not('.slick-initialized').slick({
                loop: true,
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 6000,
                fade: true,
                speed: 1000,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 1,
                asNavFor: '#gallery2',
                focusOnSelect: true,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1600,
                    settings: {
                        centerPadding: '0px',

                    }
                }, {
                    breakpoint: 1400,
                    settings: {
                        centerPadding: '0px',
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        centerPadding: '0px',
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        centerPadding: '0px',
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '0px',
                    }
                },

                ]
            });

            $gallery_small.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 6000,
                fade: false,
                centerMode: false,
                centerPadding: '0px',
                speed: 1000,
                slidesToShow: 6,
                centerMode: true,
                asNavFor: '#gallery1',
                focusOnSelect: true,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 6,
                        centerPadding: '0px',

                    }
                }, {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 5,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        centerPadding: '0px',
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                ]
            });

        });
        // Use Js End




        /*----------- Gallery Slider ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinogalleryslider.default', function ($scope) {
            let $galleryslider = $scope.find('.gallery-active');
            $galleryslider.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: true,
                centerMode: true,
                autoplaySpeed: 6000,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '477px',
                responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '477px',

                    }
                }, {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '320px',
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '200px',
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '150px',
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0px',

                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0px',
                    }
                }
                ]
            });

        });
        /*----------- Team Slider ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinoteammember.default', function ($scope) {
            let $slickcarousels = $scope.find('.team-carousel');


            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1500,
                    settings: {
                        arrows: false,
                        slidesToShow: 4,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 992,
                    arrows: false,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    arrows: false,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });
        /*----------- Blog Slider ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinoblogpost.default', function ($scope) {

            let $slickcarousels = $scope.find('.blog-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });

        });
        /*----------- Hero Two Slider ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinoherotwo.default', function ($scope) {

            if ($("[data-mask-src]").length > 0) {
                $("[data-mask-src]").each(function () {
                    var mask = $(this).attr("data-mask-src");
                    $(this).css({
                        "mask-image": "url(" + mask + ")",
                        "-webkit-mask-image": "url(" + mask + ")",
                    });
                    $(this).removeAttr("data-mask-src");
                });
            }

            let $herotwo_slider = $scope.find('.herotwo-carousel');
            $herotwo_slider.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: $herotwo_slider.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });


        // Service Box
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinoservicebox.default', function ($scope) {

            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                    var src = $(this).attr('data-bg-src');
                    $(this).css('background-image', 'url(' + src + ')');
                    $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };
        });

        // Reg Box
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinoregistrationbox.default', function ($scope) {

            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                    var src = $(this).attr('data-bg-src');
                    $(this).css('background-image', 'url(' + src + ')');
                    $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };
        });



        // Project Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinoprojectslider.default', function ($scope) {

            // Function For Custom Arrow Btn
            $('[data-slick-next]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    $($(this).data('slick-next')).slick('slickNext');
                })
            })

            $('[data-slick-prev]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    $($(this).data('slick-prev')).slick('slickPrev');
                })
            })

            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });


        // Faq Area
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinofaqarea.default', function ($scope) {

            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                    var src = $(this).attr('data-bg-src');
                    $(this).css('background-image', 'url(' + src + ')');
                    $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };

        });

        // Testimonial Slider Two
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinotestimonialslidertwo.default', function ($scope) {

            let $slickcarousels = $scope.find('.client-img.vs-carousel');

            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 1000,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '#testi-slide2',
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });

            let $contentslickcarousels = $scope.find('.content.vs-carousel');

            $contentslickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 1000,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '#testi-slide1',
            });

        });


        // Testimonial Slider Three
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinotestimonialsliderthree.default', function ($scope) {



            let $testimonialthree = $scope.find('.testi-there-carousel');

            $testimonialthree.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 1000,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '#testi-slidekk0',

                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });

            let $testimonialthreecontent = $scope.find('.testi-style4');
            $testimonialthreecontent.not('.slick-initialized').slick({
                dots: true,
                infinite: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 1000,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '#testi-imgs1',
            });

        });



        // Testimonila four
        elementorFrontend.hooks.addAction('frontend/element_ready/testifour.default', function ($scope) {

            // Function For Custom Arrow Btn
            $("[data-slick-next]").slickGoNext();
            $("[data-slick-prev]").slickGoPrev();


            let $testislidefour = $scope.find('.test-slide007');
            $testislidefour.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 6000,
                centerMode: true,
                centerPadding: '300px',
                fade: false,
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '0px',
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '0px',
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0px',
                    }
                }
                ]
            });


        });

        // Instagram Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinoinstagramslider.default', function ($scope) {
            let $slickcarousels = $scope.find('.instagram-align-style1');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: $slickcarousels.data('fade'),
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });
        });

        // Feature Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinofeatureslider.default', function ($scope) {
            
            let $slickcarousels = $scope.find('.feature-slider');

            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });
        });
        // Teacher Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinoteachersslider.default', function ($scope) {
            
            let $slickcarousels = $scope.find('.teacher-carousel');

            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });
        });
        // Nursery Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/kiddinonursuriesslider.default', function ($scope) {
            
            let $slickcarousels = $scope.find('.nursery-carousel');

            $slickcarousels.not('.slick-initialized').slick({
                dots: $slickcarousels.data('slick-dots'),
                infinite: true,
                arrows: false,
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });
        });



    });
}(jQuery));