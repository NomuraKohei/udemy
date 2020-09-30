module.exports = function(max = 10) {
    let data = [];
    let original = "aiuirauidfahuh3847189rdbhbhe28u38dhcuibyVYVYVYUV284ub";
    const length = original.length;
    for(let i = 0; i < max; i++){
        data[i] = original[Math.floor(Math.random() * length)];
    }
    return data.join("");
};