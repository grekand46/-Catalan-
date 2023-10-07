import Quaternion from './quaternion.js';

class Vector3 {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    get length(){
        const norm = this.x ** 2 + this.y ** 2 + this.z ** 2;
        return Math.sqrt(norm);
    }
    get quaternion(){
        return new Quaternion(0, this.x, this.y, this.z);
    }
    sandwich(quaternion){
        const vq = new Quaternion(0, this.x, this.y, this.z);
        return vq.leftMult(quaternion).rightMult(quaternion.conjugate);
    }
}