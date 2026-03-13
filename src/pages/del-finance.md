---
layout: base.njk
title: "Финансовый регламент Партии «ДЕЛ»"
permalink: /del-finance/
---

<video id="bg-video" autoplay loop muted playsinline style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; object-fit: cover; z-index: -1; opacity: 1; pointer-events: none;">
    <source src="/assets/img/promo.mp4" type="video/mp4">
</video>

<style>
    body, html, main, .wrapper, .site-content { background: transparent !important; background-color: transparent !important; }
    
    .document-container {
        position: relative;
        z-index: 10;
        max-width: 900px; 
        margin: 40px auto 80px; 
        padding: 50px;
        background: rgba(15, 15, 5, 0.85); /* Легкий темный фон */
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 215, 0, 0.3); /* Золотистая рамка */
        border-radius: 4px;
        color: #e0e0e0; 
        font-family: 'Courier New', Courier, monospace; 
        line-height: 1.6;
        box-shadow: 0 10px 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(255, 215, 0, 0.05);
    }

    .document-header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #ffd700; padding-bottom: 20px; }
    .document-header h1 { font-family: 'Playfair Display', serif; color: #fff; font-size: 2.2rem; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
    
    .fin-section { margin-top: 35px; border-left: 3px solid #ffd700; padding-left: 20px; }
    .fin-section h2 { font-family: 'Segoe UI', sans-serif; color: #ffd700; font-size: 1.5rem; margin-top: 0; margin-bottom: 15px; }
    .fin-section p { margin-bottom: 15px; font-size: 1.1rem; text-align: justify; font-family: 'Segoe UI', sans-serif; }
    .fin-section ul { font-size: 1.05rem; list-style-type: square; color: #ffd700; font-family: 'Segoe UI', sans-serif; }
    .fin-section li { margin-bottom: 10px; }
    .fin-section li span { color: #e0e0e0; }
    
    .crypto-block { margin-top: 30px; padding: 25px; background: linear-gradient(135deg, rgba(255,215,0,0.05), rgba(0,0,0,0.5)); border: 1px dashed rgba(255, 215, 0, 0.5); border-radius: 8px; font-family: 'Segoe UI', sans-serif; text-align: center; }
    .crypto-block h3 { margin-top: 0; color: #ffd700; font-size: 1.3rem; margin-bottom: 15px; text-transform: uppercase; }
    
    .btn-back { display: inline-block; margin-bottom: 20px; padding: 10px 20px; background: rgba(255, 215, 0, 0.1); color: #ffd700; text-decoration: none; border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 4px; font-family: 'Segoe UI', sans-serif; transition: 0.3s; }
    .btn-back:hover { background: rgba(255, 215, 0, 0.2); border-color: #ffd700; color: #fff; }
</style>

<div style="max-width: 900px; margin: 20px auto 0;">
    <a href="/del/" class="btn-back">← Назад к реестру документов</a>
</div>

<div class="document-container">
    <div class="document-header">
        <h1>ФИНАНСОВЫЙ РЕГЛАМЕНТ</h1>
        <p style="font-family: 'Segoe UI', sans-serif; font-size: 1.2rem; color: #a0aab5;">Декларация прозрачности и децентрализованного финансирования</p>
    </div>

    <p style="font-size: 1.15rem; text-align: center; margin-bottom: 40px; font-style: italic; color: #b0c4de; font-family: 'Segoe UI', sans-serif;">Доверие общества — главный капитал любой политической силы. Партия «ДЕЛ» внедряет стандарты абсолютной финансовой прозрачности, исключающие теневые схемы, коррупцию и зависимость от олигархического капитала.</p>

    <div class="fin-section">
        <h2>1. Принципы формирования бюджета</h2>
        <p>Финансовая независимость Партии обеспечивается исключительно за счет краудфандинга и поддержки гражданского общества.</p>
        <ul>
            <li><span><strong>Децентрализация:</strong> Партия финансируется множеством мелких пожертвований от сторонников, а не крупными траншами от теневых спонсоров.</span></li>
            <li><span><strong>Чистота средств:</strong> Категорически запрещено принимать финансирование от лиц, причастных к финансированию диктаторского режима, а также от структур с непрозрачным происхождением капитала.</span></li>
        </ul>
    </div>

    <div class="fin-section">
        <h2>2. Защита доноров в условиях репрессий</h2>
        <p>В условиях, когда силовые структуры используют банковскую систему для отслеживания и преследования граждан за солидарность, классические банковские переводы несут прямую угрозу жизни и свободе сторонников Партии.</p>
        <ul>
            <li><span>Все пожертвования и членские взносы внутри страны принимаются исключительно в виде криптовалютных активов.</span></li>
            <li><span>Это гарантирует анонимность отправителя и невозможность ареста счетов со стороны карательных органов.</span></li>
        </ul>
    </div>

    <div class="fin-section">
        <h2>3. Смарт-контракты и публичный аудит</h2>
        <p>Прозрачность не должна опираться только на доверие — она должна быть обеспечена математически и технологически.</p>
        <ul>
            <li><span>Бюджет Партии формируется на открытых кошельках. Любой гражданин может в режиме реального времени проверить баланс и движение средств через публичный обозреватель блоков (Block Explorer).</span></li>
            <li><span>Распределение средств на уставные цели регулируется смарт-контрактами, что исключает возможность нецелевого использования или хищения активов руководством.</span></li>
        </ul>
    </div>

    <div class="crypto-block">
        <h3>Интеграция со стандартом KRC-20</h3>
        <p style="font-size: 1.1rem; color: #e0e0e0; margin-bottom: 0;">Основной финансовой инфраструктурой Партии «ДЕЛ» и Комитета солидарности является экосистема проекта <strong>CHUDO</strong>, базирующаяся на архитектуре BlockDAG и стандарте <strong>KRC-20</strong>. Это обеспечивает мгновенные транзакции, нулевые риски блокировки и микроскопические комиссии, что критически важно для эффективного микрофинансирования оппозиционной деятельности.</p>
    </div>

</div>