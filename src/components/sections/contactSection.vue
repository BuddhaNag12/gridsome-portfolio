<template>
  <section class="h-auto border-custom" id="contact">
    <div class="relative">
      <div class="absolute right-5">
        <svg
          width="176"
          height="503"
          viewBox="0 0 176 503"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="hidden md:block"
            id="path-1"
            d="M52 461L89.215 391L124.9 461H52Z"
            stroke="url(#paint0_linear)"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            id="path-2"
            d="M127.69 92.4L108.7 128.8H70.9L52 92.4L70.9 56H108.7L127.69 92.4Z"
            stroke="url(#paint1_linear)"
            stroke-width="4"
            stroke-miterlimit="10"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="52"
              y1="461"
              x2="52"
              y2="391"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00FFFF" />
              <stop offset="1" stop-color="#CCFF66" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="52"
              y1="56"
              x2="52"
              y2="128.8"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF0000" />
              <stop offset="1" stop-color="#FFCC00" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <div class="container w-full lg:pl-16 pt-20 mb-16">
      <div class="text-area lg:ml-10 ml-6 m-4 mb-10 lg:w-2/6">
        <h1
          class="text-secondary-text-color lg:text-7xl text-3xl font-semibold"
        >
          Don't be shy,
        </h1>
        <h1 class="text-primary-text-color lg:text-6xl text-3xl font-semibold">
          To say hi;
        </h1>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-10 pt-10 justify-items-start lg:justify-items-center"
      >
        <div class="wrapper text-white text-2xl sm:text-xl mb-16 z-10">
          <div class="wrap lg:w-60 grid grid-flow-row gap-3">
            <a
              href="https://www.linkedin.com/in/buddha-nag-391880192/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-linkedin pr-2"></i>

              linkedIn/buddha-nag</a
            >
            <a
              href="https://www.facebook.com/NagBuddha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-facebook-f pr-2"></i>facebook/buddha-nag</a
            >
            <a
              href="https://www.instagram.com/_geek_buddha_/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fa fa-instagram pr-2"></i>instagram/buddha-nag</a
            >
          </div>
        </div>
        <div class="wrapper text-white text-2xl sm:text-xl z-50">
          <div class="wrap lg:w-60 grid grid-flow-row gap-3">
            <a
              href="https://github.com/BuddhaNag12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-github mr-2"></i>

              github/buddha-nag</a
            >
            <a
              href="https://twitter.com/buddha_nag"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-twitter mr-2"></i>

              Twitter/buddha-nag</a
            >
            <a
              href="https://www.fiverr.com/rahulnag710?up_rollout=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              user/Fiverr</a
            >
          </div>
        </div>
        <div class="wrapper text-white text-2xl sm:text-xl mt-10 lg:mt-0 z-50">
          <div class="wrap w-auto grid grid-flow-row gap-3">
            <h1 class="text-accent-dark text-lg">Start a project or collaborate?</h1>
            <a
              href="mailto:buddhanag12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
             buddhanag12@gmail.com</a
            >
            <div class="flex flex-row justify-between">
              <div class="flex flex-col justify-between">
                <h1 class="text-muted-text-color text-sm">Referances &nbsp;</h1>
                <a
                  href="https://greensock.com/"
                  target="_blank"
                  class="text-xs"
                  rel="noopener noreferrer"
                  >greenShock</a
                >
                <a
                  href="https://undraw.co/"
                  target="_blank"
                  class="text-xs"
                  rel="noopener noreferrer"
                  >undraw</a
                >
                <a
                  href="https://www.svgbackgrounds.com/"
                  target="_blank"
                  class="text-xs"
                  rel="noopener noreferrer"
                  >svgbackgrounds</a
                >
              </div>
                <div class="flex flex-col justify-between">
                <a
                  href="https://mattboldt.com/demos/typed-js/"
                  target="_blank"
                  class="text-xs"
                  rel="noopener noreferrer"
                  >typedjs</a
                >
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  class="text-xs"
                  rel="noopener noreferrer"
                  >tailwindcss</a
                >
                <a
                  href="https://www.npmjs.com/package/axios"
                  target="_blank"
                  class="text-xs"
                  rel="noopener noreferrer"
                  >axios</a
                >
                <a
                  href="https://gridsome.org/"
                  target="_blank"
                  class="text-xs"
                  rel="noopener noreferrer"
                  >{jamstack}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="hrStyle" />
  </section>
</template>



<script>
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

export default {
  mounted() {
    gsap.to("#path-1", {
      repeat: -1,
      // motionPath: {
      //   path: "#path",
      //   align: "#path",

      //   // alignOrigin: [0, 1],
      // },
      rotate: -360,
      transformOrigin: "50%",
      duration: 10,
      ease: "linear",
    });
    gsap.to("#path-2", {
      repeat: -1,
      // motionPath: {
      //   path: "#path",
      //   align: "#path",

      //   // alignOrigin: [0, 1],
      // },
      rotate: 360,
      transformOrigin: "50%",
      duration: 10,
      ease: "linear",
    });
  },
};
</script>

<style scoped>
/* #bg-img {
  background-image: url(~@/assets/background2.png);
  background-size: cover;
  background-repeat: no-repeat;
} */

a:hover {
  color: #00cecd;
}
</style>