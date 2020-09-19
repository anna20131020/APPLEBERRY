$(function () {
  $('.single-item').slick({
    dots: true,
    dotsClass: 'slide-dots'
  });
});

$(function () {
  $('.js-menu__item__link').each(function () {
    $(this).on('click', function () {
      $("+.submenu", this).slideToggle();
      return false;
    });
  });
});



$(function () {
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
