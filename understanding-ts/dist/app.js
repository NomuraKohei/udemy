"use strict";
var _a;
const e1 = {
    name: 'Max',
    priviledges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Hello', 'TypeScript');
result.split(' ');
const fetchUserData = {
    id: 'u1',
    name: 'user1',
    job: {
        title: 'Developer',
        descriptopm: 'TypeScript',
    }
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput2 = '';
const storedData = userInput2 !== null && userInput2 !== void 0 ? userInput2 : 'DEFAULT';
console.log(storedData);
//# sourceMappingURL=app.js.map