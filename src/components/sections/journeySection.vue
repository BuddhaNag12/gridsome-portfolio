<template>
  <section id="journey">
    <div class="h-auto mb-20 mt-20">
      <div class="container lg:pl-10 lg:pt-5">
        <div class="text-area lg:ml-10 m-4 mb-20 lg:w-2/4">
          <h1
            class="text-primary-text-color lg:text-6xl text-4xl font-semibold"
            id="midWord"
          >
            #05
          </h1>
          <h1
            id="midWord"
            class="text-secondary-text-color lg:text-6xl text-4xl font-semibold"
          >
            Years;
          </h1>
          <p
            id="midWord-2"
            class="text-muted-text-color text-xl mt-2 capitalize"
          >
            It’s the 31st of December and 2016 is about to end. For so many
            years I have had been reading posts from different software
            developers about how they spent the year and how they were planning.
            so i decided to join the journey that will make me a developer
          </p>
          <hr class="hrStyle mt-4" />
        </div>
      </div>
      <div
        class="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center text-white"
      >
        <Card
          id="card"
          cardHeader="2017"
          cardSubHeader="Java Developer"
          cardBody="By learning Java i become quite aware about how object oriented approach works so i decided to learn more about java and started building small apps in javafx and java swing"
        />
        <!-- wrap -->
        <div class="hidden lg:block">
          <Card
            id="card"
            cardHeader="2018"
            cardUpDown="cardUpDown"
            cardSubHeader="Javascript Developer"
            cardBody="The more i browsed internet i started to get more interest in javascript, how thing works in the web there i gained lot information how web technologies works and started to build web apps with javascript"
          />
        </div>
        <Card
          id="card"
          class="block lg:hidden"
          cardHeader="2018"
          cardSubHeader="Javascript Developer"
          cardBody="The more i browsed internet i started to get more interested in javascript, how thing works in the web there i gained lot interest how web technologies works and started to build web apps with javascript"
        />
        <!-- wrap -end -->
        <Card
          id="card"
          cardHeader="2019"
          cardSubHeader="Server Side developer"
          cardBody="Soon i found the need of backend as well as server side programming with frontend there i learned many things in javascript world explored nodejs and all other server side frameworks like express"
        />
        <!-- wrap -->
        <div class="hidden lg:block">
          <Card
            id="card"
            cardUpDown="cardUpDown"
            cardHeader="2020"
            cardSubHeader="Flutter Android"
            cardBody="In the start of 2020 after the graduation of my cs degree i happend to get an idea of building a native mobile app there i build an app with flutter there i learned a lot about how things works in mobile world"
          />
        </div>
        <Card
          id="card"
          class="block lg:hidden"
          cardHeader="2020"
          cardSubHeader="Flutter Android"
          cardBody="In the start of 2020 after the graduation of my cs degree i happend to get an idea of building a native mobile app there i build an app with flutter there i learned a lot about how things works in mobile world"
        />
      </div>
      <!-- wrap -end -->
    </div>
    <hr class="hrStyle" />
  </section>
</template>

<script>
import Card from "../Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Card,
  },
  mounted() {
    this.animateCards();
    this.animateMidWords();
  },
  methods: {
    animateMidWords() {
      gsap.from("#midWord", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#midWord",
          toggleActions: "restart pause resume pause",
        },
      });
      gsap.from("#midWord-2", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#midWord-2",
          toggleActions: "restart pause resume pause",
        },
      });
    },
    animateCards() {
      gsap.from("#card", {
        scrollTrigger: {
          trigger: "#card",
          start: "-10px 100%",
          end: "100px",
          // markers: true,
          toggleActions: "restart pause reverse none",
          scrub: true,
        },
        y: 100,
        stagger: {
          each: 0.2,
          from: "start",
          grid: "auto",
          ease: "ease-in",
        },
        // rotate:30,
        opacity: 0,
        duration: 0.5,
      });
    },
  },
};
</script>

<style>
</style>