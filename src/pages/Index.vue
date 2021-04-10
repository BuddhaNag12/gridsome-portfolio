<template>
  <Layout>
    <topSection />
    <journeySection />
    <projectSection />
    <contributionSection />
    <contactSection />
    <section>
      <div class="grid grid-cols-3 justify-items-center p-2">
        <h1 class="text-muted-text-color capitalize text-xs">
          &copy;all rights reserved
        </h1>
        <h1 class="text-muted-text-color capitalize text-xs">
          {{ new Date().getFullYear() }}
        </h1>
        <h1 class="text-muted-text-color capitalize text-xs">
          Design copyright @Folium
        </h1>
      </div>
    </section>
  </Layout>
</template>



<script>
// sections
import topSection from "../components/sections/topSection";
import journeySection from "../components/sections/journeySection";
import projectSection from "../components/sections/projectSection";
import contributionSection from "../components/sections/contributionSection";
import contactSection from "../components/sections/contactSection";

export default {
  components: {
    topSection,
    journeySection,
    projectSection,
    contributionSection,
    contactSection,
  },
};
</script>

<style >
.hrStyle {
  border: 0;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(8, 231, 185, 1),
    rgba(0, 0, 0, 0)
  );
}

.card {
  border: 1px solid rgba(4, 232, 185, 0.2);
  box-shadow: 0 0 0 0 #fff;
}
.card:hover .heading {
  color: #04e8b9 !important;
}
.heading {
  color: #00cecd;
}
</style>