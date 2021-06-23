// カルーセル
$('.carousel').slick({
  // autoplay: true,
  arrows: false,
});

$window = $(window);

// スティッキーメニュー
$window.scroll(function() {
  const window_scroll = $(this).scrollTop();
  const window_height = $window.height();
  const $head_menu = $('.ly_headerContainer');
  const is_sticky = 'section_container--sticky_menu';

  if (window_scroll > window_height) {
    $head_menu.addClass(is_sticky);
  } else {
    $head_menu.removeClass(is_sticky);
  }
});