// Lottieアニメーションの設定と再生
/*
const loadingAnimation = lottie.loadAnimation({
  container: document.getElementById('lottie-loading'), // アニメーションを表示するHTML要素
  renderer: 'svg',                                       // レンダリング形式（svg / canvas / html。基本はsvgでOK）
  loop: true,                                            // ループ再生するかどうか（ローディングならtrue）
  autoplay: true,                                        // 読み込み後、自動再生するかどうか
  path: 'assets/bounce.json'                            // .jsonファイルへのパス
});
*/
// JavaScript (main.js)

// ページ上のすべての '.lottie-overlay' クラスを持つ要素を取得
const overlays = document.querySelectorAll('.lottie-overlay');

// 取得した要素一つ一つに対して、ループ処理を行う
overlays.forEach(function(overlay) {
  // data-json属性からファイルパスを取得
  const jsonPath = overlay.getAttribute('data-json');

  // この要素に対してLottieを読み込む（autoplayはfalse）
  const animation = lottie.loadAnimation({
    container: overlay,
    renderer: 'svg',
    loop: true, // 1回だけ再生しきる
    autoplay: false, // 最初は止めておく
    path: jsonPath
  });

  // このアニメーションを管理する親要素（a.lottie-container）を取得
  const parent = overlay.closest('.lottie-container');

  // 親要素にマウスが乗ったとき（mouseenter）
  parent.addEventListener('mouseenter', () => {
    animation.goToAndPlay(0); // 最初（0フレーム）に戻して再生開始
  });

  // マウスが外れた時（mouseleave）は、CSSで非表示になるだけ。
  // アニメーションはそのまま最後まで再生させきります（パターン2）
});