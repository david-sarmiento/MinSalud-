
  function myFunction(x) {
    if (x.matches) { // If media query matches 

        $(document).on('ready', function() { 
    
          $(".center").slick({
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 6,
            autoplay: false,
            autoplaySpeed: 1500,
          }); 
        });


    } else { 

      $(document).on('ready', function() { 

        

          $(".center").slick({
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 1500,
          }); 
        });

    }
  }

  var x = window.matchMedia("(max-width: 600px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
