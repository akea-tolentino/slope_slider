import MovingObject from "./moving_object";
import Rider from "./rider";
import Obstacle from "./obstacle";
import Tree from "./tree";
import SmallTree from "./small_tree";

//when we load the page, canvas element is created and printed
const canvasEl = document.getElementById("game-canvas");
document.addEventListener("DOMContentLoaded", () => {
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "whitesmoke";
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
    
    window.ctx = ctx;
});

document.getElementById("run-game").addEventListener("click", ()=> {
    const trees = [];
    for (let i = 150; i < canvasEl.width; i+=(200)) {
        for (let j = 0; j <= canvasEl.height; j+=(100)) {
            trees.push(
                new Tree({pos:[i, j]})
            )}}
    trees.forEach((tree) => tree.drawTree(ctx));
    
    const smallTrees = [];
        for (let j = 0; j <= canvasEl.height; j+=(100)) {
            smallTrees.push(
                new SmallTree({pos:[0, j]})
            )}
        for (let j = 0; j <= canvasEl.height; j+=(100)) {
            smallTrees.push(
                new SmallTree({pos:[500, j]})
            )}
    smallTrees.forEach((tree) => tree.drawTree(ctx));
    
    window.MovingObject = MovingObject;
    window.Rider = Rider;
    window.Obstacle = Obstacle;
    window.Tree = Tree;
    window.SmallTree = SmallTree;
    window.player = new Rider({});
    window.logs = [];

    function animate() {
        window.requestAnimationFrame(animate);
        logs.push(new Obstacle({}));
        ctx.fillStyle = "whitesmoke"
        ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
        logs.forEach((log) => log.move(ctx));
        player.move();
    }
    
    animate();  
})

window.addEventListener("keydown", (e) => {

    if (e.key === "a") player.moveLeft();
    if (e.key === "d") player.moveRight();
    if (e.key === " ") player.jump();
});


