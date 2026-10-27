jQuery(document).ready(function ($) {
  var menu = $('header nav');
  var button = $('.menu-button');
  if (menu.length && button.length) {
    button.on('click', function () {
      menu.toggleClass('active');
      button.toggleClass('active');
    });
  }
});
