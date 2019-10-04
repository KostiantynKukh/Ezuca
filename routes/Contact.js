var express = require("express")
var router = express();

router.get("/contact",(req,res)=>{
    res.render("contact", {
        page:"Contact us"
    });
})
module.exports = router;