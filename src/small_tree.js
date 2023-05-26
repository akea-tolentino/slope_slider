import Tree from "./tree";

class SmallTree extends Tree {
    // 0, 1500
    static RADIUS = 30;
    static COLOR = "green";

    constructor(options) {
        super(options)

        this.pos = options.pos;
        this.radius = SmallTree.RADIUS;
        this.color = SmallTree.COLOR;
    }

}
export default SmallTree;