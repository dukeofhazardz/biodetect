import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate, viewer, isTablet) => {
    const tl = gsap.timeline();
    const model = viewer.scene.getObjectByName("Sketchfab_Scene");

    const scale = isTablet ? 0.6 : 0.9;

    tl.to(model.scale, {
        x: scale,
        y: scale,
        z: scale,
        duration: 1,
        ease: "power2.inOut"
    })
    .to(position, {
        x: 8.26,
        y: 0.03,
        z: 4.82,
        scrollTrigger: {
            trigger: '.first-plant',
            start: isTablet ? 'top 20%' : 'top 75%',
            end: 'top top',
            scrub: 3,
            immediateRender: false,
            ease: "power2.inOut"
        },
        onUpdate
    })
    .to(target, {
        x: isTablet ? 2.50 : 3.50,
        y: 0.00,
        z: 0.00,
        scrollTrigger: {
            trigger: '.first-plant',
            start: isTablet ? 'top 20%' : 'top 75%',
            end: 'top top',
            scrub: 3,
            immediateRender: false,
            ease: "power2.inOut"
        },
    })
    .to(position, {
        x: isTablet ? -1.00 : -1.88,
        y: isTablet ? -9.02 : -8.96,
        z: isTablet ? 0.38 : 0.41,
        scrollTrigger: {
            trigger: '.description-section',
            start: isTablet ? 'top 30%' : 'top 75%',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
            ease: "power2.inOut"
        },
        onUpdate
    })
    .to(target, {
        x: isTablet ? -1.00 : -1.90,
        y: isTablet ? -2.50 : 0.36,
        z: isTablet ? 0.00 : 0.00,
        scrollTrigger: {
            trigger: '.description-section',
            start: isTablet ? 'top 30%' : 'top 75%',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    })
    .to(position, {
        x: isTablet ? 0.06 : -0.28,
        y: isTablet ? 0.48 : 2.41,
        z: isTablet ? 11.24 : 9.75,
        scrollTrigger: {
            trigger: '.display-section',
            start: isTablet ? 'top 20%' : 'top 75%',
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
            start: isTablet ? 'top 20%' : 'top 75%',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    })
    .to(position, {
        x: 1.80,
        y: -9.58,
        z: 2.67,
        scrollTrigger: {
            trigger: '.about-section',
            start: isTablet ? 'top 20%' : 'top 85%',
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
            start: isTablet ? 'top 20%' : 'top 50%',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    })
}