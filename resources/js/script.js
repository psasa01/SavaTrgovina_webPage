$(document).ready(function () {

    var win = $(window).width();
    var season = $('.season');


    $(window).on('resize', function () {
        $('.bottom').remove();
    });


    /* ------------------------------- KAKO DO NAS - COLLAPSE ------------------------- */

    $('.do-nas-slika, .do-nas-text, .do-nas-naslov').on('click', function () {
        $('.do-nas-wrapper').toggleClass('open');
    });



    /* ----------------------------------- TABLE PROPERTIES ---------------------------- */

    $('td:contains("Serija")').addClass('jQ');
    $('td:last-child').addClass('jQ');
    $('#apolloH4').css('color', '#b4b8c1');



    /* ------------------------------- HOVER TABLE ---------------------------------- */

    $('tr:contains("/")').hover(function () {
        $(this).addClass('hover'), 100;
    }, function () {
        $(this).removeClass('hover'), 100;
    });



    /* ------------------------------- KONTAKT - COLLAPSE ------------------------------- */

    $('.adresa-collapse').on('click', function () {
        $('.adresa-collapse').toggleClass('open');
    });
    $('.tel-collapse').on('click', function () {
        $('.tel-collapse').toggleClass('open');
    });
    $('.email-collapse').on('click', function () {
        $('.email-collapse').toggleClass('open');
    });
    $('.fb-collapse').on('click', function () {
        $('.fb-collapse').toggleClass('open');
    });



    /* --------------------------- CLOSE KONTAKT ON DO NAS ------------------------------ */

    $('.do-nas-slika, .do-nas-text, .do-nas-naslov').on('click', function () {
        $('.adresa-collapse').removeClass('open');
        $('.tel-collapse').removeClass('open');
        $('.email-collapse').removeClass('open');
        $('.fb-collapse').removeClass('open');
        $('.overlay').addClass('show');
    });


    /* ------------------------------ CLOSE DO NAS ON OVERLAY ------------------------- */
    $('.overlay').on('click', function () {
        $('.do-nas-wrapper').removeClass('open'),
            $(this).removeClass('show');
    });


    /* ------------------------------- CLOSE DO NAS ON KONTAKT ------------------------ */

    $('.adresa-collapse').on('click', function () {
        $('.do-nas-wrapper').removeClass('open');
    });
    $('.tel-collapse').on('click', function () {
        $('.do-nas-wrapper').removeClass('open');
    });
    $('.email-collapse').on('click', function () {
        $('.do-nas-wrapper').removeClass('open');
    });
    $('.fb-collapse').on('click', function () {
        $('.do-nas-wrapper').removeClass('open');
    });



    /* --------------------- CLOSE ON OVERLAY ------------------ */

    $('.arrow').on('click', function () {
        $('.do-nas-wrapper').removeClass('open');
        $('.overlay').removeClass('show');
    });


    $('.container').on('click', function () {
        $('.do-nas-wrapper').removeClass('open');
        $('.overlay').removeClass('show');
    });



    /* ------------------------ FB LINK HOVER ------------------------- */

    $('.fb-text a').hover(function () {
        $(this).css("color", "#fff");
    }, function () {
        $(this).css("color", "#b4b8c1");
    });



    /* ------------------------------------- KONTAKT HOVER ---------------------------------- */

    $('.adresa-icon i, .tel-icon i, .email-icon i, .fb-icon i, .do-nas-naslov h2').hover(
        function () {
            $(this).css("color", "#fff");
        },
        function () {
            $(this).css("color", "#f96c26");
        });


    /* --------------------------------- HIDE ON SCROLL ------------------------------------ */

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('.arrow, .do-nas-text, .do-nas-slika, .do-nas-naslov').fadeOut();
        } else {
            $('.arrow, .do-nas-text, .do-nas-slika, .do-nas-naslov').fadeIn();
        }
    });


    $('.bottom').css('display', 'none');


    var fromBot = $(document).height() - 100 - $(window).height();


    $(window).scroll(function () {
        if ($(document).scrollTop() > 300 && $(document).scrollTop() < fromBot) {
            $(".bottom").fadeIn(500);
        } else {
            $(".bottom").fadeOut(100);
        }
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > fromBot & win < 460) {
            season.fadeOut(100);
        } else {
            season.fadeIn(500);
        }
    })

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('.do-nas-wrapper').removeClass('open');
        }
    });

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('.overlay').removeClass('show');
        }
    });



    /* ----------------------------------- CJENOVNICI DROPDOWN ------------------------------ */

    $('.p-cjen').on('click', function () {
        $('.cjenovnici-dropdown').toggleClass('drop');
    });


    /* ----------------------- CLOSE NAV ON EXIT --------------------------   */

    $('.exit').on('click', function () {
        $('.main-navigation-collapse').toggleClass('open');
        $('.overlay-2').removeClass('show');
    });


    /* ----------------- ACCORDION ------------------------------ */

    var accordion = $('.accordion');

    accordion.find('dd').hide();


    accordion.find('dt').on('click', function () {
        $(this).next('dd').slideToggle().siblings('dd:visible').slideUp();


    });



    /* ----------------------- SIDE NAV ------------------------------ */

    $('.nav-toggle').on('click', function () {
        $('.main-navigation-collapse').toggleClass('open');
        $('.overlay-2').toggleClass('show');
    });


    /* -------------------- CLOSE SIDE NAV ON OVERLAY-2 ----------------- */

    $('.overlay-2').on('click', function () {
        $('.main-navigation-collapse').removeClass('open'),
            $(this).removeClass('show');
    });




    /* --------------------------------- QUATRAC 5 --------------------------------- */

    $('.quat5-text').hide();
    $('.quat5-hero-title').on('click', function () {
        $(this).fadeOut();
        $('.quat5-text').delay(1000).fadeIn();
    });

    $('.quat5-text').on('click', function () {
        $(this).fadeOut();
        $('.quat5-hero-title').delay(1000).fadeIn();
    });


    /* ---------------------------------- APOLLO ----------------------------------- */

    $('.apollo-text').hide();
    $('.apollo-title').on('click', function () {
        $(this).fadeOut();
        $('.apollo-text').delay(1000).fadeIn();
    });

    $('.apollo-text').on('click', function () {
        $(this).fadeOut();
        $('.apollo-title').delay(1000).fadeIn();
    });



    $('.opis img, .opis li').hide();

    $('#centar').on('click', function () {
        $('.opis img, .opis li').hide().clearQueue();
        $('#put1c').delay(1000).fadeIn('slow');
        $('#izgrada li:first-child').delay(1000).fadeIn('slow');
        $('#put2c').delay(3000).fadeIn('slow');
        $('#izgrada li:nth-child(2)').delay(3000).fadeIn('slow');
        $('#put3c').delay(5000).fadeIn('slow');
        $('#izgrada li:nth-child(3)').delay(5000).fadeIn('slow');
        $('#put4c').delay(7000).fadeIn('slow');
        $('#izgrada li:nth-child(4)').delay(7000).fadeIn('slow');

    });

    $('#dbr').on('click', function () {
        $('.opis img, .opis li').hide().clearQueue();
        $('#put1d').delay(1000).fadeIn('slow');
        $('#sdbr li:first-child').delay(1000).fadeIn('slow');
        $('#put2d').delay(3000).fadeIn('slow');
        $('#sdbr li:nth-child(2)').delay(3000).fadeIn('slow');
        $('#put3d').delay(5000).fadeIn('slow');
        $('#sdbr li:nth-child(3)').delay(5000).fadeIn('slow');
        $('#put4d').delay(7000).fadeIn('slow');
        $('#sdbr li:nth-child(4)').delay(7000).fadeIn('slow');

    });

    $('#ildz').on('click', function () {
        $('.opis img, .opis li').hide().clearQueue();
        $('#put1i').delay(1000).fadeIn('slow');
        $('#sildz li:first-child').delay(1000).fadeIn('slow');
        $('#put2i').delay(3000).fadeIn('slow');
        $('#sildz li:nth-child(2)').delay(3000).fadeIn('slow');
        $('#put3i').delay(5000).fadeIn('slow');
        $('#sildz li:nth-child(3)').delay(5000).fadeIn('slow');
        $('#put4i').delay(7000).fadeIn('slow');
        $('#sildz li:nth-child(4)').delay(7000).fadeIn('slow');
        $('#put5i').delay(9000).fadeIn('slow');
        $('#sildz li:nth-child(5)').delay(9000).fadeIn('slow');

    });


    // ----------------- SNOWSTORM :) -------------------- //

    snowStorm.snowColor = '#aaaacc'; // blue-ish snow!?
    snowStorm.flakesMax = 140;
    snowStorm.flakesMaxActive = 106; // show more snow on screen at once
    snowStorm.useTwinkleEffect = true; // let the snow flicker in and out of view
    snowStorm.animationInterval = 44;
    snowStorm.followMouse = true;

    // ----------------------- TYPED - PRELOADER ------------------ //

    var typed = new Typed('#typed2', {
        startDelay: 500,
        strings: ["Dobrodošli"],
        typeSpeed: 120,
        showCursor: false
    });

    // ------------------ PRELOADER --------------------- //





    if (sessionStorage.getItem('dontLoad') == null) {
        $('.preloader').css('display', 'block').delay('4000').fadeOut(1000);
        sessionStorage.setItem('dontLoad', 'true');
    } else {
        $('.preloader').css('display', 'none');
    };

    $('.start').delay(1000).hide();
});
