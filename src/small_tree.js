import Tree from "./tree";

class SmallTree extends Tree {
    static RADIUS = 10;
    static COLOR = "green";

    constructor(options) {
        super(options)

        this.pos = options.pos;
        this.radius = SmallTree.RADIUS;
        this.color = SmallTree.COLOR;
    }

}
export default SmallTree;