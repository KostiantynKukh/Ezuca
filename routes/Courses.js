var express = require("express")
var router = express();

router.get("/courses",(req,res)=>{
    res.render("courses", {
        title: "Courses",
        bodyClass: "courses-page",
        entryHeader:"Courses Online",
        courseName1: "The Complete Android Developer Course",
        courseAuthor1: "Ms. Lara Croft",
        courseName2: "The Ultimate Drawing Course Beginner to Advanced",
        courseAuthor2: "Michelle Golden",
        courseName3: "The Complete Digital Marketing Course",
        courseAuthor3: "Ms. Lucius",
        courseName4: "The Unreal Engine Developer Course",
        courseAuthor4: "Mr. John Wick",
        courseName5: "Progressive Web Apps (PWA) - The Complete Guide",
        courseAuthor5: "Mr. Tom Redder",
        courseName6: "Cryptocurrency Investment Course 2018",
        courseAuthor6: "Russell Stephens"
    });
})
module.exports = router;