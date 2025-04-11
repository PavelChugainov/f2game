const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: { default: 'arcade' },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('logo', 'assets/logo.png');
}

function create() {
    const logo = this.add.image(400, 300, 'logo');
    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: "Power2",
        yoyo: true,
        loop: -1
    });

    // Отправка результата в Telegram
    TelegramGameProxy.score(100);
}
