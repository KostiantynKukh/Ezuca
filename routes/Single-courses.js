var express = require("express");
var router = express();

router.get("/single-courses",(req,res)=>{
    res.render("single-courses", {
        title: "Single Courses",
        bodyClass: "single-courses-page",
        entryHeader: "The Unreal Engine Developer Course Learn C++ & Make Games"
    });
})
module.exports = router;