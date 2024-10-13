// gsap.to("#box1", {
//   x: 800,
//   duration: 1,
//   delay:1,
//   rotate:360,
//   repeat:1 , //will run 2 times, -1 will make it run infinitely
//   yoyo:true
// });

// gsap.from("h1",{
//     opacity:0,
//     color:"red",
//     duration:0.8,
//     y:20,
//     delay:0.2,
//     stagger:0.3
// })


// gsap.to("#box1", {
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// gsap.to("#box2", {
//     x:1500,
//     backgroundColor:"yellow",
//     // rotate:360,
//     duration:1.5,
//     delay:2.5
// })

// gsap.to("#box3", {
//     x:1500,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4
// })


// Timeline

// var tl = gsap.timeline()

// tl.to("#box1",{
//     x:800,
//     duration:1,
//     delay:1,
//     rotate:360,
// })

// tl.to("#box2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:1
// })

// tl.to("#box3",{
//     x:1500,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:1
// })


var tl = gsap.timeline()

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:0.8,
    delay:0.5
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:0.8,
    stagger:0.3
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.8,
    scale:2
})