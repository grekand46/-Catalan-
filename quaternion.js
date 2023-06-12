class Quaternion {
    constructor(re, i, j, k){
        this.re = re;
        this.i = i;
        this.j = j;
        this.k = k;
    }
    get magnitude(){
        const ms = this.re ** 2 + this.i ** 2 + this.j ** 2 + this.k ** 2;
        return Math.sqrt(ms);
    }
    get conjugate(){
        return new Quaternion(this.re, -this.i, -this.j, -this.k);
    }
    static multiply(q1, q2){
        const reNew = q1.re * q2.re - q1.i * q2.i - q1.j * q2.j - q1.k * q2.k;
        const iNew = q1.re * q2.i + q1.i * q2.re + q1.j * q2.k - q1.k * q2.j;
        const jNew = q1.re * q2.j + q1.j * q2.re + q1.k * q2.i - q1.i * q2.k;
        const kNew = q1.re * q2.k + q1.k * q2.re + q1.i * q2.j - q1.j * q2.i;
        return new Quaternion(reNew, iNew, jNew, kNew);
    }
    multLeft(q){
        return Quaternion.multiply(q, this);
    }
    multRight(q){
        return Quaternion.multiply(this, q);
    }
}
