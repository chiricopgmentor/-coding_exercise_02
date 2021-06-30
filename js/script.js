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

// ハンバーガーボタンクリックイベント
$('.bl_humburgerBtn').click(function () {
  $('.bl_humburgerBtn').toggleClass('bl_humburgerBtn__cross');
  // $('.header_nav').toggleClass('header_nav--menu_open');
  // $('body').toggleClass('noscroll');
});

// サイトメニュークリックイベント
// $('.in_site_link').click(function () {
//   $('.hamburger_btn__bar').removeClass('hamburger_btn__bar--cross');
//   $('.header_nav').removeClass('header_nav--menu_open');
//   $('body').removeClass('noscroll');
// });