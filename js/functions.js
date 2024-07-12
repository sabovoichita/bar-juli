//$(window).on('load', function() {
//	$('#open').modal('show');
//});
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $("header").addClass("shrink");
  } else {
    $("header").removeClass("shrink");
  }
});

$(document).ready(function () {
  $("#opening").fancybox().trigger("click");
  $(".modal-menu-link").click(function () {
    $("#open").modal("hide");
  });
  $(".modal-menu-link").modal("hide").trigger("click");
  $(".owl-1").owlCarousel({
    loop: true,
    scroll: true,
    nav: false,
    dots: true,
    dotsData: true,
    margin: 0,
    autoHeight: true,
    //touchDrag: false,
    //mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  var owl = $(".owl-carousel");
  $(".owl-dot").click(function () {
    owl.trigger("to.owl.carousel", [$(this).index(), 1000]);
  });

  $(".owl-2").owlCarousel({
    loop: true,
    scroll: true,
    nav: false,
    dots: false,
    dotsData: false,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });
});

$(document).ready(function () {
  $("a[class*=blank]").click(function () {
    window.open(this.href);
    return false;
  });
});
