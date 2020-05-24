var express = require("express");
var app = express();

app.listen(8081, () => {
 console.log("Server run port 8081");
});

app.get('/blog', (req, res) => {
    var message = {
        'text': 'ola k ase?'
    };
    res.json(message);
});

app.get('/blog/:id', (req, res) => {
    res.json(req.params);
});

app.post('/blog', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});