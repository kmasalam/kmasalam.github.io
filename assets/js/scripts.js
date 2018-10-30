/*---------------------------------------------
Template name:  crypdrone
Version:        1.0
Author:         ThemeLooks
Author url:     http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

01: Main menu
02: Background image
03: Parsley form validation
04: Smooth scroll for comment reply
05: share transform
06: Check Data
07: Back to top button
08: Changing svg color
09: Ajax Contact Form
10: Intro item height
11: Preloader
12: Content animation
13: Pricing plan activation
14: counter up
15: Parallax
16: faq always open
17: Google map
18: Count down home page1
19: Count down home page 2
20: team carousel activation
21: price carousel
22: testimonial carousel activation
23: partner carousel activation
24: timeline2 carousel activation
25: timeline carousel activation
26: partner carousel2 activation
27: road map activation
28: magnificPopup installation
29: Pie Chart dark Activation
30: Pie Chart dark Activation
31: update chart


----------------------------------------------*/

    (function($) {
        "use strict";

            /* 01: Main menu
            ==============================================*/

            $('.header-menu a[href="#"]').on('click', function(event) {
                event.preventDefault();
            });

            $(".header-menu").menumaker({
                title: '<i class="fa fa-bars"></i>',
                format: "multitoggle"
            });

            var mainHeader = $('.main-header');

            if($(window).scrollTop() > 100) $('.main-header').addClass('sticky fadeInDown')
            $(window).on('scroll', function(e){
                if($(this).scrollTop() < 100){
                    $('.main-header').removeClass('sticky fadeInDown')
                }else
                    $('.main-header').addClass('sticky fadeInDown')        
                });

            /* 02: Background image
            ==============================================*/

            var bgImg = $('[data-bg-img]');

            bgImg.css('background', function(){
                return 'url(' + $(this).data('bg-img') + ') center center';
            });


            /* 03: Parsley form validation
            ==============================================*/

            $('.parsley-validate, .parsley-validate form').parsley();


            /* 04: Smooth scroll for comment reply
            ==============================================*/
            
            var $commentContent = $('.comment-content > a');
            
            $commentContent.on('click', function(event){
                event.preventDefault();
                var $target = $('.comment-form');
                
                if ( $target.length ) {
                    $('html, body').animate({
                        scrollTop: $target.offset().top - 120
                    }, 500);

                    $target.find('textarea').focus();
                }
            });


        /*============================================
            07: Back to top button
        ==============================================*/

        var $backToTopBtn = $('.back-to-top');

        if ($backToTopBtn.length) {
            var scrollTrigger = 400, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $backToTopBtn.addClass('show');
                } else {
                    $backToTopBtn.removeClass('show');
                }
            };

            backToTop();

            $(window).on('scroll', function () {
                backToTop();
            });

            $backToTopBtn.on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }


        /* 08: Changing svg color
        ==============================================*/

        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
        
            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');
        
                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }
        
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                
                // Check if the viewport is set, else we gonna set it if we can.
                if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                }
        
                // Replace image with new SVG
                $img.replaceWith($svg);
        
            }, 'xml');
        });

        /* 09: Ajax Contact Form
        ==============================================*/

      
         $('.contact-form').on('submit', 'form', function(e) {
            e.preventDefault();

            var $el = $(this);

            $.post($el.attr('action'), $el.serialize(), function(res){
                res = $.parseJSON( res );
                $el.parent('.contact-page-form').find('.form-response').html('<span>' + res[1] + '</span>');
            });
        });
      
    
    /* 11: Preloader
    ==============================================*/

    $(window).on('load', function(){

        function removePreloader() {
            var preLoader = $('.preLoader');
            preLoader.fadeOut();
        }
        setTimeout(removePreloader, 250);
    });


    /* 12: Content animation
    ==============================================*/

    $(window).on('load', function(){

        var $animateEl = $('[data-animate]');

        $animateEl.each(function () {
            var $el = $(this),
                $name = $el.data('animate'),
                $duration = $el.data('duration'),
                $delay = $el.data('delay');

            $duration = typeof $duration === 'undefined' ? '0.6' : $duration ;
            $delay = typeof $delay === 'undefined' ? '.1' : $delay ;

            $el.waypoint(function () {
                $el.addClass('animated ' + $name)
                   .css({
                        'animation-duration': $duration + 's',
                        'animation-delay': $delay + 's'
                   });
            }, {offset: '93%'});
        });

    });
 
    /*=========================================================
        14: counter up
    =========================================================*/
           $('.counter').counterUp({});
         
       /*====================================================
            15: Parallax
       ====================================================*/
        var $parallaxLayers = $('[data-trigger="parallax_layers"]');

        if( $parallaxLayers.length ){
            $parallaxLayers.each(function () {
                new Parallax( $(this)[0], {
                    selector: '[data-depth]'
                });
            });
        }
    /*=============================================
        16: faq always open
    =============================================*/
       $(".single-faq .faq-question").on("click", function(event) {
        $(this).parents(".single-faq").children(".collapse").hasClass("show") &&
            (event.stopPropagation(), event.preventDefault())
    });
/*===================================================
        17: Google map
===================================================*/
    //Google Map
    if($('#google-map').length){
        var googleMapSelector = $('#google-map'),
            myCenter = new google.maps.LatLng(40.6785635, -73.9664109);

        function initialize() {
            var mapProp = {
                center: myCenter,
                zoom: 11,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                        }
                    ]
                },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                        }
                    ]
                },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                        }
                    ]
                },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                        },
                            {
                                "lightness": 45
                        }
                    ]
                },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                        }
                    ]
                },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                        }
                    ]
                },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                        }
                    ]
                },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#46bcec"
                        },
                            {
                                "visibility": "on"
                        }
                    ]
                },
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#c8d7d4"
                        }
                    ]
                },
                    {
                        "featureType": "water",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ff0000"
                        }
                    ]
                }
            ]
            };
            var map = new google.maps.Map(document.getElementById("google-map"), mapProp);
            var marker = new google.maps.Marker({
                position: myCenter,
                icon: 'assets/img/pin.png'
            });
            marker.setMap(map);
        }
        if (googleMapSelector.length) {
            google.maps.event.addDomListener(window, 'load', initialize);
        }
    }



/*===================================================
    18: Count down home page1
===================================================*/

 var $countDown = $('[data-countdown]');
        $countDown.each(function () {
            var $t = $(this);
            
            $t.countdown($t.data('countdown'), function(e) {
                $(this).html( '<ul class="list-unstyled">' + e.strftime('<li><strong>%D</strong><span>D</span></li><li><strong>%H</strong><span>H</span></li><li><strong>%M</strong><span>M</span></li><li><strong>%S</strong><span>S</span></li>') + '</ul>' );
            });
        });

/*===========================================
        20: testimonial carousel
===========================================*/
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        autoplay:false,
        autoplayTimeout: 5000,
        autoplaySpeed: 4000,
        responsive:{
            0:{
                items:1
            },
            320:{
                items:1,
            },
            480:{
                items:2,
            },
            767:{
                items:3,
            },
            1024:{
                items:3,
            }
        }
    })

/*=====================================================
    21: partner carousel
=====================================================*/
    $('.partner-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            500:{
                items: 3
            },
            768:{
                items: 5
            },
            1000:{
                items:5
            }
        }
    })


/*===========================================
        22: testimonial carousel activation
===========================================*/

    $('.testionial-carousel2').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText:['k','j'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            700:{
                items:1
            },
            991:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

/*===========================================
        23: partner carousel activation
===========================================*/
    

/*===========================================
        24: timeline2 carousel activation
===========================================*/
    $('.timeline-carousel2').owlCarousel({
        loop:true,
        margin:30,
        dots:false,
        center: true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            },
            1200:{
                items:5,
            }
        }
    })
/*===========================================
        25: timeline carousel activation
===========================================*/
    $('.timeline-carousel').owlCarousel({
        loop:true,
        margin:30,
        dots:false,
        nav:false,
        center:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:3
            },
            600:{
                items:5
            },
            1000:{
                items:7
            },
            1200:{
                items:9
            }
        }
    })
/*===========================================
        26: partner carousel2 activation
===========================================*/

    $('.partner-carousel2').owlCarousel({
        loop:true,
        margin:80,
        dots:true,
        nav:false,
        center:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:3
            },
            600:{
                items:5
            },
            1000:{
                items:7
            }
        }
    })

/*======================================
    27: road map activation
======================================*/
$('.road-map-dot').on('mouseenter',function(){
    $(this).parent().children('.roadmap--hover-item').css({
            'visibility' : 'visible',
            'opacity' : '1',
            'z-index' : '10'
    }).parents('.owl-item').siblings().find('.roadmap--hover-item').css({
                 'visibility': 'hidden',
                 'opacity' : '0'
     })
})
/*=====================================================
        28: magnificPopup installation
=====================================================*/
 var c = $('[data-popup="img"]');
        c.length && c.magnificPopup({
            type: "image"
        });
        c = $('[data-popup="video"]');
        c.length && c.magnificPopup({
            type: "iframe"
        });

        
})(jQuery);