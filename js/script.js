const breakpoint = 768;
$window = $(window);
const $body = $('body')
const $header = $('.ly_header');
const $headerNav = $('.bl_headerNav');
const $humburgerBtn = $('.bl_humburgerBtn');
const $bgiCarousel = $('.js_bgiCarousel');
const is_sticky = 'ly_header__sticky';
const is_btn_cross = 'bl_humburgerBtn__cross';
const is_menuClose = 'bl_headerNav__close';
const is_menuOpen = 'bl_headerNav__spMenuOpen';
const is_noscroll = 'is_noScroll';

// 画面サイズに応じたクラス付け替え
function responsiveClassJustify() {
  const window_width = $window.width();
  if (window_width >= breakpoint) {
    $headerNav.removeClass(is_menuClose);
    $body.removeClass(is_noscroll);
  } else {
    $header.removeClass(is_sticky);
    $headerNav.addClass(is_menuClose);
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
  $humburgerBtn.toggleClass(is_btn_cross);
  $headerNav.toggleClass(is_menuClose);
  $headerNav.toggleClass(is_menuOpen);
  $body.toggleClass(is_noscroll);
});

// サイトメニュークリックイベント
// $('.in_site_link').click(function () {
//   $('.hamburger_btn__bar').removeClass('hamburger_btn__bar--cross');
//   $('.header_nav').removeClass('header_nav--menu_open');
//   $('body').removeClass('noscroll');
// });