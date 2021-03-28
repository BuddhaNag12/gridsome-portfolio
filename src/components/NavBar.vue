<template>
  <nav
    class="header fixed flex flex-wrap items-center justify-between px-2 py-3 border-custom mb-3 w-full z-10"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <a
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
        >
          <g-image src="~/favicon.png" width="50" height="20" immediate quality="100" />
        </a>

        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="showMenu = !showMenu"
        >
          <div v-if="showMenu">
            <span class="material-icons text-white">
              close
            </span>
          </div>
          <div v-else>
            <span class="material-icons text-white"> menu </span>
          </div>
        </button>
      </div>

      <div
        v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow lg:justify-center "
      >
        <ul class="flex flex-col lg:flex-row list-none">
          <li class="nav-item">
            <a
              :class="this.currentSection == '#top' ? 'active' : ''"
              @click="scrollToId()"
              class="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
            >
              <span>Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              :class="this.currentSection == '#journey' ? 'active' : ''"
              @click="scrollToId('#journey')"
              class="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
            >
              <span>About</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              :class="this.currentSection == '#projects' ? 'active' : ''"
              @click="scrollToId('#projects')"
              class="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
            >
              <span>works</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              :class="this.currentSection == '#contact' ? 'active' : ''"
              @click="scrollToId('#contact')"
              class="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
            >
              <span>contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<script>
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default {
  data() {
    return {
      showMenu: false,
      currentSection: "#top",
      headerTitle: "Buddha",

    };
  },

  methods: {
    scrollToId(id) {
      gsap.to(window, { duration: 1, scrollTo: id?id:0, ease: "power2" });
      this.currentSection = id?id:'#top';
    },
 
  },
};
</script>

<style scoped>
.active {
  color: #08e7b9 !important;
}
.nav__link {
  color: #b0c8dd;
}
.border-custom {
  border-bottom: solid 1px #e1e1e1;
}
.header {
  /* position: fixed !important; */
  background-color: rgba(17, 21, 43, 0.9);
  border-bottom-color: #2e355a !important;
}

</style>