const loco = () => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector(".main").style.transform
          ? "transform"
          : "fixed"*/
    });




}
loco()
const cursor = new MouseFollower();
Shery.makeMagnet(".magnet");

function nav() {
    gsap.to(".left svg", {
        transform: "translateY(-205%)",
        duration: 0.8,
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            start: "top 0%",
            end: "top -5%",
            scrub: 1
        }
    })
    gsap.to(".right .links", {
        transform: "translateY(-100%)",
        duration: 0.8,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            start: "top 0%",
            end: "top -5%",
            scrub: true
        }
    })
}
nav()
gsap.registerPlugin(ScrollTrigger);
function pageOneAnimation() {
    gsap.from(".page1_content h1", {
        y: 100,
        delay: 0.4,
        stagger: 0.3,
        opacity: 0,
        duration: 1,
    })
    gsap.from(".video_container", {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        y: 100,
        scrollTrigger: {
            scroller: ".main",
            trigger: ".page1_content h1",
            start: "bottom"
        }
    })
}
pageOneAnimation()
function page2Animation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            scroller: ".main",
            start: "top 0%",
            end: "top -30%",
        }
    })
    tl.from(".elem1", {
        opacity: 0,
        y: 100,
    })
    tl.from(".elem2", {
        opacity: 0,
        y: 100,
    })
    tl.from(".elem3", {
        opacity: 0,
        y: 100,
    })
}
page2Animation();
function page3Animation() {
    gsap.from("#child1,#child2", {
        opacity: 0,
        scrollTrigger: {
            trigger: ".page3",
            scroller: ".main",
            start: "top 0%",
            end: "bottom -30%",
        }
    })
    gsap.from("#child3,#child4", {
        opacity: 0,
        scrollTrigger: {
            trigger: "#child2",
            scroller: ".main",
            start: "bottom 0%",
            end: "bottom -30%",
        }
    })
    gsap.from("#child5,#child6", {
        opacity: 0,
        scrollTrigger: {
            trigger: "#child3",
            scroller: ".main",
            start: "bottom 0%",
            end: "bottom -30%",
        }
    })
}
gsap.from(".logo img", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".page5",
        scroller: ".main",
        start: "top 30%",
        end: "bottom bottom",
    }
})