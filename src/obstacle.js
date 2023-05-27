import MovingObject from "./moving_object";

class Obstacle extends MovingObject {
    static POSITIONS= [[50, 0], [250, 0], [450, 0]];
    static VELOCITY = {
        x: 0,
        y: 8};
    static RADIUS = 25;
    static COLOR = "brown";

    constructor(options) {
        super(options);
        const randomPos = Obstacle.POSITIONS[Math.floor(Math.random() * Obstacle.POSITIONS.length)];
        this.pos = {
            x: randomPos[0],
            y: randomPos[1]
        }
        this.vel = Obstacle.VELOCITY;
        this.radius = Obstacle.RADIUS;
        this.color = Obstacle.COLOR;
    }

}

export default Obstacle;
