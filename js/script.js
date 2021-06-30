const breakpoint = 768;
$window = $(window);
const $header = $(".ly_header");
const is_sticky = "ly_header__sticky";

// 背景カルーセル
$(".bl_bgiCarousel").slick({
  autoplay: true,
  arrows: false,
});

// スクロールイベント
$window.scroll(function () {
  const window_width = $window.width();
  if (window_width >= breakpoint) {
    const window_scroll = $(this).scrollTop();
    const window_height = $window.height();
    if (window_scroll > window_height) {
      // スティッキーメニュー
      $header.addClass(is_sticky);
    } else {
      $header.removeClass(is_sticky);
    }
  }
});

// 画面リサイズイベント
$window.resize(function () {
  const window_width = $window.width();
  if (window_width >= breakpoint) {
    ;
  } else {
    $header.removeClass(is_sticky);
  }
});