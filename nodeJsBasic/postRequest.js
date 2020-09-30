const http = require("http");
const data = "hello world";
const url = "http://localhost:3000";
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(data)
    }
};
const req = http.request(url, options, (res) =>{
    res.pipe(process.stdout);
});
req.end(data);