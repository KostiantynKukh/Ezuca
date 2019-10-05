var express = require("express")
var router = express();

router.get("/courses",(req,res)=>{
    res.render("courses", {
        title: "Courses",
        bodyClass: "courses-page",
        entryHeader:"Courses Online"
    });
})
module.exports = router;