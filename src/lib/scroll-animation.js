import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline();

    tl.to(position, {
        x: 8.2617479743,
        y: 0.0262229300,
        z: 4.8205182659,
        scrollTrigger: {
            trigger: '.first-plant',
            start: 'top 75%',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
            ease: "power2.inOut"
        },
        onUpdate
    })
    .to(target, {
        x: 3.50,
        y: 0.00,
        z: 0.00,
        scrollTrigger: {
            trigger: '.first-plant',
            start: 'top 75%',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
            ease: "power2.inOut"
        },
    })
    .to(position, {
        x: -1.8849842312,
        y: -8.957473565,
        z: 0.4051478909,
        scrollTrigger: {
            trigger: '.description-section',
            start: 'top 75%',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
            ease: "power2.inOut"
        },
        onUpdate
    })
    .to(target, {
        x: -1.90,
        y: 0.36,
        z: 0.00,
        scrollTrigger: {
            trigger: '.description-section',
            start: 'top 75%',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    })
    .to(position, {
        x: -0.2774669079,
        y: 2.41,
        z: 9.752114362,
        scrollTrigger: {
            trigger: '.display-section',
            start: 'top 75%',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
            ease: "power2.inOut"
        },
        onUpdate
    })
    .to(target, {
        x: 0.00,
        y: 0.00,
        z: 0.00,
        scrollTrigger: {
            trigger: '.display-section',
            start: 'top 75%',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    })
    .to(position, {
        x: 1.8031021426,
        y: -9.5813723357,
        z: 2.671923614,
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 85%',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
            ease: "power2.inOut"
        },
        onUpdate
    })
    .to(target, {
        x: 2.00,
        y: 6.00,
        z: -1.80,
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 50%',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    })
    
}