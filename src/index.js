import MovingObject from "./moving_object";
import Rider from "./rider";
import Obstacle from "./obstacle";
import Tree from "./tree";
import SmallTree from "./small_tree";

//when we load the game, later this content will be moved to a keydown event listener
document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 1500;
    canvasEl.height = 1500;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "whitesmoke";
    ctx.fillRect(0, 0, 1500, 1500);
    
    const trees = []
    for (let i = 450; i < canvasEl.width; i+=600) {
        for (let j = 0; j <= canvasEl.height; j+=300) {
            trees.push(
                new Tree({pos:[i, j]})
            )}}
    trees.forEach((tree) => tree.drawTree(ctx));
    
    const smallTrees = []
        for (let j = 0; j <= canvasEl.height; j+=300) {
            smallTrees.push(
                new SmallTree({pos:[0, j]})
            )}
        for (let j = 0; j <= canvasEl.height; j+=300) {
            smallTrees.push(
                new SmallTree({pos:[1500, j]})
            )}
    smallTrees.forEach((tree) => tree.drawTree(ctx));
    
    window.ctx = ctx;
    window.MovingObject = MovingObject;
    window.Rider = Rider;
    window.Obstacle = Obstacle;
    window.Tree = Tree;
    window.SmallTree = SmallTree;
});

window.player = new Rider({});

// document.addEventListener("keydown", (e) => {
//     if (e.key === "p") { 
//         window.Game.start();
//     }
// })


//can we pass a function in as a hash value?
// const keyPressed = new Map();
//     keyPressed.set("a", Rider.moveLeft);
//     keyPressed.set("d", Rider.moveRight);
//     keyPressed.set(" ", Rider.jump);


//eventListener waiting for a user's "keydown"
// window.addEventListener("keydown", (e) => {
//     console.log(keyPressed.get("a")); //returns undefined
//     console.log(typeof e.key); //returns a string
//     console.log(keyPressed[e.key], 'key'); //returns undefined
//     console.log(keyPressed[e], 'func'); //returns undefined
//     if (keyPressed[e.key]) {
//         return keyPressed.get(keyPressed[e.key]);
//     }
// });

window.addEventListener("keydown", (e) => {

    if (e.key === "a") player.moveLeft();
    if (e.key === "d") player.moveRight();
    if (e.key === " ") player.jump();
});
