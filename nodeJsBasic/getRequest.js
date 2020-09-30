const http = require("http");
const url = "http://localhost:3000";
const options = {
    method: "GET"
};
const req = http.request(url, options, (res) =>{
    res.pipe(process.stdout);
});
req.end();