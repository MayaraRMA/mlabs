<template>
  <div class="home">
    <img alt="agendar post" src="../assets/schedule.png" @click="goCreatePost"/>
    <ml-button
      label="Agendar post"
      customed-class="button-secondary"
      @eventClick="goCreatePost"
    />
  </div>
</template>

<script>
import MlButton from "@/components/MlButton.vue";

export default {
  name: "Home",
  components: {
    MlButton
  },
  methods: {
    goCreatePost() {
      this.$router.push("/createschedule");
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  margin-bottom: var(--space-lg);
  cursor: pointer;
}
</style>
