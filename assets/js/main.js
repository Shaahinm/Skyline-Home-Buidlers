$(window).on("scroll", function(e) {
  if ($(this).scrollTop() > 20) {
    $("#navbar .navbar-wrapper").addClass("scrolled");
  } else {
    $("#navbar .navbar-wrapper").removeClass("scrolled");
  }  
});

$(function(){
  $("#btn-send").click(function(e) {
    e.stopPropagation();
    var msg = $("#msg").val();
    var email = $("#email").val();
    var name = $("#name").val();
    if (msg.length === 0 || email.length === 0 || name.length === 0) {
      alert("Please Fill all the fields");
    } else {
      window.open(`mailto:test@example.com?subject=${name}&body=${msg}`);
    }
  });
});
