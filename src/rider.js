import MovingObject from "./moving_object";

class Rider extends MovingObject {
    static RADIUS = 50;
    static COLOR = "black";

    constructor(options) {
        super(options);
        this.pos = [750, 1500];
        //rider velocity will change to [600, 0] to move right
        //rider velocity will change to [-600, 0] to move left
        this.vel = [0, 0];
        this.radius = Rider.RADIUS;
        this.color = Rider.COLOR;
    }

}


export default Rider;
