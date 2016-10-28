$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});