<template>
  <div>
    <section id="projects">
      <div class="h-auto">
        <div class="container w-full lg:pt-10 lg:pl-10">
          <div class="text-area lg:ml-10 lg:mb-20 m-4 w-auto lg:w-3/6">
            <h1
              id="heading-1"
              class="text-primary-text-color lg:text-4xl text-3xl font-semibold mb-5"
            >
              #Latest works
            </h1>
            <p
              id="subHeading-1"
              class="text-secondary-text-color text-lg lg:text-2xl md:text-2xl font-normal capitalize"
            >
              Things That i have Build on past days mostly to overcome the
              complexity and to automate the difficult task of day-2-day life
              that includes
            </p>
          </div>
        </div>
        <div class="projects-area grid grid-rows-3 gap-4 p-4">
          <div
            id="project-img1"
            class="img grid grid-cols-1 lg:grid-col-2 md:grid-cols-2 gap-2 items-center"
          >
            <g-image
              src="~/assets/Inscan.png"
              immediate
              quality="100"
              class="rounded-2xl w-auto lg:ml-10"
            />
            <div class="right-side pl-2 lg:m-10">
              <h1 class="text-primary-text-color text-4xl lg:text-5xl">
                #Inscan
              </h1>
              <h1 class="text-secondary-text-color ml-2 text-xl capitalize">
                Document And image Scanner
              </h1>
              <div class="lg:mt-5 mb-10 ml-2">
                <a
                  href="https://github.com/BuddhaNag12/InScan"
                  target="_blank"
                  class="btn text-xl lg:text-4xl text-white hover:text-primary-text-color cursor-pointer transition-all delay-75 ease-in-out"
                  >View Work
                  <span
                    id="arrow"
                    class="transition-all delay-75 ease-in-out material-icons rounded-full h-8 w-8 shadow-inner border-2 hover:border-secondary-text-color"
                    >arrow_right_alt</span
                  >
                </a>
              </div>
            </div>
          </div>
          <div
            id="project-img2"
            class="img flex lg:flex-row-reverse md:flex-row-reverse flex-col justify-evenly lg:items-center"
          >
            <div class="img lg:w-6/12 md:w-6/12 w-auto">
              <g-image
                src="~/assets/movies.png"
                immediate
                quality="100"
                class="rounded-2xl"
              />
            </div>
            <div class="right-side p-4 lg:ml-10">
              <h1 class="text-primary-text-color text-4xl lg:text-5xl">
                #Movies Intent
              </h1>
              <h1 class="text-secondary-text-color ml-2 text-xl capitalize">
                Get info about upcoming movies
              </h1>
              <div class="lg:mt-5 mb-10 ml-2">
                <a
                  href="https://github.com/BuddhaNag12/InScan"
                  target="_blank"
                  class="btn text-xl lg:text-4xl text-white hover:text-primary-text-color cursor-pointer transition-all delay-75 ease-in-out"
                  >View Work
                  <span
                    id="arrow"
                    class="transition-all delay-75 ease-in-out material-icons rounded-full h-8 w-8 shadow-inner border-2 hover:border-secondary-text-color"
                    >arrow_right_alt</span
                  >
                </a>
              </div>
            </div>
          </div>
          <div
            id="project-img3"
            class="img grid grid-cols-1 lg:grid-col-2 md:grid-cols-2 gap-4 items-center"
          >
            <g-image
              src="~/assets/ecom.png"
              immediate
              quality="100"
              class="rounded-2xl w-auto lg:ml-10"
            />
            <div class="right-side pl-2 lg:m-10">
              <h1
                class="text-primary-text-color text-3xl lg:text-4xl md:text-3xl capitalize"
              >
                #Ecommerce Webapp
              </h1>
              <h1 class="text-secondary-text-color ml-2 text-2xl capitalize">
                A website for shopping
              </h1>
              <div class="mt-2 mb-10 ml-2">
                <a
                  href="https://ecommerce-siteapp.web.app/"
                  target="_blank"
                  class="btn text-xl lg:text-4xl text-white hover:text-primary-text-color cursor-pointer transition-all delay-75 ease-in-out"
                  >View Work
                  <span
                    id="arrow"
                    class="transition-all delay-75 ease-in-out material-icons rounded-full h-8 w-8 shadow-inner border-2 hover:border-secondary-text-color"
                    >arrow_right_alt</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.animateProject();
  },
  methods: {
    animateProject() {
      gsap.from("#project-img1", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          scrub: true,
          trigger: "#project-img1",
          // markers: true,
          start: "top bottom",
          end: "5px",
          // toggleActions: "restart pause resume pause",
        },
      });
      gsap.from("#project-img2", {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          scrub: true,
          trigger: "#project-img2",
          start: "top 100%",
          end: "10px",
          // markers: true,
          // toggleActions: "restart pause resume pause",
        },
      });
      gsap.from("#project-img3", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          scrub: true,
          trigger: "#project-img3",
          // start: "top 100%",
          // end: "10px",
          // markers: true,
          // toggleActions: "restart pause resume pause",
        },
      });
    },
  },
};
</script>

<style scoped>
div > a:hover #arrow {
  border-color: #73d9ff;
}
</style>