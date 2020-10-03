const express = require("express");
const app = express();

app.use(require("./lib/logger.js"));
app.get("/", (req, res) =>{
    res.status(200).send("hello");
});
app.listen(3000);