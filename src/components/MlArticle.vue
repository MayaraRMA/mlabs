<template>
  <article>
    <h1>{{ title }}</h1>
    <slot></slot>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
article {
  background-color: var(--white);
  border-radius: var(--space-xxs);

  h1 {
    padding: var(--space-xxs) var(--space-sm);
    border-bottom: var(--border-gray);
    font-weight: 500;
  }
}
</style>
