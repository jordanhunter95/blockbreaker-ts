import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Paddle } from "./sprites/Paddle";
//Images
import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';
//level and colours
import { PADDLE_SPEED, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_STARTX, BALL_SPEED, BALL_SIZE, BALL_STARTX, BALL_STARTY } from './setup';
// Helpers
import { createBricks } from "./helpers";
var gameOver = false;
var score = 0;
function setGameOver(view) {
    view.drawInfo('Game Over!');
    gameOver = false;
}
function setGameWin(view) {
    view.drawInfo('Game Over!');
    gameOver = false;
}
function gameLoop(view, bricks, paddle, ball) {
    console.log('draw!');
    view.clear();
    view.drawBricks(bricks);
    view.drawSprite(paddle);
    view.drawSprite(ball);
    //Move Ball
    ball.moveBall();
    // Move paddle and check so it stays within bounds
    if ((paddle.isMovingLeft && paddle.pos.x > 0) ||
        (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)) {
        paddle.movePaddle();
    }
    requestAnimationFrame(function () { return gameLoop(view, bricks, paddle, ball); });
}
function startGame(view) {
    //Reset displays
    score = 0;
    view.drawInfo('');
    view.drawScore(0);
    //Create all bricks
    var bricks = createBricks();
    //Create Ball
    var ball = new Ball(BALL_SPEED, BALL_SIZE, { x: BALL_STARTX, y: BALL_STARTY }, BALL_IMAGE);
    //Create Paddle
    var paddle = new Paddle(PADDLE_SPEED, PADDLE_WIDTH, PADDLE_HEIGHT, {
        x: PADDLE_STARTX,
        y: view.canvas.height - PADDLE_HEIGHT - 5
    }, PADDLE_IMAGE);
    gameLoop(view, bricks, paddle, ball);
}
//Create a new view
var view = new CanvasView('#playField');
view.initStartButton(startGame);
//# sourceMappingURL=index.js.map