<template>
  <header class="bg-primary-dark h-16 border-custom  z-10 w-full">
    <nav class="flex flex-column justify-center">
      <div class="hidden lg:block md:block">
        <div
          class="grid grid-cols-12 gap-4 h-16 items-center uppercase text-sm"
        >
          <g-link class="nav__link col-start-5" to="/">Home</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
          <g-link class="nav__link" to="/works">Works</g-link>
          <g-link class="nav__link" to="/contact">Contact</g-link>
          <!-- <a class="nav__link col-start-5" href="#top">Home</a>
          <a class="nav__link" href="#middle">About</a>
          <a class="nav__link" href="#second-mid">Works</a>
          <a class="nav__link" href="#contact">Contact</a> -->
        </div>
      </div>

      <div class="ml-auto pr-2 pt-2 lg:hidden md:hidden">
        <button
          class="btn font-bold py-2 px-4"
          aria-controls="mobile-menu"
          aria-expanded="false"
          @click="isOpen = !isOpen"
        >
          <span class="material-icons text-white"> menu </span>
        </button>
      </div>
      <div class="absolute" v-if="isOpen">
        <h1 class="text-white">Dashboard</h1>
      </div>
    </nav>
  </header>
</template>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
.active--exact.active {
  color: #08e7b9 !important;
}
.nav__link {
  color: #b0c8dd;
}
.border-custom {
  border-bottom: solid 1px #e1e1e1;
}
header {
  position: fixed !important;
  background-color: rgba(17, 21, 43, 0.9);
  
  border-bottom-color: #2e355a !important;
}
</style>