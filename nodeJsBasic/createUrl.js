const { URL } = require("url");
let url = new URL("http://www.google.com");
console.log(url.protocol);
console.log(url.host);
