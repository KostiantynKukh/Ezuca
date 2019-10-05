var express = require("express")
var router = express();

router.get("/about",(req,res)=>{
    res.render("about", {
        title: "About us",
        bodyClass: "about-page",
        entryHeader: "ABOUT"
    });
})
module.exports = router;