const breakpoint = 768;
$window = $(window);
const $header = $(".ly_header");
const $headerNav = $(".bl_headerNav");
const is_sticky = "ly_header__sticky";
const is_menuClose = "bl_headerNav__close";

// 画面サイズに応じたクラス付け替え
function responsiveClassJustify() {
  const window_width = $window.width();
  if (window_width >= breakpoint) {
    $headerNav.removeClass(is_menuClose);
  } else {
    $header.removeClass(is_sticky);
    $headerNav.addClass(is_menuClose);
  }
}
// 初期表示時と画面リサイズ時に実行する
responsiveClassJustify();
$window.resize(responsiveClassJustify());

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

// ハンバーガーボタンクリックイベント
$('.bl_humburgerBtn').click(function () {
  $('.bl_humburgerBtn').toggleClass('bl_humburgerBtn__cross');
  $('.bl_headerNav').toggleClass('bl_headerNav__close');
  // $('body').toggleClass('noscroll');
});

// サイトメニュークリックイベント
// $('.in_site_link').click(function () {
//   $('.hamburger_btn__bar').removeClass('hamburger_btn__bar--cross');
//   $('.header_nav').removeClass('header_nav--menu_open');
//   $('body').removeClass('noscroll');
// });