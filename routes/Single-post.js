var express = require("express");
var router = express();

router.get("/single-post",(req,res)=>{
    res.render("single-post", {
        title: "Single Post",
        bodyClass: "single-blog-post",
        entryHeader: "The Unreal Engine Developer Course Learn C++ & Make Games",
        postAuthor: "Ms. Lara Croft",
        postContent: [
            "This is what we do: My husband monitors travel sites and email subscription services for super-cheap flights or error fares. Sometimes one of us travels for work and the other tags along. When we find a good deal, we make a split-second decision - because great airfares don't last long - and then start planning. We're both freelance writers, so we have some flexibility in terms of scheduling. We watch hotel prices, and often book rooms using points, free nights and other discounts. We plan carefully, and if we decide that a trip might involve stops in multiple cities, we price our transportation options. We check exchange rates on currency. We read up on attractions, look for deals, and seek out free walking tours.",
            "In the past few years, we've been to mountains, beaches, massive cities and isolated towns you could speed through in a blink. We've been all over the U.S. and to a dozen or so countries. That means long flights, wandering dazedly through strange places, sometimes not knowing what or where we'll be eating next or exactly when we'll make it to our next destination. But it also means volcanoes, glaciers, geysers and warm friendly strangers from all over the world.",
            "And it means memories we'll treasure forever. Our friends think it's kind of kitschy, but my husband, Mike, and I collect magnets from the places we go. We arrange them on the side of the fridge that faces our table in the kitchen, so that when we're sitting together we can see the collection, which reminds us of some of our happiest times.",
            "Some part of the benefit is purely financial. There are experiences and lessons you learn on the road that can be directly applied to business and investment. You witness firsthand new trends, or the way old trends have shown up in new places, or the way some trends seem nearly universal. You see for yourself new styles of clothing, where young professionals are shopping, which brands are popular in different places.",
            "In some countries, you need only to scan a busy street to get a clear sense of what might soon be popular in the U.S., and which American exports might be the next big thing somewhere else. (In Portugal, we were surprised when a woman in her 20s told us how much she loves Guy Fieri.)"
        ],
        postQuote: 'Some people dream of success, while other people get up every morning and make it happen."'     
    });
})
module.exports = router;