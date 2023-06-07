$(document).ready(function() {
    console.log("The site has finished loading.");
    //resize the caret on load
    updateSvgSize();

    //resize the caret on resize
    $(window).on('resize', updateSvgSize);

    //mobile nav script
    $('.mobile-nav-button').click(function() {
        $('.nav-menu').toggleClass('open');
    });

    //add active class to the submenu
    $('.caret').click(function() {
      var $submenu = $(this).siblings('.submenu');

      // Toggle other active submenus
      $('.submenu.active').not($submenu).removeClass('active');

      // Toggle the clicked submenu
      $submenu.toggleClass('active');
    });

  });

  //function to adjust size of caret
  function updateSvgSize() {
    var windowWidth = $(window).width();
    
    if (windowWidth >= 1201) {
      $('.caret-svg').attr('width', '20');
      $('.caret-svg').attr('height', '15');
    } else {
      $('.caret-svg').attr('width', '40');
      $('.caret-svg').attr('height', '20');
    }
  }
  