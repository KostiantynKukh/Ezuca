var express = require("express")
var router = express();

router.get("/blog",(req,res)=>{
    res.render("blog", {
        title: "Blog",
        bodyClass: "blog-page",
        entryHeader: "BLOG GRID",
        articleName1:"Which investment project should my company choose?",
        articleAuthor1:"Ms. Lara Croft",
        articleContent1: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
        articleName2:"Which investment project should my company choose?",
        articleAuthor2:"Ms. Lara Croft",
        articleContent2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
        articleName3:"Which investment project should my company choose?",
        articleAuthor3:"Ms. Lara Croft",
        articleContent3: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
        articleName4:"Which investment project should my company choose?",
        articleAuthor4:"Ms. Lara Croft",
        articleContent4: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
        articleName5:"Which investment project should my company choose?",
        articleAuthor5:"Ms. Lara Croft",
        articleContent5: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
        articleName6:"Which investment project should my company choose?",
        articleAuthor6:"Ms. Lara Croft",
        articleContent6: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
    });
})
module.exports = router;