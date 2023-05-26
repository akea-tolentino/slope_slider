import MovingObject from "./moving_object";
import Rider from "./rider";
import Obstacle from "./obstacle";
import Tree from "./tree";
import SmallTree from "./small_tree";

//when we load the page, canvas element is created and printed
document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 1500;
    canvasEl.height = 1500;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "whitesmoke";
    ctx.fillRect(0, 0, 1500, 1500);
    
    window.ctx = ctx;
});

window.addEventListener("keydown", (e) => {

    if (e.key === "a") player.moveLeft();
    if (e.key === "d") player.moveRight();
    if (e.key === " ") player.jump();
});
