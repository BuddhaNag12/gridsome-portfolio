<template>
  <div>
    <div class="card hover:border-accent-dark w-80 h-80 transition-colors">
      <div class="card-header ml-8 pt-8 pb-5">
        <h1 class="heading text-4xl">{{ this.cardTitle }}</h1>
      </div>
      <div class="card-body ml-8">
        <ul
          class="list-none text-white"
          v-for="edge in this.cardData"
          :key="edge.id"
        >
          <div class="flex flex-row">
            <div class="flex flex-col">
              <li class="mr-2">
                <a
                  :href="edge.node.html_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ edge.node.name }}</a
                >
              </li>
            </div>
            <!-- <div class="flex flex-col">
              <li>{{ edge.node.stars }}</li>
            </div> -->
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'bottomCard',
  props: {
    cardTitle: {
      type: String,
      required: true,
    },
    cardData:{
        type:Array
    }
  },
};
</script>
