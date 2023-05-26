import MovingObject from "./moving_object";
import Rider from "./rider";
import Obstacle from "./obstacle";
import Tree from "./tree";
import SmallTree from "./small_tree";

class Game {

    static CANVAS = canvasEl;

    constructor(options) {
        const {canvas} = options;
        this.canvas = Game.CANVAS;
    }

    runGame() {

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
            
            window.MovingObject = MovingObject;
            window.Rider = Rider;
            window.Obstacle = Obstacle;
            window.Tree = Tree;
            window.SmallTree = SmallTree;
            window.player = new Rider({});
    }
}

window.addEventListener("click", this.runGame.bind(this));


window.addEventListener("keydown", (e) => {

    if (e.key === "a") player.moveLeft();
    if (e.key === "d") player.moveRight();
    if (e.key === " ") player.jump();
});


//add button with an addEventListener, which would invoke setupGame
//button will have a id, that "click" refers to