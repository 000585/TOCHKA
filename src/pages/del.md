---
layout: base.njk
title: "Партия ДЕЛ: Демократия. Экология. Лидерство."
permalink: /del/
---

<video id="bg-video" autoplay loop muted playsinline style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; object-fit: cover; z-index: -1; opacity: 1; pointer-events: none;">
    <source src="/assets/img/promo.mp4" type="video/mp4">
</video>

<style>
    /* Делаем системный фон прозрачным */
    body, html, main, .wrapper, .site-content { 
        background: transparent !important; 
        background-color: transparent !important; 
    }
    
    .del-container {
        position: relative;
        z-index: 10;
        max-width: 1200px; /* Немного расширил контейнер для большой сетки */
        margin: 40px auto 80px; 
        padding: 40px;
        background: rgba(5, 15, 10, 0.75); 
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(76, 175, 80, 0.3); 
        border-radius: 12px; 
        color: #e0e0e0; 
        font-family: 'Segoe UI', sans-serif; 
        line-height: 1.7;
        box-shadow: 0 10px 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(76, 175, 80, 0.05);
    }

    .del-container h1, .del-container h2 {
        font-family: 'Playfair Display', serif;
        color: #fff;
    }

    .del-accent { color: #4caf50; text-shadow: 0 0 10px rgba(76, 175, 80, 0.5); }

    .doc-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 20px;
        margin-top: 30px;
    }

    .doc-card {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 20px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        text-decoration: none;
        color: #fff;
        transition: all 0.3s ease;
        backdrop-filter: blur(5px);
        height: 100%;
    }

    .doc-card:hover {
        background: rgba(76, 175, 80, 0.15);
        border-color: #4caf50;
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    }

    .doc-card h3 {
        margin: 0 0 10px 0;
        font-size: 1.1rem;
        color: #4caf50;
        line-height: 1.3;
    }
    
    .doc-card p {
        margin: 0;
        font-size: 0.85rem;
        color: #b0c4de;
        line-height: 1.5;
    }
</style>

<div class="del-container">
    
    <div style="text-align: center; margin-bottom: 2rem;">
        <img src="/img/photo_2026-03-11_22-37-29.jpg" alt="Партия ДЕЛ" style="width: 100%; max-width: 400px; border-radius: 8px; box-shadow: 0 8px 25px rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.1);">
    </div>

    <h1 style="text-align: center; font-size: 2.8rem; margin-bottom: 0.5rem; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">Партия <span class="del-accent">«ДЕЛ»</span></h1>
    <p style="text-align: center; font-size: 1.2rem; margin-bottom: 3rem; letter-spacing: 2px; color: #a0aab5;">ДЕМОКРАТИЯ. ЭКОЛОГИЯ. ЛИДЕРСТВО.</p>

    <h2 style="border-bottom: 1px solid rgba(76, 175, 80, 0.3); padding-bottom: 10px;"><span class="del-accent">История создания: Рождена в неволе</span></h2>
    <p>Политическая партия «ДЕЛ» имеет уникальную историю основания. Она была учреждена не в комфортных конференц-залах, а в условиях жесточайшего давления на гражданское общество.</p>
    <p>Партия была официально основана <strong>22 июня 2021 года в стенах ИВС (Изолятора временного содержания) города Барановичи</strong>. Учредителем и идейным вдохновителем выступил <strong>Чудинович Юрий Евгеньевич</strong>.</p>
    <p>Сам факт создания политической силы в застенках тюрьмы является беспрецедентным актом мужества и символизирует несокрушимость демократических идей. Экология политической системы начинается с очищения ее от диктатуры.</p>

    <h2 style="border-bottom: 1px solid rgba(76, 175, 80, 0.3); padding-bottom: 10px; margin-top: 3rem;"><span class="del-accent">Реестр нормативных и уставных документов</span></h2>
    <p style="margin-bottom: 30px;">Для обеспечения абсолютной прозрачности, внедрения демократических процедур и гарантий безопасности наших сторонников, Координационный Совет публикует полный перечень фундаментальных документов Партии.</p>

    <div class="doc-grid">
        
        <a href="/del-act/" class="doc-card">
            <h3>Акт об учреждении</h3>
            <p>Исторический документ от 22.06.2021, ИВС г. Барановичи.</p>
        </a>
        <a href="/del-ustav/" class="doc-card">
            <h3>Устав партии</h3>
            <p>Главный свод правил, структура и порядок принятия решений.</p>
        </a>
        <a href="/del-manifest/" class="doc-card">
            <h3>Программа (Манифест)</h3>
            <p>Наши цели в политике, экономике и защите окружающей среды.</p>
        </a>
        <a href="/del-membership/" class="doc-card">
            <h3>Положение о членстве</h3>
            <p>Права, обязанности, протоколы безопасности и цифровой партбилет.</p>
        </a>

        <a href="/del-ethics/" class="doc-card">
            <h3>Этический кодекс</h3>
            <p>Внутренние стандарты чести, антикоррупционные нормы и правила экологичного общения.</p>
        </a>
        <a href="/del-security/" class="doc-card">
            <h3>Политика информационной безопасности</h3>
            <p>Жизненно важные протоколы связи: использование VPN, мессенджера CHUDO и криптографии.</p>
        </a>
        <a href="/del-finance/" class="doc-card">
            <h3>Финансовый регламент</h3>
            <p>Абсолютная прозрачность: формирование бюджета, смарт-контракты KRC-20 и публичный аудит.</p>
        </a>
        <a href="/del-roadmap/" class="doc-card">
            <h3>Дорожная карта (Первые 100 дней)</h3>
            <p>Пошаговый план переходного периода: люстрации, суды, экономические и экологические реформы.</p>
        </a>
        <a href="/del-eco/" class="doc-card">
            <h3>Экологическая доктрина (Зеленый пакт)</h3>
            <p>Стратегия спасения природы: отказ от углеводородов, защита лесов, рек и зеленая энергетика.</p>
        </a>
        <a href="/del-memorandum/" class="doc-card">
            <h3>Меморандум солидарности</h3>
            <p>Договор о стратегическом партнерстве с Комитетом солидарности репрессированных.</p>
        </a>
        <a href="/del-resolutions/" class="doc-card">
            <h3>Официальные резолюции</h3>
            <p>Архив заявлений, реакций на политические события и публичных обращений партии.</p>
        </a>
        <a href="/del-protocols/" class="doc-card">
            <h3>Протоколы Съездов и заседаний</h3>
            <p>Открытые решения Координационного Совета и результаты электронных голосований.</p>
        </a>

    </div>
</div>