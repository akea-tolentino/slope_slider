class Tree {
    static RADIUS = 33;
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
    }
}

export default Tree;
