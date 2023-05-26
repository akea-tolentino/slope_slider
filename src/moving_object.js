class MovingObject {
    constructor(options) {
        const {pos, vel, radius, color} = options;

        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        // ctx.strokeStyle = this.color;
        // ctx.stroke();
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }

    moveLeft() {
        this.vel = [-600, 0];
        this.move();
        this.draw(ctx);
        this.vel = [0, 0];
    }

    moveRight() {
        this.vel = [600, 0];
        this.move();
        this.draw(ctx);
        this.vel = [0, 0];
    }

    jump() {
        this.radius = 95;
        this.draw(ctx);
        this.radius = 50;
    }
}

export default MovingObject;