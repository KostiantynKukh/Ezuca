var express = require("express")
var router = express();

router.get("/",(req,res)=>{
    res.render("index", {
        title: "Home page",
        bodyClass:"",
        entryHeaderSm: "Get started with online courses",
        entryHeader1: "best online",
        entryHeader2: "Learning system",
        entryContent: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        userTitle: "Learn From The Experts",
        userContent: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        folderTitle: "Book Library & Store",
        folderContent: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        bookTitle: "Best Course Online",
        bookContent: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        worldTitle: "Best Industry Leaders",
        worldContent: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
        coursesMainTitle: "Featured Courses",
        courseTitle1: "The Complete Android Developer Course",
        courseAuthor1:"Ms. Lara Croft",
        courseTitle2: "Learn Photoshop, Web Design & Profitable",
        courseAuthor2: "Mr. John Wick",
        aboutTitle: "About Ezuca",
        aboutContent: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
    });
})
module.exports = router;