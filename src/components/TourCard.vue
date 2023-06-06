<template>
  <router-link to="/tour">
    <div
      class="item-wrapper d-flex flex-column mb-4"
      @click.prevent="onEmmit(card.id)"
    >
      <img
        class="mb-3"
        :src="require(`@/assets/img/${card.img}`)"
        :alt="card.img"
      />

      <h3 class="">{{ card.title }}</h3>

      <div class="description">
        {{ card.description | cutText }}
        <br />
        <span>Читать далее ...</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>