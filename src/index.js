const MovingObject = require("./moving_object");
const Rider = require("./rider.js");

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 1400;
    canvasEl.height = 1400;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "whitesmoke";
    ctx.fillRect(0, 0, 1400, 1400);
    
    window.ctx = ctx;
    window.MovingObject = MovingObject;
    window.Rider = Rider;
});