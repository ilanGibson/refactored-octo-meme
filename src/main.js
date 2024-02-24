class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'player');
        this.scene = scene;
        this.scene.add.existing(this);
    }
}



const gameState = {}

function preload() {

}

function create() {
    gameState.circle = this.add.circle(50, 800, 10, 0x00ff00);
    this.physics.world.enable(gameState.circle);
    floor = this.add.rectangle(0, 815, 3000, 10, 0xffffff);
    gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (gameState.cursors.left.isDown) {
        gameState.circle.x -= 1;
    } else if (gameState.cursors.right.isDown) {
        gameState.circle.x += 1;
    }
    if (gameState.cursors.up.isDown) {
        gameState.circle.y -= 1;
    }
}

const config = {
    height: window.innerHeight - 15, 
    width: window.innerWidth - 15, 
    physics: {default: 'arcade', arcade: {gravity: {y: 300}, debug: false}},
    backgroundColor: 0x000000, 
    scene: {create, update}};
const game = new Phaser.Game(config);