const breakpoint = 768;
$window = $(window);
const $body = $('.js_body')
const $header = $('.js_header');
const $headerNav = $('.js_headerNav');
const $humburgerBtn = $('.js_humburgerBtn');
const $bgiCarousel = $('.js_bgiCarousel');
const is_sticky = 'is_sticky';
const is_cross = 'is_cross';
const is_close = 'is_close';
const is_open = 'is_spMenuOpen';
const is_noscroll = 'is_noScroll';

// 画面サイズに応じたクラス付け替え
function responsiveClassJustify() {
  const window_width = $window.width();
  if (window_width >= breakpoint) {
    $headerNav.removeClass(is_close);
    $body.removeClass(is_noscroll);
  } else {
    $header.removeClass(is_sticky);
    $headerNav.addClass(is_close);
  }
}
// 初期表示時と画面リサイズ時に実行する
responsiveClassJustify();
$window.resize(responsiveClassJustify());

// 背景カルーセル
$bgiCarousel.slick({
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
$humburgerBtn.click(function () {
  $humburgerBtn.toggleClass(is_cross);
  $headerNav.toggleClass(is_close);
  $headerNav.toggleClass(is_open);
  $body.toggleClass(is_noscroll);
});

// サイトメニュークリックイベント
// $('.in_site_link').click(function () {
//   $('.hamburger_btn__bar').removeClass('hamburger_btn__bar--cross');
//   $('.header_nav').removeClass('header_nav--menu_open');
//   $('body').removeClass('noscroll');
// });