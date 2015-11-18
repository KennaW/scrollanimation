jQuery(document).ready(function() {

  $("#scroll").click(function() {
      $('html, body').animate({
          scrollTop: $("#elementtoScrollToID").offset().top
      }, 2000);
  });
});
