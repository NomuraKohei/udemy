"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "yota",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
let favariteActivities;
favariteActivities = ['sp', '1'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('user');
}
//# sourceMappingURL=objs-arrays-enum.js.map