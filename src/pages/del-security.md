---
layout: base.njk
title: "Политика информационной безопасности партии «ДЕЛ»"
permalink: /del-security/
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
        background: rgba(15, 5, 5, 0.85); /* Легкий красноватый оттенок для документа по безопасности */
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 50, 50, 0.4); 
        border-radius: 4px;
        color: #e0e0e0; 
        font-family: 'Courier New', Courier, monospace; /* Моноширинный шрифт для "технического" документа */
        line-height: 1.6;
        box-shadow: 0 10px 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(255, 50, 50, 0.05);
    }

    .document-header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #ff3333; padding-bottom: 20px; }
    .document-header h1 { font-family: 'Playfair Display', serif; color: #fff; font-size: 2.2rem; margin-bottom: 10px; letter-spacing: 1px; }
    
    .document-body h2 { font-family: 'Segoe UI', sans-serif; color: #ff5555; font-size: 1.4rem; margin-top: 30px; margin-bottom: 15px; border-bottom: 1px dashed rgba(255, 80, 80, 0.3); padding-bottom: 5px; }
    .document-body p { margin-bottom: 15px; font-size: 1.1rem; text-align: justify; font-family: 'Segoe UI', sans-serif; }
    .document-body ul { margin-bottom: 20px; font-size: 1.1rem; font-family: 'Segoe UI', sans-serif; }
    .document-body li { margin-bottom: 10px; }
    
    .alert-block { margin-top: 30px; padding: 20px; background: rgba(255, 50, 50, 0.1); border-left: 4px solid #ff3333; border-radius: 4px; font-family: 'Segoe UI', sans-serif; }
    .alert-block h3 { margin-top: 0; color: #ff5555; font-size: 1.2rem; margin-bottom: 10px; text-transform: uppercase; }
    
    .btn-back { display: inline-block; margin-bottom: 20px; padding: 10px 20px; background: rgba(255, 255, 255, 0.1); color: #fff; text-decoration: none; border: 1px solid rgba(255,255,255,0.3); border-radius: 4px; font-family: 'Segoe UI', sans-serif; transition: 0.3s; }
    .btn-back:hover { background: rgba(255, 255, 255, 0.2); border-color: #fff; }
</style>

<div style="max-width: 900px; margin: 20px auto 0;">
    <a href="/del/" class="btn-back">← Назад к реестру документов</a>
</div>

<div class="document-container">
    <div class="document-header">
        <h1>ПОЛИТИКА ИНФОРМАЦИОННОЙ БЕЗОПАСНОСТИ</h1>
        <p style="font-family: 'Segoe UI', sans-serif; font-size: 1.2rem; color: #a0aab5;">Обязательный протокол для членов Партии «ДЕЛ» и активистов</p>
    </div>

    <div class="document-body">
        <p>Настоящий документ определяет базовые правила цифровой гигиены и информационной безопасности для всех членов Партии «ДЕЛ», координаторов и участников проектов. В условиях тотального контроля со стороны авторитарного аппарата, защита данных — это вопрос личной свободы и выживания организации.</p>
        
        <h2>1. Защищенная связь (Интеграция CHUDO)</h2>
        <p>Перехват метаданных и содержимого сообщений в классических мессенджерах является основным инструментом репрессий. Партия категорически запрещает использовать незащищенные каналы связи для обсуждения координационных вопросов.</p>
        <ul>
            <li><strong>Основной канал связи:</strong> Децентрализованный мессенджер <strong>CHUDO</strong>.</li>
            <li><strong>Преимущества:</strong> CHUDO работает на архитектуре P2P без центральных серверов, использует протоколы сквозного шифрования (End-to-End Encryption) и криптографию на эллиптических кривых.</li>
            <li><strong>Анонимность:</strong> Регистрация в сети партийных чатов не требует привязки номера телефона. Идентификация происходит через анонимные криптографические ключи сети KRC-20.</li>
        </ul>

        <h2>2. Базовая цифровая гигиена</h2>
        <p>Каждый член партии обязан соблюдать следующие стандарты при использовании любых устройств:</p>
        <ul>
            <li><strong>Шифрование дисков:</strong> Все носители информации (смартфоны, ноутбуки) должны быть зашифрованы (FileVault для Mac, BitLocker для Windows, полное шифрование на Android/iOS).</li>
            <li><strong>VPN и маршрутизация трафика:</strong> Доступ к партийным ресурсам и коммуникационным узлам осуществляется исключительно через доверенные VPN-сервисы или сеть Tor. Прямой трафик от провайдеров недопустим.</li>
            <li><strong>Пароли и 2FA:</strong> Использование сложных паролей и обязательная двухфакторная аутентификация (желательно через аппаратные ключи, а не SMS).</li>
        </ul>

        <h2>3. Протокол финансовых операций</h2>
        <p>Финансирование Партии, уплата членских взносов и пожертвования в Комитет солидарности через классическую банковскую систему на территории диктатуры строго запрещены из-за риска отслеживания.</p>
        <p>Все транзакции проводятся в крипто-экосистеме <strong>KRC-20 (монета CHUDO)</strong>, обеспечивающей анонимность отправителя, низкие комиссии и невозможность блокировки счета.</p>

        <div class="alert-block">
            <h3>Протокол «Нулевое доверие» (Zero Trust) в случае задержания</h3>
            <p style="font-size: 1.05rem; color: #e0e0e0; margin-bottom: 10px;">В случае угрозы обыска, изъятия техники или задержания активист обязан:</p>
            <ul style="font-size: 1.05rem; color: #ffcccc; margin-bottom: 0;">
                <li>Использовать экстренные пароли уничтожения данных (пароль под принуждением), если такая функция настроена на устройстве.</li>
                <li>Ни при каких обстоятельствах не выдавать ключи восстановления (Seed-фразы) от криптокошельков KRC-20 и аккаунтов CHUDO.</li>
                <li>Координационный Совет при получении сигнала о задержании активиста немедленно блокирует его доступы ко всем внутренним чатам и базам данных для защиты остальной сети.</li>
            </ul>
        </div>
    </div>
</div>