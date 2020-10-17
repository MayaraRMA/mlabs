<template>
  <div id="app">
    <ml-header />
    <router-view />
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
</style>
