var initBanner = (function() {
    'use strict';
    var timeline;
    var drag;
    var width;
    var height;
        function initBanner() {
            width = 970;
            height = 250;
            idsToVars();
            initAnimation();

            function initAnimation() {
                drag = gsap.registerPlugin(Draggable);
                gsap.registerPlugin(TextPlugin)

                Draggable.create([me, me2, me3, me4, me5, me6, me7], {
                    type: 'x',
                    bounds: document.getElementById('wrapper'),
                    onClick: () => {
                        console.log('clicked');
                    }
                })

                timeline = gsap.timeline({
                    delay: 0.2,
                    paused: true
                })
                .add(frame1(), 0)
                .set(wrapper, { autoAlpha: 1 }, 0)
                .set([bg1, bg2, bg3, bg4, bg5, visit], {autoAlpha: 0},0)
                .set([me, me2, me3, me4, me5, me6, me7], {x: '-200px'}, 0)
                .add(frame1(),0)
                .play();
            
            }
                
        }
        
        function frame1() {
            return gsap.timeline()
            .to(bg1, {duration: 3,  autoAlpha: 1, ease:'expo.out', x: 1}, 0.1)
            .to(firstname, {duration: 1.5, x: '400px', ease:'expo.out'}, 0.5)
            .to(firstname, {duration: 1.5, text: "is the coolest of cats", ease: 'none', delay: 2}, 0.5)
            // .to(lastname, {duration: 1.5, x: '400px', ease:'expo.out'}, 0.9)
            .to(firstname, {duration: 1, autoAlpha: 0, ease: 'circ.out'}, '>+1.5')
            .to('.sprite-scale', {duration: 2, x: '750px', stagger: 0.2, ease: 'sine.out', force3D: true}, 1.5)
            .to(bg2, {duration: 2.5,  autoAlpha: 1, ease:'expo.out', x: 1}, 2.5)
            .to(bg3, {duration: 2,  autoAlpha: 1, ease:'expo.out', x: 1}, 3.5)
            .to(bg4, {duration: 2,  autoAlpha: 1, ease:'expo.out', x: 1}, 4.5)
            .to(bg5, {duration: 2,  autoAlpha: 1, ease:'expo.out', x: 1}, 5.5)
            .to(visit, {duration: 10, autoAlpha: 1, ease:'expo.out'}, 6)
    
        }

        function idsToVars() {
            [].forEach.call(document.querySelectorAll('*'), function(el) {
                if (el.id) window[el.id] = el;
            });
        }
        return initBanner();
})();