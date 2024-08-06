$(".sandwich").click(function () {
  $(this).toggleClass("active");
  $(".header").toggleClass("active");
  if ($(".header").hasClass("active")) {
    $(".header__mobile").slideDown();
  } else {
    $(".header__mobile").slideUp();
  }
});

if ($(window).width() <= 992) {
  $(".banner__items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  });
}

$(".offer__items").slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  // autoplay: true,
  // autoplaySpeed: 2000,
  arrows: true,
  draggable: false,
  prevArrow: $(".slick-prev-offer"),
  nextArrow: $(".slick-next-offer"),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
      },
    },
  ],
});

$(".offer__item-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".offer__item-slider2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
  ],
});

$(".fancybox").fancybox({
  autoFocus: false,
  backFocus: false,
});
