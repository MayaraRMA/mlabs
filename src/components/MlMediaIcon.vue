<template>
  <div class="icon" :class="classes">
    <font-awesome-icon
      :icon="['fab', icon.name]"
      :style="{ 'font-size': '18px' }"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "MediaIcon",
  props: {
    icon: {
      type: Object,
      default: () => {}
    },
    customedClass: {
      type: String,
      default: ""
    },
    clicked: {
      type: Boolean,
      default: false
    }
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    classes() {
      return {
        active: this.cliked,
        disable: this.icon.disable,
        [`${this.customedClass}`]: true
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 33px;
  height: 33px;
  border: var(--border-gray);
  border-radius: 50%;
  padding: var(--border-icon);

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: var(--orange);
    border: var(--border-orange);
    background-color: var(--orange-lighter);
  }

  &.active {
    color: var(--white);
    border: var(--border-orange);
    background: var(--background-gradient);
  }

  &.disable {
    background-color: var(--gray-lighter);
    color: var(--gray-light);
    border: var(--border-gray);
    cursor: not-allowed;
  }
}

.facebook {
  color: var(--white);
  background-color: #3a70da;
  border: 1px solid #3a70da;
}

.instagram {
  color: var(--white);
  background-color: #d60f86;
  border: 1px solid #d60f86;
}
</style>
