const redis = require("redis");
const client = redis.createClient(6379, "blog.redis_server");
const { v4: uuidv4 } = require("uuid");

client.on("error", function(error) {
  console.error(error);
});

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

app.listen(8081, () => {
  console.log("Server run port 8081");
});

app.get("/blog/:id", (req, res) => {
  const blog = client.get("blog_" + req.params.id, function(err, response) {
    if (err) {
      return res
        .status(500)
        .json({ error: "Service not available", message: err });
    }

    return response === null
      ? res.status(404).json({ error: "Blog not found" })
      : res.status(200).json(response);
  });
});

app.post("/blog", (req, res) => {
  const id = uuidv4();
  client.set("blog_" + id, JSON.stringify({ ...req.body, id: id }), function(
    err,
    response
  ) {
    res.status(201).send("");
  });
});
