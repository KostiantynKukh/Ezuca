var express = require("express");
var router = express();

router.get("/single-post",(req,res)=>{
    res.render("single-post", {
        title: "Single Post",
        bodyClass: "single-blog-post",
        entryHeader: "The Unreal Engine Developer Course Learn C++ & Make Games"
    });
})
module.exports = router;