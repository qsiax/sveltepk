<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import TweenMax from "gsap/all";
    import { Power2, Elastic, CSSPlugin, Expo } from "gsap/all";

    onMount(async () => {
            gsap.registerPlugin(TweenMax);
            
            TweenMax.to('.overlay-preloader-logo', 1.5, {
                delay: .5,
                x: "0%",
                ease: Expo.easeInOut
            })
            TweenMax.to('.overlay-preloader', 1.5, {
                delay: 3,
                width: 0,
                ease: Expo.easeInOut
            })
            TweenMax.to('.overlay-preloader-logo', 1.5, {
                delay: 2.8,
                x: "-100%",
                ease: Expo.easeInOut
            })
            TweenMax.to('.overlay-preloader-el01', 1.5, {
                delay: 3,
                right: "100%",
                ease: Expo.easeInOut
            })
    })
</script>

<div class="overlay-preloader">
    <div class="overlay-preloader-text-wrapper">
            <div class="overlay-preloader-logo">
                ПОКРОВСКИЙ
                КОЛЛЕДЖ
            </div>
    </div>
    <div class="overlay-preloader-el01"></div>
  </div>
  