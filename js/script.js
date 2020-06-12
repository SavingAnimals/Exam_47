$(document).ready(function () {

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {

                $('.header__nav').addClass('change-Bg')

            }
            if ($(this).scrollTop() < 50) {

                $('.header__nav').removeClass('change-Bg')

            }
        });
    });


    $('.products__carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: "<button class='products__arrow-left prev'></button>",
        nextArrow: "<button class='products__arrow-right next'></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.testimonials__carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: false,
        autoplaySpeed: 3500,
        cssEase: 'linear',
        prevArrow: "<button class='testimonials__arrow-left prev'></button>",
        nextArrow: "<button class='testimonials__arrow-right next'></button>",
    });

    var acc = document.getElementsByClassName("questions__accordion-cell");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

});

function tabChange(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("about__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    };
    tablinks = document.getElementsByClassName("about__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    };
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
};



let count = 0;

function buy() {
    count++;
    document.getElementById('count').innerHTML = (`${count}`);
}
