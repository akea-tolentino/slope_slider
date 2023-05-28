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
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }


    move() {
        this.draw(ctx);
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        if (this.pos.y + this.radius.y + this.vel.y >= 500){
            this.velocity.y = 0;}
    }

    moveLeft() {
        this.vel = {
            x: -175,
            y: 0
        }
    }

    moveRight() {
        this.vel = {
            x: 175,
            y: 0
        }
    }

    jump() {
        this.radius = 30;
    }
}

export default MovingObject;