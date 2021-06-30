const breakpoint = 768;

// カルーセル
$(".bl_bgiCarousel").slick({
  autoplay: true,
  arrows: false,
});

$window = $(window);

// スティッキーメニュー
$window.scroll(function () {
  const window_width = $window.width();
  if (window_width >= breakpoint) {
    const window_scroll = $(this).scrollTop();
    const window_height = $window.height();
    const $header = $(".ly_header");
    const is_sticky = "ly_header__sticky";

    if (window_scroll > window_height) {
      $header.addClass(is_sticky);
    } else {
      $header.removeClass(is_sticky);
    }
  }
});
