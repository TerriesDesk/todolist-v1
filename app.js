const express = require("express");
const bodyParser = require("body-parser");

var items = ["Buy Food", "Cook Food", "Eat Food"];

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);
  res.render("list", {dayOfWeek:day, newListItems: items});
});

app.post("/", function(req, res) {
  var item = req.body.newToDo;
  items.push(item);
  res.redirect("/");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});


// app.get('/', (req, res) => {
//   res.render('index', {foo: 'FOO'});
// });
