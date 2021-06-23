// カルーセル
$('.bl_bgiCarousel').slick({
  autoplay: true,
  arrows: false,
});

$window = $(window);

// スティッキーメニュー
$window.scroll(function() {
  const window_scroll = $(this).scrollTop();
  const window_height = $window.height();
  const $head_menu = $('.bl_headerMenu_wrapper');
  const is_sticky = 'bl_headerMenu_wrapper__sticky';

  if (window_scroll > window_height) {
    $head_menu.addClass(is_sticky);
  } else {
    $head_menu.removeClass(is_sticky);
  }
});