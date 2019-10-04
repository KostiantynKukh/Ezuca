var express = require("express")
var app = express();
var path = require("path");


app.set("views", "views");
app.set('view engine', "pug");
app.use(express.static(path.join(__dirname , "public")));
//routes
var index = require("./routes/Index");
var about = require("./routes/About");
var contact = require("./routes/Contact");

app.use(index);
app.use(about);
app.use(contact);

app.listen(3000);