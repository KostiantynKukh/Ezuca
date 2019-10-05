var express = require("express")
var router = express();

router.get("/contact",(req,res)=>{
    res.render("contact", {
        title:"Contact us",
        bodyClass: "contact-page",
        entryHeader: "CONTACT"
    });
})
module.exports = router;