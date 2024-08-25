const express = require("express");
const app = express();

app.get("/test", function(req, res) {
    res.send("ok")
});

app.post("test/eax", function(req, res) {
    console.log(req.headers);
    console.log("post received");
    res.send("kjhkjhk");  
})

app.listen(4450);
