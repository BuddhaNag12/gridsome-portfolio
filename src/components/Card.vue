<template>
  <div :class="this.cardUpDown">
    <div class="card w-415 max-w-md h-330 m-4 p-2">
      <div class="card-header mb-10">
        <h1 class="text-primary-text-color text-4xl">{{ this.cardHeader }}</h1>
      </div>
      <div class="card-subheader mb-5">
        <h1 class="text-secondary-text-color text-xl capitalize">
          {{ this.cardSubHeader }}
        </h1>
      </div>
      <div class="card-body">
        <p class="text-muted-text-color capitalize">
          {{ this.cardBody }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardHeader: String,
    cardSubHeader: String,
    cardBody: String,
    cardUpDown:String
  },
};
</script>

<style scoped>
.card {
  background-image: linear-gradient(180deg, #313960 0%, #11152b 100%);
  box-shadow: 0px 0px 0px 0px #ffffff;
}
.cardUpDown{
  margin-top:6em ;
}
</style>