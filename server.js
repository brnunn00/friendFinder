// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var qs = require("./app/data/questions");
var swal = require("sweetalert2")
var friendlies = require("./app/data/friends");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });
  
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
  });
  

  app.get("/api/getqs", function(req, res){
 
    return res.json(qs);

  })

  app.get("/api/getallscores", function(req, res){
 
    return res.json(friendlies);

  })

  app.post("/api/postNewFriend", function(req, res){
    var newFriend = req.body;
    // console.log(friendlies);
    friendlies.friends.push(newFriend);
    res.json({result: 200});
  })
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
  