(function () {
  'use strict';

  // 二重生成防止
  if (document.getElementById('scroll-to-top-button')) {
    return;
  }

  // ボタン作成
  const button = document.createElement('button');
  button.id = 'scroll-to-top-button';
  button.innerHTML = '↑';
  button.setAttribute('aria-label', 'ページ上部へ移動');

  // スタイル
  Object.assign(button.style, {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#4a4a4a',
    color: '#fff',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: '9999',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    display: 'none',
    opacity: '0.85'
  });

  // ホバー時
  button.addEventListener('mouseenter', function () {
    button.style.opacity = '1';
  });

  button.addEventListener('mouseleave', function () {
    button.style.opacity = '0.85';
  });

  // クリックでトップへ
  button.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // スクロール時の表示制御
  function toggleButton() {
    if (window.scrollY > 300) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }

  window.addEventListener('scroll', toggleButton);

  // 追加
  document.body.appendChild(button);

  // 初期状態反映
  toggleButton();
})();
