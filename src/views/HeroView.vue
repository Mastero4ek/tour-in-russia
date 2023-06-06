<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <tour-card
          v-for="card in cards"
          :key="card.id"
          :card="card"
          @onNavigate="navigate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TourCard from "@/components/TourCard.vue";

export default {
  components: { TourCard },
  computed: {
    cards() {
      return this.$store.getters["getTour"];
    },
  },
  data() {
    return {
      name: "tour",
    };
  },
  methods: {
    navigate(id) {
      this.$router.push({ name: this.name, params: { id: id } });
    },
  },
};
</script>