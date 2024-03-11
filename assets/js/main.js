AOS.init();

$('.slider').slick({
  centerMode: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1000,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      Infinity: true,
      slidesToShow: 1
    },
  }]
});




$('.custom-slick-slider .multiple-items').slick({
  centerMode: true,
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      Infinity: true,
      slidesToShow: 1
    },
  }]
});




// Testimonial
$(document).ready(function () {
  $('.testimonial-items').slick({
    centerMode: true,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  });
});





//Animation
(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').css('top', '0px');
    } else {
      $('.sticky-top').css('top', '-100px');
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });


  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

})(jQuery);




// Index Page Research portion 
$(document).ready(function () {
  var descriptions = {
    '01': "Before delving into the manuscript, we form a clear understanding of your idea, instructions and requirements. We then conduct necessary research and devise a preliminary outline and a tentative table of contents for your review.",
    '02': "Once you approve the outline and table of contents, your dedicated writing team will write and share drafts of the manuscript with you chapter by chapter. Throughout the writing process, you have the facility of requesting an unlimited number of revisions till you are 100% satisfied.",
    '03': "Every draft we share with you is edited and proofread once written. Once we complete writing your manuscript, our editors perform a critical assessment of it, proofread and edit it thoroughly before finalisation.",
    '04': "Once your manuscript is finalised and approved from your end, we set the layout of the book, format it extensively, perform typesetting as per International publishing standards and design the book's cover as per your preferences."
  };
  function changeDescription(stepNumber) {
    $('.step-description p').text(descriptions[stepNumber]);
    $('.step12').removeClass('active-step');
    $('#step12' + stepNumber).addClass('active-step');
  }

  changeDescription('01');

  $('.step12').click(function () {
    var stepNumber = $(this).find('.step-number').text().trim();
    changeDescription(stepNumber);
  });
});


$(document).ready(function () {
  $('#step1 .step-title').addClass('active-step');
  $('.step-title ').click(function () {
    $('.step-title').removeClass('active-step');
    $(this).addClass('active-step');
  });
});




//  Modal index and About
$(document).ready(function () {
  var page = window.location.pathname.split('/').pop();

  if (page === 'index.html' || page === 'about_us.html') {
    $('#exampleModal').modal('show');
  }
});






// Ebook Portion Index Page
$(document).ready(function () {
  var currentContent = 0;
  var totalContents = $('.paragraph-item').length;

  function showContent(index) {
    $('.paragraph-item').removeClass('active');
    $('.paragraph-item').eq(index).addClass('active');

    $('.image-container img').hide();
    $('.image-container img').eq(index).show();

    updateDots(index);
  }

  function updateDots(index) {
    $('.step').removeClass('active');
    $('.step').eq(index).addClass('active');
  }

  $('.image-container img').hide();
  $('.image-container img').eq(0).show();

  showContent(0);

  var contentInterval = setInterval(function () {
    currentContent = (currentContent + 1) % totalContents;
    showContent(currentContent);
  }, 5000);

  $('form').focusin(function () {
    clearInterval(contentInterval);
  });

  $('form').focusout(function () {
    contentInterval = setInterval(function () {
      currentContent = (currentContent + 1) % totalContents;
      showContent(currentContent);
    }, 5000);
  });
});



$(document).ready(function () {
  // Scroll to Top
  $('#scrollToTopBtn').click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // Scroll to Bottom
  $('#scrollToBottomBtn').click(function () {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });

});

