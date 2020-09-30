const parent = function () {
    console.log("1");
    child();
    console.log("2");
};

const child = function () {
    console.log("3");
    console.log("4");
};

parent();
