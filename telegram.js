// Инициализация игры
TelegramGameProxy.init();

// Отправка результата
function sendScore(score) {
    TelegramGameProxy.score(score);
    TelegramGameProxy.ready();
}
