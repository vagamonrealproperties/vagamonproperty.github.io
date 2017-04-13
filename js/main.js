
    $(document).ready(function() {


      $('.main-nav ul.navbar-nav a').click(function(event) {
        event.preventDefault();
        var link = this;
        $.smoothScroll({
          scrollTarget: link.hash,
          speed:1000

        });
      });
      $('.main-nav .navbar-nav').on('click', 'li', function() {
          $('.main-nav .navbar-nav li.active').removeClass('active');
          $(this).addClass('active');
      });
      $('#about-us').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows : false,
         customPaging: function (slider, i) {
            return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
        }

      });
      $('#testimonials-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        adaptiveHeight: false,
        arrows : false,
         slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
         customPaging: function (slider, i) {
            return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
        }

      });


    });


// Can also be used with $(document).ready()
$(window).load(function() {
  $('#bg-slider').flexslider({
  animation: "slide",
  controlNav: false,   
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")

  });
});

