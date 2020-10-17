<template>
  <button
    type="button"
    @click="handleClick"
    class="vd-button"
    :class="customedClass"
    :disabled="isInFirstPage"
    aria-label="Go to first page"
    title="Primeira página"
  >
    <slot></slot>
    <p :class="{ 'display-label': slotHasContent }">{{ label }}</p>
  </button>
</template>

<script>
export default {
  name: "VdButton",
  props: {
    label: {
      type: String
    },
    customedClass: {
      type: String
    }
  },
  computed: {
    slotHasContent() {
      return !!this.$slots.default;
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
.vd-button {
  background-color: var(--white);
  border-radius: var(--space-lg);
  color: var(--gray-dark);
  text-transform: uppercase;
  padding: var(--space-sm) var(--space-md);
  border: none;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: var(--background-hover);
  }
  img {
    margin-right: var(--space-xs);
  }

  &.liked {
    color: var(--red-light);
  }

  @media (max-width: 516px) {
    border-radius: var(--space-lg);
    padding: var(--space-sm);
    .display-label {
      display: none;
    }
  }
}
</style>
