$(document).ready(function () {
  $(".creators__slider").slick({
    slidesToShow: 5,
    infinite: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".quick-bytes__slider").slick({
    slidesToShow: 1,
    dots: true,
  });
});

$(".burger__icon").click(function () {
  $(".burger__icon").toggleClass("menu-open");
  $(".menu").toggleClass("menu-opened");
  $("body").toggleClass("lock");
});

