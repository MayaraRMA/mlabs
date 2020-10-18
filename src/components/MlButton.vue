<template>
  <button
    type="button"
    @click="handleClick"
    class="ml-button"
    :class="customedClass"
    :disabled="disabled"
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
    },
    disabled: {
      type: Boolean
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
    opacity: 0.7;
  }
}

.button-outline {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
}

.button-tertiary {
  background-color: transparent;
  color: var(--blue);
}
</style>
