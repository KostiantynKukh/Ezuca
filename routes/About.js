var express = require("express")
var router = express();

router.get("/about",(req,res)=>{
    res.render("about", {
        title: "About us",
        bodyClass: "about-page",
        entryHeader: "ABOUT",
        entryHeader1: "Welcome to Ezuca",
        entryContent: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
        storiesTitle: "Our Stories",
        storiesContent1: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
        storiesContent2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis eros lobortis, vestibulum turpis ac, pulvinar odio.",
        valuesTitle: "Our Stories",
        valuesContent1: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
        valuesContent2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis eros lobortis, vestibulum turpis ac, pulvinar odio.",
        aboutTitle: "About Ezuca",
        aboutContent: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
        userQuote1: "Together as teachers, students and universities we can help make this education available for everyone.",
        authorQuote1: "Russell Stephens",
        userQuote2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        authorQuote2: "Robert Stephens",
        userQuote3: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        authorQuote3: "James Stephens",
        teamTitle: "Meet Our Team"
    });
})
module.exports = router;