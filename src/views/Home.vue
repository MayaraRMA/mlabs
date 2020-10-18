<template>
  <router-link class="home" tag="section" to="/createschedule">
    <img alt="agendar post" src="../assets/schedule.png" />
    <ml-button label="Agendar post" customed-class="button-secondary" />
  </router-link>
</template>

<script>
import MlButton from "@/components/MlButton.vue";

export default {
  name: "Home",
  components: {
    MlButton
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
