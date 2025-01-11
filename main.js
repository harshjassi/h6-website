
(function () {

(function () {
   'use strict';

   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 60
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });



// Function to pause video at a specific time
function pauseVideoAtTime(videoElement, pauseTime) {
  videoElement.addEventListener('timeupdate', function() {
      // Check if the current time of the video is greater than or equal to the pause time
      if (videoElement.currentTime >= pauseTime) {
          // Pause the video
          videoElement.pause();
      }
  }, false);
}

// Call the function to pause the video at a specific time
var introVideo = document.getElementById('intro-video');
var pauseTime = 43; // Adjust this value to the desired time
pauseVideoAtTime(introVideo, pauseTime);


// Function to make paragraph invisible after a specified time
function makeParagraphInvisibleAfterTime(paragraphElement, duration) {
  setTimeout(function() {
      paragraphElement.style.opacity = '0'; // Make the paragraph invisible
  }, duration);
}

// Call the function to make the paragraph invisible after a specified time
var paragraph = document.querySelector('.intro-text p');
var hideDuration = 40000; // Adjust this value to the desired time in milliseconds
makeParagraphInvisibleAfterTime(paragraph, hideDuration);
}());


}
)();