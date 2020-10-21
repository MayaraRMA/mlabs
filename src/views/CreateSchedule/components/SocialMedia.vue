<template>
  <ml-article title="Redes Sociais">
    <div class="medias">
      <div
        v-for="(icon, index) in socialNetworks"
        :key="index"
        @click="selectMedia(icon)"
      >
        <ml-media-icon :id="icon.id" :clicked="icon.clicked" />
      </div>
    </div>
  </ml-article>
</template>

<script>
import MlArticle from "@/components/MlArticle";
import MlMediaIcon from "@/components/MlMediaIcon";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "SocialMedia",
  components: {
    MlArticle,
    MlMediaIcon
  },
  data() {
    return {
      socialNetworks: []
    };
  },
  watch: {
    social_networks(newValue) {
      this.socialNetworks = newValue.map(sn => ({
        ...sn,
        clicked: false
      }));
    }
  },
  computed: {
    ...mapGetters("social_networks", {
      social_networks: "social_networks"
    })
  },
  methods: {
    ...mapActions("social_networks", {
      get_social_networks: "get_social_networks"
    }),
    ...mapMutations("post", {
      set_post: "set_post"
    }),
    selectMedia(socialNetwork) {
      this.set_post({ social_network_key: [socialNetwork.id] });
      this.socialNetworks = this.socialNetworks.map(x => {
        return {
          ...x,
          clicked: x.id === socialNetwork.id
        };
      });
    }
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
  flex-wrap: wrap;
  padding: var(--space);
}
</style>
