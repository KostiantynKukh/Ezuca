var express = require("express")
var router = express();

router.get("/blog",(req,res)=>{
    res.render("blog", {
        title: "Blog",
        bodyClass: "blog-page",
        entryHeader: "BLOG GRID"
    });
})
module.exports = router;