const canvas = document.querySelector("canvas");
const board = canvas.getContext("2d");

canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH;
canvas.height = DISPLAY_PIXEL.HEIGHT * ASPECT_RATIO.HEIGHT;

const playerProperty = {
    width: 50,
    height: 50,
    speed: 4,
    color: "tomato",
    position: {
        x: 0,
        y: 0,
    },
};
const enemyProperty = {
    width: 50,
    height: 50,
    speed: 1,
    color: "black",
    position: {
        x: 550,
        y: canvas.height - 50,
    },
};

const ground = new Ground(canvas.width, canvas.height, "lightblue");
const player = new Player(playerProperty);
const enemy = new Player(enemyProperty);

const animate = () => {
    ground.create();
    player.create();
    enemy.create();

    player.update();
    // enemy.update();
    window.requestAnimationFrame(animate);
};
window.addEventListener("keydown", (callback) => {
    player.movement(callback.key);
});

animate();
