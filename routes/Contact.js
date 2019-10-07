var express = require("express")
var router = express();

router.get("/contact",(req,res)=>{
    res.render("contact", {
        title:"Contact us",
        bodyClass: "contact-page",
        entryHeader: "CONTACT",
        contactTitle: "Contact Form",
        contactInfo: "Contact Information",
        contactContent: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.",
        location: "40 Baria Sreet 133/2 NewYork City, US",
        email: "info.deeercreative@gmail.com",
        phone: "(203) 123-6666"
    });
})
module.exports = router;