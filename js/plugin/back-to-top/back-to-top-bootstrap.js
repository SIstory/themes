// create the back to top button
         $('body').prepend('<a href="#" class="btn btn-primary btn-sm back-to-top" role="button">⇧</a>');
         
         var amountScrolled = 300;
         
         $(window).scroll(function() {
             if ( $(window).scrollTop() > amountScrolled ) {
                 $('a.back-to-top').fadeIn('slow');
             } else {
                 $('a.back-to-top').fadeOut('slow');
             }
         });
         
         $('a.back-to-top').click(function() {
         $('html, body').animate({
             scrollTop: 0
                 }, 700);
             return false;
         });