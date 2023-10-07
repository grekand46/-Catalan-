import Quaternion from './quaternion.js';

export default class Vector3 {
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
        return this.quaternion.multLeft(quaternion).multRight(quaternion.conjugate).vector3;
    }
    toString(){
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}