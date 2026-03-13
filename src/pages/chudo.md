---
layout: base.njk
title: "Проект CHUDO: Децентрализованное будущее"
permalink: /chudo/
---

<video id="bg-video" autoplay loop muted playsinline style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; object-fit: cover; z-index: -1; opacity: 1; pointer-events: none;">
    <source src="/assets/img/promo.mp4" type="video/mp4">
</video>

<style>
    /* Делаем системный фон прозрачным, чтобы видео было видно */
    body, html, main, .wrapper, .site-content { 
        background: transparent !important; 
        background-color: transparent !important; 
    }
    
    .chudo-container {
        position: relative;
        z-index: 10;
        max-width: 1000px; 
        margin: 40px auto 80px; 
        padding: 40px;
        background: rgba(10, 15, 25, 0.65); /* Легкое затемнение для читаемости */
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(0, 255, 255, 0.15); 
        border-radius: 16px; 
        color: #e0e0e0; 
        font-family: 'Segoe UI', Roboto, Helvetica, sans-serif; 
        line-height: 1.7;
        box-shadow: 0 10px 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(0, 255, 255, 0.05);
    }

    .chudo-container h1, .chudo-container h2, .chudo-container h3 {
        font-family: 'Playfair Display', serif;
        color: #fff;
    }

    .chudo-accent { color: #00ffff; }
    
    @media (max-width: 768px) {
        .chudo-container { padding: 20px; margin-top: 20px; }
    }
</style>

<div class="chudo-container">
    
    <img src="/img/photo_2026-03-12_00-13-33.jpg" alt="CHUDO Project" style="width: 100%; max-height: 500px; object-fit: cover; border-radius: 10px; margin-bottom: 2.5rem; box-shadow: 0 8px 25px rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.1);">

    <h1 style="font-size: 2.8rem; margin-bottom: 1.5rem; text-shadow: 0 2px 10px rgba(0, 255, 255, 0.3); text-align: center;">CHUDO: Цифровая крепость свободного общества</h1>

    <p style="font-size: 1.2rem; text-align: center; margin-bottom: 3rem; color: #b0c4de;">Экосистема <strong>CHUDO</strong> создается как независимый цифровой оплот для борцов с диктатурой, гражданских активистов и всех, кому важна абсолютная приватность, свобода слова и финансовая независимость вне контроля авторитарных режимов.</p>

    <h2 style="border-bottom: 1px solid rgba(0, 255, 255, 0.2); padding-bottom: 10px; margin-top: 3rem; margin-bottom: 1.5rem;"><span class="chudo-accent">Исторический старт: 16 декабря 2025 года</span></h2>
    <p>Разработка монеты CHUDO неразрывно связана с правозащитным движением. <strong>16 декабря 2025 года</strong> первый смарт-контракт нашего токена был официально развернут и запущен в блокчейне. Эта дата навсегда войдет в историю, так как именно в этот знаковый день был учрежден <strong><a href="https://000585.github.io/com/?lang=ru" target="_blank" style="color: #00ffff; text-decoration: none; border-bottom: 1px dashed #00ffff;">Комитет солидарности репрессированных</a></strong>.</p>
    <p>Это не просто технологическое совпадение. Это заложенный в генезис-код символ нашей главной миссии: создать надежный, неподконтрольный властям финансовый и информационный инструмент для поддержки тех, кто пострадал за свои убеждения, кто находится в застенках или был вынужден покинуть свой дом.</p>

    <h2 style="border-bottom: 1px solid rgba(0, 255, 255, 0.2); padding-bottom: 10px; margin-top: 3rem; margin-bottom: 1.5rem;"><span class="chudo-accent">Независимый децентрализованный мессенджер</span></h2>
    <p>В условиях, когда спецслужбы контролируют трафик, а популярные платформы могут пойти на сделку с властями, мы разрабатываем полностью децентрализованный мессенджер CHUDO. Он станет безопасной гаванью для координации действий и тайной переписки.</p>
    
    <ul style="margin-left: 20px; margin-bottom: 2rem; list-style-type: square; color: #00ffff;">
        <li><span style="color: #e0e0e0;"><strong>P2P Архитектура (Без центральных серверов):</strong> В CHUDO нет "главного рубильника". Отключить, заблокировать или изъять серверы мессенджера физически невозможно, так как сеть поддерживается самими пользователями по всему миру.</span></li>
        <li style="margin-top: 15px;"><span style="color: #e0e0e0;"><strong>Военные стандарты шифрования:</strong> Мы используем протоколы сквозного шифрования (End-to-End Encryption) на базе алгоритма AES-256 в связке с криптографией на эллиптических кривых. Ключи дешифровки генерируются и остаются <em>только на вашем устройстве</em>. Ни провайдер, ни товарищ майор, ни даже разработчики CHUDO не могут прочитать ваши сообщения.</span></li>
        <li style="margin-top: 15px;"><span style="color: #e0e0e0;"><strong>Анонимность уровня Tor:</strong> Маршрутизация трафика скрывает не только содержание разговора, но и сам факт связи между конкретными узлами сети.</span></li>
    </ul>

    <h2 style="border-bottom: 1px solid rgba(0, 255, 255, 0.2); padding-bottom: 10px; margin-top: 3rem; margin-bottom: 1.5rem;"><span class="chudo-accent">KRC-20: Интеграция Web3 и криптокошелька</span></h2>
    <p>Мессенджер CHUDO — это не просто чат. Это полноценный некастодиальный криптокошелек, бесшовно встроенный в интерфейс общения. Вы можете отправлять средства соратникам, поддерживать семьи политзаключенных и собирать пожертвования так же легко, как отправить текстовое сообщение.</p>
    <p>Токеномика проекта базируется на стандарте <strong>KRC-20 (КАС-20)</strong>. Почему мы выбрали именно этот алгоритм?</p>
    <ul style="margin-left: 20px; margin-bottom: 2rem; list-style-type: square; color: #00ffff;">
        <li><span style="color: #e0e0e0;"><strong>BlockDAG Архитектура:</strong> В отличие от классического блокчейна, сети на базе Kaspa (KRC-20) позволяют обрабатывать блоки параллельно. Это дает высочайшую пропускную способность и мгновенные подтверждения транзакций.</span></li>
        <li><span style="color: #e0e0e0;"><strong>Минимальные комиссии:</strong> Перевод средств не должен "съедать" сами средства. Стандарт KRC-20 обеспечивает микроскопические комиссии, что критически важно для краудфандинга и регулярной помощи.</span></li>
        <li><span style="color: #e0e0e0;"><strong>Устойчивость к цензуре:</strong> Сеть Proof-of-Work (PoW) гарантирует честность эмиссии и невозможность блокировки кошельков по чьему-либо приказу. Ваши деньги принадлежат только вам.</span></li>
    </ul>
    
    <div style="margin-top: 4rem; padding: 30px; background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 0, 0, 0.5)); border: 1px solid rgba(0, 255, 255, 0.3); border-radius: 8px; text-align: center;">
        <h3 style="margin-top: 0; font-size: 1.8rem;">Код CHUDO пишется прямо сейчас.</h3>
        <p style="margin-bottom: 0; font-size: 1.1rem; opacity: 0.9;">Технологии — наше оружие. Децентрализация — наша защита. Солидарность — наша сила.</p>
    </div>

</div>