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
import { mapGetters, mapActions } from "vuex";

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
  computed: {
    ...mapGetters("social_networks", {
      socialNetworks: "social_networks"
    }),
    ...mapGetters("post", {
      social_network_key: "social_network_key"
    }),
    clicked() {
      return this.customedClass
        ? false
        : this.social_network_key[0] === this.id;
    },
    socialNetwork() {
      if (this.socialNetworks.length > 0) {
        const [media] = this.socialNetworks.filter(
          social => social.id === this.id
        );
        return media;
      }
      return { icon: "font-awesome" };
    },
    classes() {
      return {
        active: this.clicked,
        disable: this.isDisabled,
        [`${this.socialNetwork.icon}`]: this.customedClass
      };
    },
    isDisabled() {
      return this.socialNetwork.status === "disabled";
    }
  },
  methods: {
    ...mapActions("social_networks", {
      get_social_networks: "get_social_networks"
    })
  },
  mounted() {
    this.get_social_networks();
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
  background-color: var(--linkedin-color);
  border: 1px solid var(--linkedin-color);
  cursor: default;
  &:hover {
    color: var(--white);
    background-color: var(--linkedin-color);
    border: 1px solid var(--linkedin-color);
  }
}

.instagram {
  color: var(--white);
  background-color: var(--instagram-color);
  border: 1px solid var(--instagram-color);
  cursor: default;
  &:hover {
    color: var(--white);
    background-color: var(--instagram-color);
    border: 1px solid var(--instagram-color);
  }
}
</style>
