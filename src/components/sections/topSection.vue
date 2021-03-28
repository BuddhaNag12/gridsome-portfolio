<template>
  <section id="top" class="h-auto">
    <div
      class="grid grid-col-1 md:grid-cols-2 sm:grid-cols-2 gap-1 justify-items-center"
    >
      <!-- Start of left top hero image -->
      <div id="img" class="left-img row-start-2 lg:row-start-1 md:row-start-1">
        <g-image src="~/assets/img3.png" immediate width="450" quality="100" />
      </div>
      <!-- End of the hero image -->
      <!-- start of top typography right section -->
      <div id="right-side" class="lg:justify-self-start">
        <h1
          id="heading"
          class="font-bold text-6xl md:text-7xl lg:text-9xl text-primary-text-color capitalize"
        >
          Hello
        </h1>
        <h1
          id="subHeading"
          class="font-normal lg:text-6xl md:text-7xl text-2xl text-accent-light capitalize"
        >
          I'm Buddha
        </h1>
        <div class="card-section mt-5">
          <div class="TypeCard w-72 h-44 p-4">
            <div class="text-white">
              <div id="typeText"></div>
            </div>
          </div>
        </div>
        <div class="card-section lg:ml-24 mt-4">
          <div class="TypeCard w-72 h-56 p-4">
            <div class="text-white">
              <div id="typeText-2"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of top typography right section -->
    </div>
  </section>
</template>

<script>
import Typed from "typed.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    this.animateWords();
    this.firstType();
  },
  methods: {
    firstType() {
      new Typed("#typeText", {
        strings: [
          `<code>
        <span class="code_comment text-gray-500 font-normal">//Introduction of myself</span>
          <br />
          <span class="name_selector text-accent-code">Name</span>
          <span class="code_brace text-white">{</span>
          <br />
          &nbsp;&nbsp;
          <span class="code_property text-white">FirstName:</span>
          <span class="code_value text-secondary-text-color">Buddha;</span>
          <br />
          &nbsp;&nbsp;
          <span class="code_property text-white">LastName:</span>
          <span class="code_value text-secondary-text-color">Nag;</span>
          <br />
          <span class="code_brace text-white">}</span>
          </code>
          `,
        ],
        onComplete: this.secondType,
        typeSpeed: 10,
        backSpeed: 0,
        startDelay: 4000,
        showCursor: true,
      });
    },
    secondType() {
      new Typed("#typeText-2", {
        strings: [
          `<code>
          <span class="name_selector capitalize text-accent-code">What i use</span>
          <span class="code_brace text-white">{</span>
          <br />
          &nbsp;&nbsp;
          <span class="code_property text-white">Profession:</span>
          <span class="code_value text-secondary-text-color">Developer;</span>
          <br />
          &nbsp;&nbsp;
          <span class="code_property text-white">Expert:</span>
          <span class="code_value text-secondary-text-color">Javascript;</span>
          <br />
           &nbsp;&nbsp;
           <span class="name_selector capitalize text-accent-code">Framework</span>
            <span class="code_brace text-white">:[</span>
              <br />
               &nbsp;&nbsp;
           <span class="code_value text-secondary-text-color">Vuejs;</span>
             <br />
              &nbsp;
            <span class="code_brace text-white">]</span>
              <br />
          <span class="code_brace text-white">}</span>
          </code>
          `,
        ],
        typeSpeed: 10,
        backSpeed: 0,
        showCursor: true,
      });
    },

    animateWords() {
      gsap
        .timeline()
        .from("#img", {
          scrollTrigger: {
            trigger: "#img",
            toggleActions: "restart pause resume pause",
          },
          x: -200,
          opacity: 0,
          duration: 1.5,
        })
        .from("#heading", {
          y: 100,
          opacity: 0,
          stagger: 0.2,
        })
        .from("#subHeading", {
          y: 100,
          opacity: 0,
          stagger: 0.2,
        })
        .from(".card-section", {
          duration: 1.5,
          x: 100,
          opacity: 0,
          stagger: 0.5,
        });
    },
  },
};
</script>

<style scoped>
.TypeCard {
  background-image: linear-gradient(193deg, #313960 0%, #11152b 100%);
  box-shadow: 0 0 0 0 #ffffff;
}
.name_selector {
  color: #e68fff;
}
.typed-cursor {
  color: white;
}
</style>