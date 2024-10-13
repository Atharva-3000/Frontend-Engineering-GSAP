// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
// })

// gsap.from("#page2 h1",{
//     opacity:0,
//     x:500,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//     }
// })

// gsap.from("#page2 h3",{
//     opacity:0,
//     x:-500,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//     }
// })

// gsap.from("#page2 #box",{
//     scale:0,
//     opacity:0,
//     rotate:720,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 30%",
//         scrub:2,
//         pin:true,
//     }
// })


gsap.to("#page2 h1",{
    transform:"translateX(-160%)",
    scrollTrigger:{
        // whenever you use pin, make sure to specify parent element as trigger
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        scrub:2,
        end:"top -150%",   //can help you with speed related to scroll
        pin:true,
    }
})