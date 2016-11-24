///// SMOOTH SCROLLING /////

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 600);
        return false;
      }
    }
  });
});


///// HEADER /////

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});

///// FORM /////

$(document).ready(function () {

  var lunchordinner = $('#reservationform input:radio[name=lunchordinner]');

  var lunch = $('#reservationform select[name="lunchtimes"]');
  var dinner = $('#reservationform select[name="dinnertimes"]');
  var all = $('#reservationform select[name="lunchtimes"],[name="dinnertimes"]');

  lunchordinner.change(function () {
    var value = this.value;
    all.addClass('hidden');

    if (value == 'lunch') {
      lunch.removeClass('hidden');
      console.log("lunch");
    } else if (value == 'dinner') {
      dinner.removeClass('hidden');
      console.log("dinner");
    }

  });

});