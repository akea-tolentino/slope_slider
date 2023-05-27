// import MovingObject from "./moving_object";
// import Rider from "./rider";
// import Obstacle from "./obstacle";
// import Tree from "./tree";
// import SmallTree from "./small_tree";

// class Game {

//     constructor(canvasEl) {
//         this.canvas = canvasEl;
//         this.trees = [];
//         this.smallTrees = [];
//     }

//     runGame() {
//             for (let i = 450; i < this.canvas.width; i+=600) {
//                 for (let j = 0; j <= this.canvas.height; j+=300) {
//                     this.trees.push(
//                         new Tree({pos:[i, j]})
//                     )}}
//             trees.forEach((tree) => tree.drawTree(ctx));
            
//                 for (let j = 0; j <= this.canvas.height; j+=300) {
//                     this.smallTrees.push(
//                         new SmallTree({pos:[0, j]})
//                     )}
//                 for (let j = 0; j <= this.canvas.height; j+=300) {
//                     this.smallTrees.push(
//                         new SmallTree({pos:[1500, j]})
//                     )}
//             smallTrees.forEach((tree) => tree.drawTree(ctx));
            
//             window.MovingObject = MovingObject;
//             window.Rider = Rider;
//             window.Obstacle = Obstacle;
//             window.Tree = Tree;
//             window.SmallTree = SmallTree;
//             window.player = new Rider({});
//     }
    
// }

// var tmp = new Game(); 
// document.getElementById("run-game").addEventListener("click", function(){
//     tmp.runGame()}, false);

// document.getElementbyId("run-game").addEventListener("click", this.runGame().bind(this));


// window.addEventListener("keydown", (e) => {

//     if (e.key === "a") player.moveLeft();
//     if (e.key === "d") player.moveRight();
//     if (e.key === " ") player.jump();
// });

// export default Game;

//add button with an addEventListener, which would invoke setupGame
//button will have a id, that "click" refers to