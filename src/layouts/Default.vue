<template>
  <div>
    <NavBar />
    <transition name="fade" appear>
      <div class="bg-primary-dark" style="font-family:'Barlow', sans-serif;">
        <slot />
      </div>
    </transition>
  </div>
</template>


<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
body,html {
  font-family:'Barlow', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
