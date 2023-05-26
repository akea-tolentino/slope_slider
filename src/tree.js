class Tree {
    // 450, 1050
    static RADIUS = 100;
    static COLOR = "green";

    constructor(options) {
        const {pos, radius, color} = options;

        this.pos = options.pos;
        this.radius = Tree.RADIUS;
        this.color = Tree.COLOR;
    }

    drawTree(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        // ctx.strokeStyle = this.color;
        // ctx.stroke();
    }
}

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

export default Tree;
