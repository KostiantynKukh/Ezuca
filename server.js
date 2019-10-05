var express = require("express")
var app = express();
var path = require("path");


app.set("views", "views");
app.set('view engine', "pug");
app.use(express.static(path.join(__dirname , "public")));
//routes
var index = require("./routes/Index");
var about = require("./routes/About");
var courses = require("./routes/Courses");
var blog = require("./routes/Blog");
var contact = require("./routes/Contact");
var singleCourses = require("./routes/Single-courses");
var singlePost = require("./routes/Single-post");

app.use(index);
app.use(about);
app.use(courses);
app.use(blog);
app.use(contact);
app.use(singleCourses);
app.use(singlePost);

app.listen(3000);