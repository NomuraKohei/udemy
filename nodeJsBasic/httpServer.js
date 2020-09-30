const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) =>{
    console.log(
        `[${(new Date()).toISOString()}]` +
        `${req.method} ${req.url} ` +
        `${req.headers["user-agent"]}`
    );
    if(req.method === "POST"){
        req.pipe(res);
    } else {
        const reader = fs.createReadStream(path.join(__dirname, "sample.txt"), "utf8");
        reader.pipe(res);
    }
});
server.listen(3000);