import Quaternion from './quaternion.js';
import Vector3 from './vector3.js';

//alert("hi")
const q = new Quaternion(1, 0, 2, -4);
const v = new Vector3(3, 2, 1);
console.log("" + v.sandwich(q));