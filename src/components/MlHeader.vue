<template>
  <header class="header">
    <router-link to="/" class="menu" tag="div">
      <font-awesome-icon
        :icon="['fas', 'bars']"
        :style="{ 'font-size': '30px' }"
      />
    </router-link>
    <router-link to="/" class="logo">
      <img alt="mLabs" src="../assets/logo.png" />
    </router-link>
    <div class="user-info">
      <img alt="foto" src="../assets/tumb.png" />
      <p>{{ name }}</p>
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon
  },
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
  align-items: center;
  padding: var(--space-sm) var(--space-md);
}

.menu {
  @media (min-width: 480px) {
    display: none;
  }
}

.logo {
  display: none;

  @media (min-width: 480px) {
    display: block;
  }
}

.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    display: none;

    @media (min-width: 480px) {
      margin-left: var(--space-sm);
      display: block;
    }
  }
}
</style>
