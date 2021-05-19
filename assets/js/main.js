!function (e) {
    "use strict";

    $(document).ready(function () {

        // headerFixed
        function headerFixed() {
            var $scTop = $(window).scrollTop();
            if ($scTop > 0) {
                $(".header").addClass("fixdHeader");
            } else {
                $(".header").removeClass("fixdHeader");
            }
        }

        headerFixed();


        $(window).on('scroll', function () {
            var $scTop = $(window).scrollTop();
            if ($scTop < 120) {
                $('.go_to_top').hide(300);
            } else {
                $('.go_to_top').show(300);
            }

            headerFixed();
        });

        function bannerSlider() {
            $(".bannerSlider").owlCarousel({
                items: 1,
                nav: true,
                loop: true,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 1,
                    },
                    768: {
                        items: 1
                    }
                }
            });
        }

        bannerSlider();



        function latestSlider() {
            $(".latestSlider").owlCarousel({
                items: 3,
                // margin: 30,
                nav: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 2
                    },
                    1920: {
                        items: 3
                    }
                },
            });
        }

        latestSlider();

        function footerLogoSlider() {
            $(".footerLogoSlider").owlCarousel({
                items: 5,
                margin: 30,
                // nav: true,
                freeDrag: true,
                loop: true,
                autoplay: true,
                slideBy: 1,
                responsive: {
                    0: {
                        items: 2,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3
                    },
                    1920 :{
                        items: 5
                    }
                }
            });
        }

        footerLogoSlider();

    });

}(jQuery);