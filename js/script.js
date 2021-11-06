// smooth scrolling to anchor
$(document).on('click', 'a[data-scroll^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: ($($.attr(this, 'data-scroll')).offset().top)
  }, 700);
});



// dropdown menu

// $('.dropdown').click(function () {
//   $(this).attr('tabindex', 1).focus();
//   $(this).toggleClass('active');
//   $(this).find('.dropdown-menu').slideToggle(300);
// });

// $('.dropdown').focusout(function () {
//   $(this).removeClass('active');
//   $(this).find('.dropdown-menu').slideUp(300);
// });

// $('.dropdown .dropdown-menu li').click(function () {
//   $(this).parents('.dropdown').find('span').text($(this).text());
//   $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
// });


// $(function() {
//   var output = document.querySelectorAll('output')[0];

//   $(document).on('input', 'input[type="range"]', function(e) {
//     output.innerHTML = e.currentTarget.value;
//   });

//   $('input[type=range]').rangeslider({
//     polyfill: false
//   });
// });






