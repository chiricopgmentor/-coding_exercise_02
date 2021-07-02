const breakpoint = 768;
const $body = $(".js_body");
const $header = $(".js_header");
const $headerNav = $(".js_headerNav");
const $headerNavMenu = $(".js_headerNav_link");
const $humburgerBtn = $(".js_humburgerBtn");
const $bgiCarousel = $(".js_bgiCarousel");
const is_sticky = "is_sticky";
const is_cross = "is_cross";
const is_close = "is_close";
const is_open = "is_spMenuOpen";
const is_noscroll = "is_noScroll";
$window = $(window);

// 画面サイズに応じたクラス付け替え
function responsiveClassJustify() {
  const window_width = $window.width();
  if (window_width > breakpoint) {
    $headerNav.removeClass(is_close);
    $headerNav.removeClass(is_open);
    $body.removeClass(is_noscroll);
    $humburgerBtn.removeClass(is_cross);
  } else {
    $header.removeClass(is_sticky);
    if (!$humburgerBtn.hasClass(is_cross)) {
      $headerNav.addClass(is_close);
    }
  }
}
// 初期表示時と画面リサイズ時に実行する
responsiveClassJustify();
$window.resize(function () {
  responsiveClassJustify();
});

// 背景カルーセル
$bgiCarousel.slick({
  autoplay: true,
  arrows: false,
});

// スクロールイベント
$window.scroll(function () {
  const window_width = $window.width();
  if (window_width > breakpoint) {
    const window_scroll = $(this).scrollTop();
    const window_height = $window.height();
    if (window_scroll >= window_height) {
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

// ナビゲーションメニュークリックイベント
$headerNavMenu.click(function () {
  if ($headerNav.hasClass(is_open)) {
    $humburgerBtn.removeClass(is_cross);
    $headerNav.addClass(is_close);
    $headerNav.removeClass(is_open);
    $body.removeClass(is_noscroll);
  }
});
