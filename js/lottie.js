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

const buttonEl = document.getElementById('lottie-button');

const buttonAnimation = lottie.loadAnimation({
  container: buttonEl,
  renderer: 'svg',
  loop: false,       // 1回だけ再生させたいのでfalse
  autoplay: false,   // 最初は止めておくのでfalse
  path: 'assets/bounce.json'
});

// ボタンがクリックされた時の処理
buttonEl.addEventListener('click', () => {
  buttonAnimation.goToAndPlay(0); // 最初のフレーム（0）に戻して再生する
});