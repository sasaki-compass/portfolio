
const loadingAnimation = lottie.loadAnimation({
  container: document.getElementById('lottie-allow'), // アニメーションを表示するHTML要素
  renderer: 'svg',                                       // レンダリング形式（svg / canvas / html。基本はsvgでOK）
  loop: true,                                            // ループ再生するかどうか（ローディングならtrue）
  autoplay: true,                                        // 読み込み後、自動再生するかどうか
  path: 'assets/allow.json'                            // .jsonファイルへのパス
});
