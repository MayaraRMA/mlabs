<template>
  <div id="app">
    <ml-header />
    <router-view class="view" />
  </div>
</template>

<script>
import MlHeader from "@/components/MlHeader.vue";

export default {
  components: {
    MlHeader
  }
};
</script>

<style lang="scss">
@import "@/styles/global";

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.view {
  flex: 1;
  background-color: var(--background-gray);
}
</style>
