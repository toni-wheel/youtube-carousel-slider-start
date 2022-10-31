$(document).ready(function () {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement("div");
  sliderCounter.classList.add("slider__counter");

  var updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + "/" + slidesCount);
  };

  $(".slider").on("init", function (event, slick) {
    $(".slider").append(sliderCounter);
    updateSliderCounter(slick);
  });

  $(".slider").on("afterChange", function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: "50px",
    // autoplay: true,
    // autoplaySpeed: 1500,
  });
  $(".slick-prev").text("❯");
  $(".slick-next").text("❯");
});
