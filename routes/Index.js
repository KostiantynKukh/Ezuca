var express = require("express")
var router = express();

router.get("/",(req,res)=>{
    res.render("index", {
        title: "Home page",
        bodyClass:""
    });
})
module.exports = router;