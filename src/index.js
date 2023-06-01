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
    
    //grab elements for score, controls, and canvas and remove class attribute
    document.getElementById("score").removeAttribute("class");
    document.getElementById("controls").removeAttribute("class");
    canvasEl.removeAttribute("class");

    //grab elements for welcome-paragraph and run button and add class hidden
    document.getElementById("welcome-paragraph").classList.add("hidden");
    document.getElementById("run-game").classList.add("hidden");

    window.MovingObject = MovingObject;
    window.Rider = Rider;
    window.Obstacle = Obstacle;
    window.Tree = Tree;
    window.SmallTree = SmallTree;
    window.player = new Rider({});
    window.logs = [];
    window.start = Date.now();
    window.jumpCount = 0;
    
    setInterval(() => { 
        logs.push(new Obstacle({}), new Obstacle({}), new Obstacle({}))}, 1000);

    animate();  
})

//function that runs the "animation" of the game, printing a new state for every frame
function animate() {
    const animationReq = window.requestAnimationFrame(animate);

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

    //move each obstacle (log)
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        console.log(log.pos, 'pos');
        if (log.radius + log.pos.y >= canvasEl.height) {
            logs.filter((log) => {
                log.pos.y - log.radius < canvasEl.height;
            })
        } else {
            log.move(ctx);
        }
    }
    
    // logic that will move player 
    logs.forEach((log, i) => {
        player.move();
        if (keys.a.pressed && player.pos.x - player.radius - 60 > 0) {
            player.moveLeft();
            keys.a.pressed = false;
        } else if (keys.d.pressed && player.pos.x + player.radius + 60 < canvasEl.width) {
            player.moveRight();
            keys.d.pressed = false;

            //logic that will make player "jump" and end game if collision occurs
        } else if (keys.s.pressed && (Math.hypot(log.pos.x - player.pos.x, log.pos.y - player.pos.y) < log.radius + player.radius + 25)) {
            player.jump();
            window.jumpCount++;
            document.getElementById("score").textContent = "Score " + window.jumpCount;
            logs.splice(logs[i], 1);
            } else { player.vel.x = 0; player.radius = Rider.RADIUS }
                
        if ((log.pos.x === player.pos.x) && ((log.pos.y) === (player.pos.y))) {
            const endTime = Date.now() - window.start;
            document.getElementById("score").textContent= "GAME OVER! Your score is: " + Math.floor(endTime * window.jumpCount / 1000);
            window.cancelAnimationFrame(animationReq);
    }})

}; //end of animate

//keys map to select what keys to watch for
const keys = {
    a: {pressed: false},
    d: {pressed: false},
    s: {pressed: false}
}

//event listener for keypress of the left/right keys
window.addEventListener("keypress", ({key}) => {
    switch (key){
        case 'a':
            keys.a.pressed = true;
            break;
        case 'd': 
            keys.d.pressed = true;
            break;}
});

//event listener for keydown and keyup of jump key
window.addEventListener("keydown", ({key}) => {
    switch (key){
        case 's':
            keys.s.pressed = true;
            break;}
});
window.addEventListener("keyup", ({key}) => {
    switch (key){
        case 's':
            keys.s.pressed = false;
            break;}
});
