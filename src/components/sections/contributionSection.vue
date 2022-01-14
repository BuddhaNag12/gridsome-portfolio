<template>
  <section class="h-auto" id="contrib">
    <div class="container w-full lg:pl-10 lg:pt-20">
      <div class="text-area lg:ml-10 m-4 mb-10 lg:w-2/3">
        <h1 class="text-primary-text-color lg:text-5xl text-3xl font-semibold">
          #Contribution;
        </h1>

        <p
          id="projectSum"
          class="text-muted-text-color text-lg mt-2 capitalize"
        >
          It's been a long journey in open source contribution and i'm looking
          forward to contribute further in open source community !
        </p>
        <hr class="hrStyle mt-4" />
      </div>
    </div>
    <div class="cards container lg:ml-10 lg:mr-10">
      <div
        class="
          grid grid-col-1
          gap-3
          justify-items-center
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        <div class="p-2">
          <bottomCard
            id="cards"
            cardTitle="Starred Repos"
            :cardData="$static.gitProjects.edges"
          />
        </div>
        <div class="p-2">
          <div id="cards" class="w-80">
            <g-image src="~/assets/dev2.png" quality="100" immediate class="w-full"/>
          </div>
        </div>
        <div class="p-2">
          <bottomCard
            id="cards"
            cardTitle="Github Followers"
            :cardData="$static.githubFollowers.edges"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query  {
  gitProjects:allRepos(perPage: 8,sortBy:"stars",order:DESC) {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
      name,
      stars,
      html_url
      }
    }
  }
    githubFollowers:allFollowers(perPage: 8, page: 1,order:ASC) {
    edges {
      node {
      name,
      html_url
      }
    }
  }
}

</static-query>


<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import bottomCard from "../bottom_card";
export default {
  components: {
    bottomCard,
  },

  mounted() {
    gsap.from("#cards", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      scale: 0.5,
      scrollTrigger: {
        trigger: "#cards",
        toggleActions: "restart pause resume pause",
      },
    });
  },
};
</script>
