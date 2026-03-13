---
layout: base.njk
title: Сбор средств Юре на хостел
permalink: /fundraiser/
---

<video id="bg-video" autoplay loop muted playsinline style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; object-fit: cover; z-index: -1; opacity: 1; pointer-events: none;"><source src="/assets/img/promo.mp4" type="video/mp4"></video>

<style> 
  body, html, main, .wrapper, .site-content { background: transparent !important; background-color: transparent !important; } 
  .fund-container { max-width: 1000px; margin: 90px auto 40px; color: #fff; font-family: sans-serif; padding: 0 15px; } @media (max-width: 768px) { .fund-container { margin-top: 40px; } }
  .fund-header { text-align: center; background: rgba(0, 0, 0, 0.75); padding: 30px; border-radius: 12px; margin-bottom: 30px; border: 1px solid rgba(0, 255, 255, 0.3); box-shadow: 0 0 25px rgba(0, 255, 255, 0.15); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
  .fund-header h1 { color: #00ffff; margin-top: 0; font-size: 28px; }
  .methods-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 30px; }
  @media (max-width: 768px) { .methods-grid { grid-template-columns: 1fr; } }
  .method-card { background: rgba(17, 17, 17, 0.85); padding: 25px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); transition: all 0.3s ease; }
  .method-card:hover { border-color: rgba(0, 255, 255, 0.4); box-shadow: 0 10px 40px rgba(0,0,0,0.7); }
  .method-card h3 { color: #fff; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 12px; margin-top: 0; }
  .data-row { margin-bottom: 15px; }
  .data-label { color: #aaa; display: block; margin-bottom: 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
  
  /* Контейнер для значения и кнопки */
  .data-value { background: rgba(0,0,0,0.6); padding: 6px 6px 6px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center; gap: 10px; }
  .data-text { font-family: 'Courier New', monospace; font-size: 15px; word-break: break-all; color: #e0e0e0; }
  .crypto-value .data-text { color: #00ffcc !important; font-weight: bold; }
  
  /* Стиль кнопки копирования */
  .copy-btn { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 6px 12px; border-radius: 6px; cursor: pointer; transition: 0.2s; display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-size: 12px; font-weight: bold; flex-shrink: 0; height: 32px; min-width: 90px; }
  .copy-btn:hover { background: rgba(0,255,255,0.2); color: #00ffff; border-color: #00ffff; box-shadow: 0 0 10px rgba(0,255,255,0.3); }
  .copy-btn.copied { background: rgba(0,255,0,0.2); color: #00ff00; border-color: #00ff00; box-shadow: 0 0 10px rgba(0,255,0,0.3); }

  .contacts-block { background: rgba(0, 0, 0, 0.75); padding: 30px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
  .contacts-block h3 { color: #fff; margin-top: 0; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 12px; }
  .contacts-list p { margin: 12px 0; font-size: 16px; color: #ccc; display: flex; align-items: center; }
  .contacts-list strong { color: #fff; display: inline-block; width: 100px; flex-shrink: 0; }
  .contacts-list a { color: #00ffff; text-decoration: none; transition: 0.2s; }
  .contacts-list a:hover { text-decoration: underline; text-shadow: 0 0 8px rgba(0,255,255,0.5); }
  .status-badge { color: #ff4d4d; border: 1px solid #ff4d4d; padding: 3px 8px; border-radius: 6px; font-weight: bold; font-size: 14px; background: rgba(255, 77, 77, 0.1); }
</style>

<div class="fund-container">
  <div class="fund-header">
    <h1>🏠 Сбор средств Юре на оплату хостела</h1>
    <p style="font-size: 18px; line-height: 1.6; color: #ddd; max-width: 800px; margin: 0 auto;">Любая ваша помощь имеет огромное значение. Ниже представлены удобные способы для перевода. Спасибо за вашу солидарность и поддержку!</p>
  </div>

  <div class="methods-grid">
    <div class="method-card">
      <h3>🏦 PKO Bank Polski <span style="font-size: 14px; color: #aaa; font-weight: normal; margin-left: 10px;">(PLN / EUR)</span></h3>
      <div class="data-row">
        <span class="data-label">Номер карты (до 11/30)</span>
        <div class="data-value">
          <span class="data-text">4251 2513 6480 1214</span>
          <button class="copy-btn" onclick="copyText('4251 2513 6480 1214', this)">📋 Копия</button>
        </div>
      </div>
      <div class="data-row">
        <span class="data-label">IBAN (PL)</span>
        <div class="data-value">
          <span class="data-text">PL98 1020 1185 0000 4502 0419 7976</span>
          <button class="copy-btn" onclick="copyText('PL98102011850000450204197976', this)">📋 Копия</button>
        </div>
      </div>
      <div class="data-row">
        <span class="data-label">SWIFT</span>
        <div class="data-value">
          <span class="data-text">BPKOPLPW</span>
          <button class="copy-btn" onclick="copyText('BPKOPLPW', this)">📋 Копия</button>
        </div>
      </div>
    </div>

    <div class="method-card">
      <h3>💳 Revolut <span style="font-size: 14px; color: #aaa; font-weight: normal; margin-left: 10px;">(Multicurrency)</span></h3>
      <div class="data-row">
        <span class="data-label">Номер карты (до 10/30)</span>
        <div class="data-value">
          <span class="data-text">4165 9871 1998 8302</span>
          <button class="copy-btn" onclick="copyText('4165 9871 1998 8302', this)">📋 Копия</button>
        </div>
      </div>
      <div class="data-row">
        <span class="data-label">IBAN (International)</span>
        <div class="data-value">
          <span class="data-text">LT81 3250 0653 6173 6755</span>
          <button class="copy-btn" onclick="copyText('LT813250065361736755', this)">📋 Копия</button>
        </div>
      </div>
      <div class="data-row">
        <span class="data-label">SWIFT | Corr</span>
        <div class="data-value">
          <span class="data-text">REVOLT21 | CHASDEFX</span>
          <button class="copy-btn" onclick="copyText('REVOLT21', this)">📋 SWIFT</button>
        </div>
      </div>
      <div class="data-row">
        <span class="data-label">Банк получателя</span>
        <div style="font-size: 13px; color: #aaa; padding-top: 5px;">Revolut Bank UAB, Konstitucijos ave. 21B, Vilnius</div>
      </div>
    </div>

    <div class="method-card" style="grid-column: 1 / -1;">
      <h3 style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        🪙 Криптовалютные переводы
        <span style="font-size: 14px; color: #ff4d4d; border: 1px dashed #ff4d4d; padding: 4px 10px; border-radius: 6px; font-weight: normal;">⚠️ Переводите только в указанной сети!</span>
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 20px; margin-top: 20px;">
        <div class="data-row">
          <span class="data-label">Bitcoin (BTC Network)</span>
          <div class="data-value crypto-value">
            <span class="data-text">bc1qp3gzyyknnlzcfll6yks4lezjfdaustan6w64e9</span>
            <button class="copy-btn" onclick="copyText('bc1qp3gzyyknnlzcfll6yks4lezjfdaustan6w64e9', this)">📋 Копия</button>
          </div>
        </div>
        <div class="data-row">
          <span class="data-label">USDT (TRC-20 / Tron)</span>
          <div class="data-value crypto-value">
            <span class="data-text">TQMo2KNXE8n961ddNFfJdcH4ZixVmMeU8U</span>
            <button class="copy-btn" onclick="copyText('TQMo2KNXE8n961ddNFfJdcH4ZixVmMeU8U', this)">📋 Копия</button>
          </div>
        </div>
        <div class="data-row">
          <span class="data-label">USDC (Solana)</span>
          <div class="data-value crypto-value">
            <span class="data-text">FKyHQKi7st4SWQQoKoEJ4zSSyX54AFcnykEHwPjAqYNJ</span>
            <button class="copy-btn" onclick="copyText('FKyHQKi7st4SWQQoKoEJ4zSSyX54AFcnykEHwPjAqYNJ', this)">📋 Копия</button>
          </div>
        </div>
        <div class="data-row">
          <span class="data-label">ETH (Arbitrum)</span>
          <div class="data-value crypto-value">
            <span class="data-text">0xb6fd3908EB2BC7a428Aa905dC7Dab42884AEf320</span>
            <button class="copy-btn" onclick="copyText('0xb6fd3908EB2BC7a428Aa905dC7Dab42884AEf320', this)">📋 Копия</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="contacts-block">
    <h3>👤 Юрий Чудинович</h3>
    <div class="contacts-list">
      <p><strong>Статус:</strong> <span class="status-badge">Политзаключённый</span></p>
      <p><strong>Адрес:</strong> Польша, Варшава, ul. Lokcowa 12</p>
      <p><strong>Телефон:</strong> <a href="tel:+48795972990">+48 795-972-990</a></p>
      <p><strong>Email:</strong> <a href="mailto:6900908@gmail.com">6900908@gmail.com</a></p>
      <p><strong>Соцсети:</strong> <a href="#">Telegram</a> &nbsp;|&nbsp; <a href="#">Instagram</a></p>
    </div>
  </div>
</div>

<script>
  function copyText(text, btn) {
    navigator.clipboard.writeText(text).then(function() {
      var originalHtml = btn.innerHTML;
      btn.innerHTML = '✅ Скопировано';
      btn.classList.add('copied');
      
      // Возвращаем кнопку в нормальное состояние через 2 секунды
      setTimeout(function() {
        btn.innerHTML = originalHtml;
        btn.classList.remove('copied');
      }, 2000);
    }).catch(function(err) {
      console.error('Ошибка копирования: ', err);
      btn.innerHTML = '❌ Ошибка';
    });
  }
</script>