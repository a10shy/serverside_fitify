var express = require("express");
const cors = require("cors");
const fs = require("fs");
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();

app.use(cors());
app.use(bodyParser.json());


app.get("/get-friends/:id", function (req, res) {
  const id = req.params.id;

  fs.readFile("friendslist.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
     const friendData = JSON.parse(data.toString());
    console.log(friendData);
    res.send(friendData);
  });
});

app.post("/get-online", urlencodedParser, (req, res) => {
   
 
   // var data = req;
   console.log(req.body);
   fs.appendFile("online.json", "[" + JSON.stringify(req.body) + "]", (err) => {
      // console.log(err);
   })
   res.sendStatus(201)
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
