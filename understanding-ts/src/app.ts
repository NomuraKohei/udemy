let userInput: unknown;
let userName: string;

userInput = 5;

if(typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

//const result = generateError('エラー発生', 500);
//console.log(result);