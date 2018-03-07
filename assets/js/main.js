$(window).on("scroll", function(e) {
  if ($(this).scrollTop() > 20) {
      $("#navbar .navbar-wrapper").addClass("scrolled");
  } else {
    $("#navbar .navbar-wrapper").removeClass("scrolled");
  }
});
