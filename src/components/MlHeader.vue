<template>
  <header class="header">
    <router-link to="/">
      <img alt="mLabs" src="../assets/logo.png" />
    </router-link>
    <div class="user-info">
      <img alt="foto" src="../assets/tumb.png" />
      <p>{{ name }}</p>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: "Anselmo Carlos"
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: var(--space-sm) var(--space-md);
}

.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-right: var(--space-sm);
  }
}
</style>
