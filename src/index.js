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
    
    window.MovingObject = MovingObject;
    window.Rider = Rider;
    window.Obstacle = Obstacle;
    window.Tree = Tree;
    window.SmallTree = SmallTree;
    window.player = new Rider({});
    window.logs = [];
    // logs.push(new Obstacle({}));
    // setInterval( logs.push(new Obstacle({})), 1000);
    const count = 0;
    
    
    animate(count);  
})

function animate(count) {
    window.requestAnimationFrame(animate);
    // need to find a way to get this to periodically spawn new obstacles throughout the animation
    // setInterval(logs.push(new Obstacle({})), 1000);
    // logs.push(new Obstacle({}));

    count += 1;
    if (count % 1 === 0) logs.push(new Obstacle({}));


    ctx.fillStyle = "whitesmoke"
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

    //populate trees
    const trees = [];
    for (let i = 150; i < canvasEl.width; i+=(200)) {
        for (let j = 0; j <= canvasEl.height - player.radius; j+=(75)) {
            trees.push(
                new Tree({pos:[i, j]})
            )}}
    trees.forEach((tree) => tree.drawTree(ctx));
    
    //populate small trees
    const smallTrees = [];
        for (let j = 0; j <= canvasEl.height; j+=(100)) {
            smallTrees.push(
                new SmallTree({pos:[0 + SmallTree.RADIUS, j]})
            )}
        for (let j = 0; j <= canvasEl.height; j+=(100)) {
            smallTrees.push(
                new SmallTree({pos:[500 - SmallTree.RADIUS, j]})
            )}
    smallTrees.forEach((tree) => tree.drawTree(ctx));

    // logs.forEach((log) => log.move(ctx));
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        if (log.radius + log.vel.y >= canvasEl.height) {
            logs.splice(log, 1);
        } else {
            log.move(ctx);
        }
    }
    
    player.move();

    if (keys.a.pressed && player.pos.x - player.radius > 0) {
        player.moveLeft();
        keys.a.pressed = false;
    } else if (keys.d.pressed && player.pos.x + player.radius < canvasEl.width) {
        player.moveRight();
        keys.d.pressed = false;
    } else if (keys.s.pressed) {
        player.jump();
    } else { player.vel.x = 0; player.radius = Rider.RADIUS }

}
//keys map to select what keys to watch for
const keys = {
    a: {pressed: false},
    d: {pressed: false},
    s: {pressed: false}
}
window.addEventListener("keypress", ({key}) => {
    switch (key){
        case 'a':
            keys.a.pressed = true;
            break;
        case 'd': 
            keys.d.pressed = true;
            break;
    }
});

window.addEventListener("keydown", ({key}) => {
    switch (key){
        case 's':
            keys.s.pressed = true;
            break;
    }
});

window.addEventListener("keyup", ({key}) => {
    switch (key){
        case 's':
            keys.s.pressed = false;
            break;
    }
});
