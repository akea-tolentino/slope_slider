import MovingObject from "./moving_object";

class Rider extends MovingObject {
    static RADIUS = 15;
    static COLOR = "black";

    constructor(options) {
        super(options);
        this.pos = {
            x: 250,
            y: 500};

        this.vel = {
            x: 0,
            y: 0};

        this.radius = Rider.RADIUS;
        this.color = Rider.COLOR;
    }

}


export default Rider;
