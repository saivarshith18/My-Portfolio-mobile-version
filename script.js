var iopen = document.querySelector("nav i");
var iclose = document.querySelector("#sidebar i");


iopen.addEventListener("click",function(){
    gsap.to("#sidebar",{
        right:0
    })
    gsap.from("#sidebar h1",{
        x:-10,
        opacity:0,
        delay:0.4,
        stagger:0.2
    })
    gsap.to("nav",{
        backgroundColor:"black"
    })
})
iclose.addEventListener("click",function(){
    gsap.to("#sidebar",{
        right:"-70%"
    })
    gsap.to("nav",{
        backgroundColor:"rgba(255, 255, 255, 0.102)"
    })
})


gsap.to("nav",{
    backgroundColor:"rgba(255, 255, 255, 0.102)",
    backdropFilter: "blur(20px)",
    height:"60px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        start:"top -5%",
        scrub:1
    }
})
gsap.from("#mypic img",{
    opacity:0,
    x:10,
})

gsap.from("nav h1,nav i",{
    opacity:0,
    y:-10
})
gsap.from("#sal h1",{
    opacity:0,
    x:-10,
    delay:0.3
})
gsap.from("#name h1",{
    opacity:0,
    x:-10,
    delay:0.5
})
gsap.from("#name p",{
    opacity:0,
    x:-10,
    delay:0.7
})
gsap.from("#resume",{
    opacity:0,
    delay:1
})
gsap.from("#social i",{
    opacity:0,
    delay:1.5
})
gsap.from("#social",{
    height:0,
    delay:1
})

gsap.from(".box",{
    opacity:0,
    x:50,
    duration:0.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        start:"top 70%",
        end:"top 10%",
        scrub:1
    }
})
gsap.from("#title1 h1",{
    opacity:0,
    x:-10,
    scrollTrigger:{
        trigger:"#title1 h1",
        scroll:"body",
        start:"top 70%",
        end:"top 70%",
        scrub:1
    }
})

gsap.to("#page3 span",{
    opacity:1,
    stagger:0.3,
    duration:0.2,
    scrollTrigger:{
        trigger:"#page3 span",
        scroller:"body",
        start:"top 70%",
        end:"top 70%",
        scrub:2
    } 
})
gsap.from(".skill",{
    opacity:0,
    scale:0.3,
    duration:0.3,
    scrollTrigger:{
        trigger:".skill",
        scroller:"body",
        start:"top 70%",
        end:"top 70%",
        scrub:1

    }
})
gsap.from("#p1",{
    x:-80,
    scale:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#p1",
        scroll:"body",
        start:"top 70%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("#p2",{
    x:80,
    scale:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#p2",
        scroll:"body",
        start:"top 70%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from(".pro",{
    opacity:0,
    x:-50,
    duration:0.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:".pro",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:1
    }
})

gsap.from("#page5 h1",{
    opacity:0,
    x:-10,
    scrollTrigger:{
        trigger:"#page5 h1",
        scroll:"body",
        start:"top 70%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("form",{
    x:-80,
    opacity:0,
    scrollTrigger:{
        trigger:"form",
        scroll:"body",
        start:"top 70%",
        end:"top 70%",
        scrub:1
    }
})