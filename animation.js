// ================== GSAP ANIMATIONS ====================
if (window.innerWidth > 767) {
//------------ HOME SECTION ----------
gsap.from('.title-home', 1.5, {opacity: 0, x:-70, delay: 0.2});
gsap.from('.text-animation', 1.5, {opacity: 0, x:-100, delay: 0.4});
gsap.from('.home-content p', 1.5, {opacity: 0, x:-80, delay: 0.5});
gsap.from('.social-icons', 1.5, {opacity: 0, x:-90, delay: 0.7});
gsap.from('.btn-group', 1.5, {opacity: 0, x:-100, delay: 0.8});
gsap.from('.home-img', 1.5, {opacity: 0, x:70, delay: 1});


//--------- EDUCATION SECTION ------------
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".timeline-date", {
        scrollTrigger: {
            trigger: ".timeline-date", 
            start: "top 80%", 
            end: "top 20%", 
        },
        x: 30, 
        opacity: 0, 
        duration: 0.7,
        ease: "power1.inOut"
    });

    gsap.from(".timeline-content", {
        scrollTrigger: {
            trigger: ".timeline-content",
            start: "top 80%", 
            end: "top 20%", 
        },
        x: 40, 
        opacity: 0, 
        duration: 1,
        ease: "power1.inOut"
    });
});

//--------- SERVICES SECTION ------------
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".service-box", {
        scrollTrigger: {
            trigger: ".service-box", 
            start: "top 80%", 
            end: "top 20%", 
        },
        z: 40, 
        opacity: 0, 
        duration: 0.3 
    });

    gsap.from(".service-info", {
        scrollTrigger: {
            trigger: ".service-info", 
            start: "top 80%", 
            end: "top 20%", 
        },
        z: 20, 
        opacity: 0, 
        duration: 0.6
    });
});

//--------- TESTIMONIALS SECTION ------------
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".testimonial-item", {
        scrollTrigger: {
            trigger: ".testimonial-item", 
            start: "top 80%", 
            end: "top 20%", 
        },
        x: 50, 
        opacity: 0, 
        duration: 0.7 
    });

    gsap.from(".rating", {
        scrollTrigger: {
            trigger: ".rating", 
            start: "top 80%", 
            end: "top 20%", 
        },
        x: 50, 
        opacity: 0, 
        duration: 0.8
    });
});

//--------- PORTFOLIO SECTION ------------
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".portfolio-box", {
        scrollTrigger: {
            trigger: ".portfolio-box", 
            start: "top 80%", 
            end: "top 20%", 
        },
        z: 100, 
        opacity: 0, 
        duration: 0.5 
    });
});

//------------ CONTACT SECTION  ----------------------
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".input-group", {
        scrollTrigger: {
            trigger: ".input-group", 
            start: "top 80%", 
            end: "top 20%", 
        },
        x: 100, 
        opacity: 0, 
        duration: 0.6 
    });

    gsap.from(".input-group-2", {
        scrollTrigger: {
            trigger: ".input-group-2", 
            start: "top 80%", 
            end: "top 20%", 
        },
        x: 100, 
        opacity: 0, 
        duration: 0.9 
    });
});
};