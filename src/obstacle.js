import MovingObject from "./moving_object";

class Obstacle extends MovingObject {
    static POSITION = [[150, 0], [750, 0], [1350, 0]];
    static VELOCITY = [0, 50];
    static RADIUS = 50;
    static COLOR = "brown";

    constructor(options) {
        super(options);
        this.pos = Obstacle.POSITION[Math.floor(Math.random() * Obstacle.POSITION.length)];
        this.vel = Obstacle.VELOCITY;
        this.radius = Obstacle.RADIUS;
        this.color = Obstacle.COLOR;
    }

}

export default Obstacle;
