<template>
  <div>
    <section id="projects">
      <transition name="scale">
        <div
          class="
            imgView
            fixed
            left-0
            top-0
            w-full
            ease-in-out
            overflow-x-hidden
            h-full
            z-50
          "
          v-if="showImg"
        >
          <span
            class="
              material-icons
              w-6
              hover:bg-red-900 hover:text-blue-50
              transition-all
              h-auto
              text-center
              bg-white
              cursor-pointer
              absolute
              z-50
              right-5
              text-red-700
              rounded-xl
              top-2
            "
            @click="showImg = false"
            >close</span
          >
          <img
            loading="lazy"
            :src="`${getImage}`"
            class="w-full h-full bg-cover"
          />
        </div>
      </transition>

      <div class="h-auto">
        <div class="container w-full lg:pt-10 lg:pl-10">
          <div class="text-area lg:ml-10 lg:mb-20 m-4 w-auto lg:w-3/6">
            <h1
              id="heading-1"
              class="
                text-primary-text-color
                lg:text-4xl
                text-3xl
                font-semibold
                mb-5
              "
            >
              #Latest works
            </h1>
            <p
              id="subHeading-1"
              class="
                text-secondary-text-color text-lg
                lg:text-2xl
                md:text-2xl
                font-normal
                capitalize
              "
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
            class="
              img
              grid grid-cols-1
              lg:grid-col-2
              md:grid-cols-2
              gap-4
              items-center
            "
          >
            <g-image
              id="project-img"
              @click="toggleImgView('Inscan.webp')"
              src="~/assets/Inscan.webp"
              quality="100"
              class="w-full lg:ml-10 bg-cover cursor-pointer"
            />
            <div class="right-side ml-10">
              <div class="w-64 flex lg:items-start flex-col items-end">
                <h1 class="text-primary-text-color text-4xl lg:text-5xl">
                  #Inscan
                </h1>
                <h1 class="text-secondary-text-color text-lg capitalize">
                  Document And image Scanner
                </h1>
                <a
                  href="https://github.com/BuddhaNag12/InScan"
                  target="_blank"
                  class="
                    btn
                    text-sm
                    lg:text-2xl
                    text-white
                    hover:text-primary-text-color
                    cursor-pointer
                    flex
                    items-center
                  "
                  >View Work
                  <span id="arrow" class="material-icons">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </div>
          <!-- 2nd -->
          <div
            id="project-img2"
            class="
              img
              flex
              lg:flex-row-reverse
              md:flex-row-reverse
              flex-col
              justify-evenly
              lg:items-center
            "
          >
            <div class="img lg:w-6/12 md:w-6/12 w-auto">
              <g-image
                @click="toggleImgView('movies.webp')"
                src="~/assets/movies.webp"
                quality="100"
                class="cursor-pointer w-full"
              />
            </div>
            <div class="right-side p-4 lg:ml-10">
              <div class="w-80 flex lg:items-end flex-col items-end">
                <h1 class="text-primary-text-color text-4xl lg:text-5xl">
                  #Movies Intent
                </h1>
                <h1 class="text-secondary-text-color ml-2 text-xl capitalize">
                  Get info about upcoming movies
                </h1>
                <a
                  href="https://github.com/BuddhaNag12/Movies-intent-app-flutter"
                  target="_blank"
                  class="
                    btn
                    text-sm
                    lg:text-2xl
                    text-white
                    hover:text-primary-text-color
                    cursor-pointer
                    flex
                    items-center
                  "
                  >View Work
                  <span id="arrow" class="material-icons">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </div>
          <!-- 3rd -->

          <div
            id="project-img3"
            class="
              img
              grid grid-cols-1
              lg:grid-col-2
              md:grid-cols-2
              gap-4
              items-center
            "
          >
            <g-image
              @click="toggleImgView('ecom.webp')"
              src="~/assets/ecom.webp"
              quality="100"
              class="w-full lg:ml-10 cursor-pointer"
            />
            <div class="right-side pl-2 lg:m-10">
              <div class="w-80 flex lg:items-start flex-col items-end">
                <h1
                  class="
                    text-primary-text-color text-3xl
                    lg:text-3xl
                    md:text-3xl
                    capitalize
                  "
                >
                  #Ecommerce Webapp
                </h1>
                <h1 class="text-secondary-text-color ml-2 text-xl capitalize">
                  A website for shopping
                </h1>
                <a
                  href="https://ecommerce-siteapp.web.app/"
                  target="_blank"
                  class="
                    btn
                    text-sm
                    lg:text-2xl
                    text-white
                    hover:text-primary-text-color
                    cursor-pointer
                    flex
                    items-center
                  "
                  >View Work
                  <span id="arrow" class="material-icons">arrow_right_alt</span>
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
  data: () => ({
    showImg: false,
    imgName: "",
  }),

  mounted() {
    this.animateProject();
  },
  computed: {
    getImage() {
      return this.imgName;
    },
  },

  methods: {
    toggleImgView(name) {
      this.imgName = name;
      this.showImg = true;
    },
    animateProject() {
      gsap.from("#project-img1", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          // scrub: true,
          trigger: "#project-img1",
          // markers: true,
          start: "top 70%",
          end: "top",
          // toggleActions: "pause",
        },
      });
      gsap.from("#project-img2", {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          // scrub: true,
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
          // scrub: true,
          trigger: "#project-img3",
          start: "top 80%",
          end: "10px",
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

.scale-enter-active {
  animation: slide-in 400ms reverse ease-in;
}
.scale-leave-active {
  animation: slide-in 400ms ease-out;
}
@keyframes slide-in {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(100%);
  }
}
.btn {
  text-decoration: none;
}

h1{
  padding:0;
  margin: 0;
}
</style>