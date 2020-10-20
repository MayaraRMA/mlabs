<template>
  <div class="icon" :class="classes">
    <font-awesome-icon
      :icon="['fab', socialNetwork.icon]"
      :style="{ 'font-size': '18px' }"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { data } from "../../data/social-networks";

export default {
  name: "MediaIcon",
  props: {
    id: {
      type: Number,
      default: 0
    },
    customedClass: {
      type: Boolean,
      default: false
    }
  },
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      socialNetworks: data,
      cliked: false
    };
  },
  computed: {
    socialNetwork() {
      const [media] = this.socialNetworks.filter(
        social => social.id === this.id
      );
      return media;
    },
    classes() {
      return {
        active: this.cliked,
        disable: this.isDisabled,
        [`${this.socialNetwork.icon}`]: this.customedClass
      };
    },
    isDisabled() {
      return this.socialNetwork.status === "disabled";
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

.linkedin-in {
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
