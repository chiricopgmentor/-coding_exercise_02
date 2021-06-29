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
    const $head_menu = $(".ly_header_inner");
    const is_sticky = "ly_header_inner__sticky";

    if (window_scroll > window_height) {
      $head_menu.addClass(is_sticky);
    } else {
      $head_menu.removeClass(is_sticky);
    }
  }
});
