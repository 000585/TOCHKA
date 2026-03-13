---
layout: base.njk
title: "Протоколы Съездов Партии «ДЕЛ»"
permalink: /del-protocols/
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
        background: rgba(5, 10, 20, 0.85); /* Темный фон с синим отливом */
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border: 1px solid rgba(0, 204, 255, 0.4); 
        border-radius: 4px;
        color: #e0e0e0; 
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
        line-height: 1.6;
        box-shadow: 0 10px 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(0, 204, 255, 0.05);
    }

    .document-header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #00ccff; padding-bottom: 20px; }
    .document-header h1 { font-family: 'Playfair Display', serif; color: #fff; font-size: 2.2rem; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
    
    .protocol-card { 
        margin-top: 25px; 
        background: rgba(0, 204, 255, 0.05); 
        border: 1px solid rgba(0, 204, 255, 0.2); 
        padding: 20px; 
        border-radius: 8px; 
        transition: 0.3s; 
    }
    .protocol-card:hover { background: rgba(0, 204, 255, 0.1); border-color: rgba(0, 204, 255, 0.5); box-shadow: 0 5px 15px rgba(0, 204, 255, 0.1); }
    
    .protocol-meta { display: flex; justify-content: space-between; font-family: 'Courier New', Courier, monospace; color: #00ccff; font-size: 0.95rem; margin-bottom: 10px; border-bottom: 1px dashed rgba(0, 204, 255, 0.3); padding-bottom: 5px; }
    .protocol-title { font-family: 'Playfair Display', serif; color: #fff; font-size: 1.3rem; margin-top: 0; margin-bottom: 10px; }
    .protocol-text { font-size: 1.05rem; text-align: justify; margin-bottom: 15px; color: #d0d0d0; }
    
    .tech-tag { display: inline-block; background: rgba(0, 204, 255, 0.2); color: #00ccff; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; font-family: 'Courier New', Courier, monospace; margin-right: 10px; }

    .btn-back { display: inline-block; margin-bottom: 20px; padding: 10px 20px; background: rgba(0, 204, 255, 0.1); color: #00ccff; text-decoration: none; border: 1px solid rgba(0, 204, 255, 0.3); border-radius: 4px; font-family: 'Segoe UI', sans-serif; transition: 0.3s; }
    .btn-back:hover { background: rgba(0, 204, 255, 0.2); border-color: #00ccff; color: #fff; }
</style>

<div style="max-width: 900px; margin: 20px auto 0;">
    <a href="/del/" class="btn-back">← Назад к реестру документов</a>
</div>

<div class="document-container">
    <div class="document-header">
        <h1>ПРОТОКОЛЫ СЪЕЗДОВ И ЗАСЕДАНИЙ</h1>
        <p style="font-family: 'Segoe UI', sans-serif; font-size: 1.2rem; color: #a0aab5;">Открытый реестр решений Координационного Совета</p>
    </div>

    <p style="font-size: 1.15rem; text-align: center; margin-bottom: 40px; color: #b0c4de;">В целях безопасности делегатов, все голосования и заседания Координационного Совета Партии «ДЕЛ» проводятся с использованием защищенных децентрализованных сетей. Результаты верифицируются криптографическими подписями.</p>

    <div class="protocol-card">
        <div class="protocol-meta">
            <span>Протокол КС №03/26</span>
            <span>Формат: e-Voting (CHUDO)</span>
        </div>
        <h2 class="protocol-title">Утверждение стратегического партнерства с Комитетом солидарности</h2>
        <div class="protocol-text">
            Единогласным решением Координационного Совета (24 голоса «За», 0 «Против», 0 «Воздержались») утвержден текст «Меморандума солидарности». Принято решение о полной интеграции финансовых потоков помощи репрессированным в экосистему KRC-20 для защиты доноров и получателей.
        </div>
        <div>
            <span class="tech-tag">Zero-Knowledge Proof</span>
            <span class="tech-tag">KRC-20 Verified</span>
        </div>
    </div>

    <div class="protocol-card">
        <div class="protocol-meta">
            <span>Протокол КС №02/25</span>
            <span>Формат: Зашифрованный P2P канал</span>
        </div>
        <h2 class="protocol-title">Принятие Экологической доктрины (Зеленого пакта)</h2>
        <div class="protocol-text">
            Большинством голосов утверждена Экологическая доктрина Партии. Внесены поправки в базовую программу, касающиеся немедленного требования международного аудита Белорусской АЭС и введения моратория на вырубку реликтовых лесов.
        </div>
        <div>
            <span class="tech-tag">AES-256 Encrypted</span>
        </div>
    </div>

    <div class="protocol-card">
        <div class="protocol-meta">
            <span>Протокол Учредительного Съезда №01/21</span>
            <span>Формат: Очный (ИВС Барановичи)</span>
        </div>
        <h2 class="protocol-title">Учреждение Политической Партии «ДЕЛ»</h2>
        <div class="protocol-text">
            Исторический документ. В условиях политического заключения (Изолятор временного содержания, г. Барановичи) Чудиновичем Юрием Евгеньевичем подписан Акт об учреждении партии. Утверждено название: Демократия. Экология. Лидерство.
        </div>
        <div>
            <span class="tech-tag">Оригинал сохранен</span>
        </div>
    </div>

</div>