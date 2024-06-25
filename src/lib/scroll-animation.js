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
            immediateRender: false
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
            immediateRender: false
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
            immediateRender: false
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
    
}