"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
let combineValues;
combineValues = add2;
console.log(combineValues(8, 8));
//# sourceMappingURL=function.js.map