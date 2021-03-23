<template>
  <div>
    <g-image src="~/assets/Inscan.png" width="600" class="rounded-3xl" />
    <div class="text-wrap absolute right-60 mt-20">
      <h1 class="text-primary-text-color text-5xl">#Inscan</h1>
      <h1 class="text-secondary-text-color text-3xl capitalize">
        - Document And image Scanner
      </h1>
      <div class="mt-16 ml-16">
        <a
          class="btn text-4xl pl-4 text-white hover:text-primary-text-color cursor-pointer transition-all delay-75 ease-in-out"
          >View Work
          <span
            class="transition-all delay-75 ease-in-out material-icons rounded-full h-8 w-8 shadow-inner border-2 hover:border-secondary-text-color"
            >arrow_right_alt</span
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'projectCard'
};
</script>

<style>
</style>