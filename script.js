
$(function () {

    /*
     $(document).ready(function () {
         //прикрепляем клик по заголовкам acc-head
         $('.specialties-wrap').on('click', f_acc);
     });
 
     function f_acc() {
         //скрываем все кроме того, что должны открыть
         $('.specialties-block').not($(this).next()).slideUp(1000);
         // открываем или скрываем блок под заголовком, по которому кликнули
         $('html,body').stop().animate({ scrollTop: $(goto).offset().top - 60 }, 500);
         $(this).next().slideToggle(1000);
         let goto = $(this).data('anchor');
         e.preventDefault();
     }
 */

    $(document).ready(function () {
        $('.slider__company').slick({
            slidesToShow: 6,
            //slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            variableWidth: true,
            dots: true,
            infinity: true,
            autoplay: true,
            autoplaySpeed: 2500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        //slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 482,
                    settings: {
                        slidesToShow: 1,
                        //slidesToScroll: 1,
                        dots: false,
                    }
                }
            ]
        });
    });

    /* Accordion specialties */
    if ($(window).width() < 481) {
        $('.specialties-block').hide();

        $(".specialties-wrap").on("click", function (e) {

            e.preventDefault();
            var $this = $(this);

            //  $(this).each(function (index) {
            //      $(this).removeClass("accordion-active");
            //  });

            if (!$this.hasClass("accordion-active")) {
                // $(".specialties-block").slideUp(0);
                $(this).removeClass("accordion-active");
                $('.accordion__arrow').removeClass('accordion__rotate');
                let goto = $(this).data('anchor');
                $('html,body').stop().animate({ scrollTop: $(goto).offset().top - 60 }, 500);
                e.preventDefault();
            }

            $this.toggleClass("accordion-active");
            $this.next().slideToggle();
            $('.accordion__arrow', this).toggleClass('accordion__rotate');


        });
    }

    /* Hidding menu on scroll*/
    if ($(window).width() > 480) {
        $(window).scroll(function () {
            let scroolled = $(window).scrollTop();
            if ($("#nav").hasClass("active")) {
                setTimeout(() => {
                    $("#menu").toggleClass("active");

                }, 150)
                $("#nav_toggle").toggleClass("active");
                $("#nav").toggleClass("active");
            }
        })
    }

    /* Fixed Header */
    $(window).scroll(function () {
        var sticky = $('.top-bar'),
            scroll = $(window).scrollTop();

        if (scroll >= 90) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    })

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a, #menu a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset - 85
        }, 500);
    });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#menu").toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Collapse */
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');
        $this.toggleClass("active");
    });

    /* Animation block "About" on laptops */
    if ($(window).width() > 768) {
        VanillaTilt.init(document.querySelectorAll(".info-item"), {
            max: 13,
            speed: 200,
        });
    }

    /* Adding lock class for body */
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        if ($("#nav").hasClass("active")) {
            $('body').toggleClass('lock');
        }
        else {
            $('body').toggleClass('lock');
        }
    });

    /* Box-shadow */
    if ($(window).width() < 426) {
        $(".menu-item a").on("click", function (event) {
            event.preventDefault();
            $("#menu").toggleClass("active");
            $('body').toggleClass('lock');
            $("#nav_toggle").toggleClass("active");
            $("#nav").toggleClass("active");

            if ($("body").hasClass("lock") || ($(window).scrollTop() === 0)) {
                $('.top-bar').css('box-shadow', 'none');
            }
            else {
                $('.top-bar').css('box-shadow', '0px 5px 45px 0px rgb(80 106 156 / 17%)');
            }
        });

        $(".nav-toggle").on('click', () => {
            if ($("body").hasClass("lock")) {
                $('.top-bar').css('box-shadow', 'none');
            }
            else {
                if ($(window).scrollTop() === 0) {
                    $('.top-bar').css('box-shadow', 'none');
                }
                else $('.top-bar').css('box-shadow', '0px 5px 45px 0px rgb(80 106 156 / 17%)');
            }
        })

        $(window).scroll(function () {
            var sticky = $('.top-bar'),
                scroll = $(window).scrollTop();
            if ($(window).scrollTop() < sticky.height() * 2.35) {
                $('.top-bar').css('box-shadow', 'none');
            }
            else $('.top-bar').css('box-shadow', '0px 5px 45px 0px rgb(80 106 156 / 17%)');
        })
    }

});
