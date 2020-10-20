<template>
  <ml-article title="Redes Sociais">
    <div class="medias">
      <template v-for="(icon, index) in social_networks">
        <ml-media-icon :key="index" :id="icon.id" />
      </template>
    </div>
  </ml-article>
</template>

<script>
import MlArticle from "./MlArticle";
import MlMediaIcon from "./MlMediaIcon";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SocialMedia",
  components: {
    MlArticle,
    MlMediaIcon
  },
  computed: {
    ...mapGetters("social_networks", {
      social_networks: "social_networks"
    })
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
.medias {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space);
}
</style>
