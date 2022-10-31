$('.carousel').carousel({
  interval: 3000
})


$(document).ready(function() {
  var owl = $('.dest');
  owl.owlCarousel({
  margin: 10,
  loop: true,
  autoplay:true,
  autoplayTimeout:3000,
  responsiveClass:true,
  responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      700:{
        item: 3
      },
      1000: {
        items: 5
      }
  }
  })
})

$(document).ready(function() {
  var owl = $('.berita');
  owl.owlCarousel({
  margin: 10,
  loop: true,
  autoplay:true,
  autoplayTimeout:6000,
  responsiveClass:true,
  responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800:{
        item: 3
      },
      1000: {
        items: 3
      }
  }
  })
})

$('.nav-item a, .navbar a').on( 'click', function(e){
  var href = $(this).attr( 'href' );
  $( 'html, body' ).animate({
		scrollTop: $( href ).offset().top -50
  }, 1250, 'easeInOutExpo' );
  e.preventDefault();

});

  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
// })();
