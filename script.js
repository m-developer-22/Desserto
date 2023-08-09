
gsap.from("#section1 #nav",{
    y:-50,
    duration:1,
    opacity:0
    // ease:Expo.easeInOut
    // ease:Circ.easeInOut
    // ease:Power3,
})
gsap.from("#section1 #hero",{
    width:0,
    delay:.5,
    duration:1
})
gsap.from("#section1 #heroball",{
    delay:.5,
    x:-80,
    opacity:0,
    duration:1
})
gsap.from("#section1 #chef",{
    delay:.5,
    x:100,
    opacity:0,
    duration:1,
    onComplete:function(){
        // document.querySelector("#dets").style.opacity="1";
        gsap.to("#dets",{
            x:-15,
            opacity:1,
            duration:.2
        })
    }
})

gsap.from("#section1 #content h1 span",{
    delay:.5,
    y:"100%",
    // stagger:.3,
    opacity:0,
    duration:1,
    // ease:Expo.easeInOut
})


gsap.from("#section1 #btns",{
    scrollTrigger:{
        trigger: "#section1 #btns",
        start: "top 95%",
        // markers: true,
    },
    opacity:0,
    duration:1,
    y:100,
    ease:Expo.easeInOut
})




gsap.from("#section2 #s2mid",{
    scrollTrigger:{
        trigger: "#section2",
        start: "top 80%",
        // markers: true,
    },
    width:0,
    // opacity:0,
    duration:2,
    // y:100,
    // ease:Expo.easeInOut
})

gsap.from("#section2 #s2overlay #s2top #topleft .s2lc",{
    scrollTrigger:{
        trigger: "#section2",
        start: "top 80%",
        // markers: true,
    },
    y:-50,
    stagger:.5,
    duration:1,
    opacity:0
})

gsap.from("#section2 #s2overlay #s2top #topright",{
    scrollTrigger:{
        trigger: "#section2",
        start: "top 80%",
        // markers: true,
    },
    x:100,
    duration:1,
    opacity:0
})

gsap.from("#main #section2 #s2overlay #s2top #topmid #textcontainer h2",{
    scrollTrigger:{
        trigger: "#section2",
        start: "top 80%",
        // markers: true,
    },
    y:-100,
    duration:1.5,
    opacity:0
})

gsap.from("#main #section2 #s2overlay #s2bottom .leaf",{
    scrollTrigger:{
        trigger: "#section2 #s2mid",
        start: "top 80%",
        // markers: true,
    },
    y:100,
    duration:1.5,
    opacity:0,
    ease:Power3,
})




gsap.from("#main #section3 #midhero",{
    scrollTrigger:{
        trigger: "#section3",
        start: "top 80%",
        // markers: true,
    },
    y:300,
    duration:1.5,
    opacity:0,
    width:0,
    height:0,
    ease:Power3,
})


gsap.from("#main #section3 .s3",{
    scrollTrigger:{
        trigger: "#section3",
        start: "top 80%",
        // markers: true,
    },
    duration:1.5,
    opacity:0,
    delay:1,
    ease:Power3,
})



gsap.from("#main #section3 #s3h1text h1 span",{
    scrollTrigger:{
        trigger: "#main #section3 #s3h1text",
        start: "top 80%",
        // markers: true,
    },
    y:"100%",
    // stagger:.3,
    opacity:0,
    duration:1,
})



gsap.from("#main #section4 #s4left #ceo",{
    scrollTrigger:{
        trigger: "#main #section4 #s4right",
        start: "top 60%",
        // markers: true,
    },
    y:"100%",
    // stagger:.3,
    opacity:0,
    duration:1,
})

gsap.from("#main #section4 #s4left #info",{
    scrollTrigger:{
        trigger: "#main #section4 #s4right",
        start: "top 60%",
        // markers: true,
    },
    y:"100%",
    delay:.3,
    opacity:0,
    duration:1,
})

gsap.from("#main #section4 #s4right h1 span",{
    scrollTrigger:{
        trigger: "#main #section4 #s4right",
        start: "top 60%",
        // markers: true,
    },
    y:"100%",
    // stagger:.3,
    // opacity:0,
    duration:1,
})


gsap.from("#main #section5 #s5left img",{
    scrollTrigger:{
        trigger: "#main #section5 #s5left img",
        start: "top 10%",
        // markers: true,
    },
    y:"-100%",
    // stagger:.3,
    opacity:0,
    duration:3,
})
gsap.from("#main #section5 #s5left h2",{
    scrollTrigger:{
        trigger: "#main #section5 #s5left h2",
        start: "top 85%",
        // markers: true,
    },
    x:-100,
    // stagger:.3,
    opacity:0,
    duration:1,
})
gsap.from("#main #section5 #s5left #arrow",{
    scrollTrigger:{
        trigger: "#main #section5 #s5left #arrow",
        start: "top 85%",
        // markers: true,
    },
    x:50,
    // stagger:.3,
    opacity:0,
    duration:1,
})

gsap.from("#main #section5 #s5right #rightupper img",{
    scrollTrigger:{
        trigger: "#main #section5 #s5right #rightupper img",
        start: "top 85%",
        // markers: true,
    },
    y:"100%",
    // stagger:.3,
    opacity:0,
    duration:1.5,
})

gsap.from("#main #section5 #s5right #rightupper h2",{
    scrollTrigger:{
        trigger: "#main #section5 #s5right #rightupper",
        start: "top 85%",
        // markers: true,
    },
    x:"100%",
    // stagger:.3,
    // opacity:0,
    duration:1.5,
})

gsap.to("#main #section5 #s5right #rightlower #lowerlayer",{
    scrollTrigger:{
        trigger: "#main #section5 #s5right #rightlower #lowerlayer",
        start: "top 75%",
        // markers: true,
    },
    height:0,
    // stagger:.3,
    // opacity:0,
    duration:2.5,
})


gsap.from("#main #section6 #s6overlay h1 span",{
    scrollTrigger:{
        trigger: "#main #section6 #s6overlay",
        start: "top 60%",
        // markers: true,
    },
    y:"100%",
    // stagger:.3,
    // opacity:0,
    duration:1,
})
gsap.from("#main #section6 #s6overlay #s3dusra h2 span",{
    scrollTrigger:{
        trigger: "#main #section6 #s6overlay",
        start: "top 60%",
        // markers: true,
    },
    y:"100%",
    // stagger:.3,
    // opacity:0,
    duration:1.3,
})

gsap.from("#main #section6 #s6overlay #btn",{
    scrollTrigger:{
        trigger: "#main #section6 #s6overlay",
        start: "top 60%",
        // markers: true,
    },
    // stagger:.3,
    opacity:0,
    duration:1,
})

gsap.from("#main #section6 #s6overlay #youtube",{
    scrollTrigger:{
        trigger: "#main #section6 #s6overlay",
        start: "top 25%",
        // markers: true,
    },
    // stagger:.3,
    x:100,
    opacity:0,
    duration:1,
})

gsap.from("#main #section6 #s6overlay>img",{
    scrollTrigger:{
        trigger: "#main #section6 #s6overlay",
        start: "top 25%",
        // markers: true,
    },
    // stagger:.3,
    // x:100,
    ease:Expo.easeInOut,
    opacity:0,
    duration:1,
})



gsap.from("#main #section7 #s7left",{
    scrollTrigger:{
        trigger: "#main #section7 #s7left",
        start: "top 25%",
        // markers: true,
    },
    // stagger:.3,
    x:-100,
    // ease:Expo.easeInOut,
    opacity:0,
    duration:1,
})
gsap.from("#main #section7 #s7right #s7textcontainer",{
    scrollTrigger:{
        trigger: "#main #section7 #s7right",
        start: "top 25%",
        // markers: true,
    },
    // stagger:.3,
    y:100,
    // ease:Expo.easeInOut,
    opacity:0,
    duration:1,
})

gsap.from("#main #section7 #arrows #arrowright",{
    scrollTrigger:{
        trigger: "#main #section7 #arrows #arrowright",
        start: "top 90%",
        // markers: true,
    },
    // stagger:.3,
    x:-100,
    // ease:Expo.easeInOut,
    opacity:0,
    duration:1,
})
gsap.from("#main #section7 #arrows #arrowleft",{
    scrollTrigger:{
        trigger: "#main #section7 #arrows #arrowleft",
        start: "top 90%",
        // markers: true,
    },
    // stagger:.3,
    x:100,
    // ease:Expo.easeInOut,
    opacity:0,
    duration:1,
})

// gsap.from("#main #section8 #mainimg",{
//     scrollTrigger:{
//         trigger: "#main #section8 #mainimg",
//         start: "top 90%",
//         markers: true,
//     },
//     // stagger:.3,
//     // x:100,
//     // width:0,
//     // ease:Expo.easeInOut,
//     opacity:0,
//     duration:1.5,
//     delay:1
// })



gsap.from("#main #section8 #s8contents h2 span",{
    scrollTrigger:{
        trigger: "#main #section8 #s8contents h2 span",
        start: "top 60%",
        // markers: true,
    },
    y:"100%",
    // stagger:.3,
    // opacity:0,
    duration:1,
})
gsap.from("#main #section8 #s8contents h1 span",{
    scrollTrigger:{
        trigger: "#main #section8 #s8contents h2 span",
        start: "top 60%",
        // markers: true,
    },
    y:"100%",
    // stagger:.3,
    // opacity:0,
    duration:1,
})


gsap.from("#main #section8 #s8contents #email",{
    scrollTrigger:{
        trigger: "#main #section8 #s8contents h2 span",
        start: "top 60%",
        // markers: true,
    },
    // y:"100%",
    // stagger:.3,
    opacity:0,
    duration:1.5,
})

gsap.from("#s8shine1",{
    scrollTrigger:{
        trigger: "#main #section8",
        start: "top 60%",
        // markers: true,
    },
    rotate:"90deg",
    duration:1.5,
})
gsap.from("#s8shine2",{
    scrollTrigger:{
        trigger: "#main #section8",
        start: "top 60%",
        // markers: true,
    },
    rotate:"90deg",
    duration:1.5,
})
gsap.from("#s8shine3",{
    scrollTrigger:{
        trigger: "#main #section8",
        start: "top 60%",
        // markers: true,
    },
    rotate:"90deg",
    duration:1.5,
})
gsap.from("#s8shine4",{
    scrollTrigger:{
        trigger: "#main #section8",
        start: "top 60%",
        // markers: true,
    },
    rotate:"90deg",
    duration:1.5,
})
gsap.from("#s8shine5",{
    scrollTrigger:{
        trigger: "#main #section8",
        start: "top 60%",
        // markers: true,
    },
    rotate:"90deg",
    duration:1.5,
})