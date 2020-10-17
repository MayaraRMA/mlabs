<template>
  <button
    type="button"
    @click="handleClick"
    class="ml-button"
    :class="customedClass"
    :disabled="isInFirstPage"
    :aria-label="label"
    :title="label"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "MlButton",
  props: {
    label: {
      type: String
    },
    customedClass: {
      type: String
    }
  },
  methods: {
    handleClick() {
      this.$emit("eventClick");
    }
  }
};
</script>

<style lang="scss" scoped>
.ml-button {
  background-color: var(--blue);
  border-radius: var(--space-xxs);
  color: var(--white);
  padding: var(--space-xs) var(--space-sm);
  border: none;

  &:hover {
    background-color: var(--background-hover);
  }
}

.button-outline {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
}

.button-secondary {
  background-color: var(--orange);
  border: var(--border-orange);
}
</style>
