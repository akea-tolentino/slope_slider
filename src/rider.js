import MovingObject from "./moving_object";

class Rider extends MovingObject {
    static RADIUS = 30;
    static COLOR = "black";

    constructor(options) {
        super(options);
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = Rider.RADIUS;
        this.color = Rider.COLOR;
    }

}

export default Rider;
