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

        function latestSlider() {
            $(".latestSlider").owlCarousel({
                items: 3,
                // margin: 30,
                nav: true
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
            });
        }

        footerLogoSlider();

    });

}(jQuery);