<template>
  <div>
    <NavBar />
    <transition name="fade" appear>
      <div class="bg-primary-dark pt-20">
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
<style src="../main.css" />

<style>
body,
html {
  font-family: "Barlow", sans-serif;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
  overflow-x: hidden;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}


  

</style>
