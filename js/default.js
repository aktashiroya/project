jQuery.fn.countMe=function(t,e){if(void 0!==t||void 0!==e){var n=0,r=this.html();return setTimeout(()=>{var t=setInterval(()=>{n++,this.text(n),n==r&&clearInterval(t)},e)},t),this}alert("Worning!\ndelay and speed can't be empty!")};


$(document).ready(function () {

    window.onload = ()=>{
        // $(selector).countMe(delay,speed)
        $("#num1").countMe(40,200);
        $("#num2").countMe(30, 100);
        $("#num3").countMe(40, 200);
        $("#num4").countMe(200, 10);
     }
   
    $('.scrollToTop').hide()

    $(window).scroll(function(){
        h = $(window).scrollTop();

        // alert(h)
        if(h >= 150)
        {
            $('.bg-theme').addClass('fixed')
            $('.scrollToTop').fadeIn(1000)
        }
        else
        {
            $('.bg-theme').removeClass('fixed')
            $('.scrollToTop').fadeOut(100)
        }
    })

    $('.scrollToTop').click(function(){
        $('html,body').animate({scrollTop:0} , 1000)
    })

    setTimeout(function(){
        $('.loader').fadeOut(500)
    }, 1000)


    $('.peta').hide()
    $('.sub').hide()
    $('.main').hide()

    $('.toggle').click(function () {
        $(this).find('i').toggleClass('fa-bars fa-times')
        $('.main').slideToggle()
    })

    $('.main > li > a').click(function () {
        $(this).next('.sub').slideToggle()
    })

    $('.sub > li > a').click(function () {
        $(this).next('.peta').slideToggle()
    })

    $('#slider1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        // `autoplay: true,
        // autoplayTimeout: 5000,`
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('#slider2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },

            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1300: {
                items: 4
            }
        }
    })
    $('#slider3').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    })
    $('#slider4').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })


    $('#slider5').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 3
            }
        }
    })



    new WOW().init();

    function on()
    {
        document.getElementsByTagName('btn').style.background = "red"
    }



    // var owl = $('#slider4');
    // owl.owlCarousel();
    // // Listen to owl events:
    // owl.on('changed.owl.carousel', function (event) {
    //     new WOW().init();
    // })
    // var owl = $('#slider3');
    // owl.owlCarousel();
    // // Listen to owl events:
    // owl.on('changed.owl.carousel', function (event) {
    //     new WOW().init();
    // })


})


