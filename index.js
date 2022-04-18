const canvas = document.getElementById("canvas");
const snake = new Snake();
const food = new Food();
let score = 0;

const ctx = canvas.getContext("2d");


function gameLoop() {
    window.requestAnimationFrame(update);
}

function update() {
    snake.show();
    food.show();
    scoreShow();
    snake.update();
    isSnakeEat();
    const isTouchingBorders = snake.checkBorders();
    if (isTouchingBorders) {
        snake.stop();
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText(`Game Over!`, canvas.clientWidth / 2, canvas.clientHeight / 2);
        return;
    }
    window.requestAnimationFrame(update);
}

function isSnakeEat() {
    const distance = dist(food.x, food.y, snake.x, snake.y);
    if (distance < food.w) {
        score++;
        food.random();
        // snake.speed += .5;
    }
}

function dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function scoreShow() {
    ctx.clearRect(100, canvas.clientHeight - 35, 25, 26)
    ctx.font = "30px Arial";
    ctx.fillStyle = "blue"
    ctx.fillText(`Score: ${score}`, 10, canvas.clientHeight - 10, 500)
}

gameLoop();