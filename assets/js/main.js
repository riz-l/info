$(document).ready(function() {
  // Navigation burger menu open and close
  $(".menu-toggler").on("click", function() {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function() {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  // Navigation scroll on-click
  $('nav a[href*="#"]').on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100
      },
      2000
    );
  });

  // Up footer button
  $("#up").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      2000
    );
  });

  // Bootstrap modal
  $("#myModal").on("shown.bs.modal", function() {
    $("#myInput").trigger("focus");
  });

  // Animate on scroll
  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true
  });
});
