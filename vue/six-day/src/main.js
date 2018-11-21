let str = require("./a.js");

import e from './b.js';


console.log(str);
console.log(e);

let all =a=>{
    console.log(a);
}
all(12);


let obj = {
    school:'zfpx'
};
let obj1 = {
    school:8
};
let newObj = {...obj,...obj1};//es7语法
