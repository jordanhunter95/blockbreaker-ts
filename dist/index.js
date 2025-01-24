import { CanvasView } from "./view/CanvasView";
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
function gameLoop(view, bricks) {
    view.clear();
    view.drawBricks(bricks);
    requestAnimationFrame(function () { return gameLoop(view, bricks); });
}
function startGame(view) {
    //Reset displays
    score = 0;
    view.drawInfo('');
    view.drawScore(0);
    //Create all bricks
    var bricks = createBricks();
    gameLoop(view, bricks);
}
//Create a new view
var view = new CanvasView('#playField');
view.initStartButton(startGame);
//# sourceMappingURL=index.js.map