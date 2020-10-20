"use strict";
let userInput;
let userName;
userInput = 5;
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
//# sourceMappingURL=app_ols.js.map