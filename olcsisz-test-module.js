
(function () {
    'use strict';

    if (window.__OLCSISZ_TEST_MODULE_LOADED__) return;
    window.__OLCSISZ_TEST_MODULE_LOADED__ = true;

    console.log('[OLCSISZ TEST] Külső modul sikeresen betöltve!');

    const showMessage = () => {
        const message = document.createElement('div');
        message.textContent = 'Olcsisz TEST Loader v0.1 ✓';
        message.style.cssText =
            'position:fixed;top:100px;right:20px;' +
            'background:#173b2c;color:white;padding:12px 18px;' +
            'border:2px solid #39c58a;border-radius:8px;' +
            'z-index:2147483647;font-weight:bold;';
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 5000);
    };

    if (document.body) {
        showMessage();
    } else {
        document.addEventListener('DOMContentLoaded', showMessage, { once: true });
    }
})();
