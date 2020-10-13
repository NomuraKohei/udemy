"use strict";
var userInput;
var userName;
userInput = 5;
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
//const result = generateError('エラー発生', 500);
//console.log(result);
