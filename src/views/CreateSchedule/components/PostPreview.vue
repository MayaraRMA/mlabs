<template>
  <div>
    <ml-button
      label="Vizualizar post"
      customed-class="button-secondary"
      class="btn-view"
    />
    <ml-article title="Vizualização do post" class="upload-container">
      <div class="no-content">
        <div v-if="has_social_network">
          <preview-instagram v-if="showPreview(3)" />
          <preview-linkedin v-if="showPreview(2)" />
        </div>

        <div v-else>
          <h2>
            Aguardando conteúdo. Informe os canais e as mídias desejadas para
            visualização.
          </h2>
          <img src="@/assets/post.png" alt="aguardando conteúdo" />
        </div>
      </div>
    </ml-article>
  </div>
</template>

<script>
import MlArticle from "@/components/MlArticle";
import MlButton from "@/components/MlButton";
import PreviewInstagram from "@/components/PreviewInstagram";
import PreviewLinkedin from "@/components/PreviewLinkedin";
import { mapGetters } from "vuex";

export default {
  name: "PostPreview",
  components: {
    MlArticle,
    MlButton,
    PreviewInstagram,
    PreviewLinkedin
  },
  computed: {
    ...mapGetters("post", {
      has_social_network: "has_social_network",
      social_network_key: "social_network_key"
    })
  },
  methods: {
    watchMedia() {
      let mql = window.matchMedia("(max-width: 720px)");
      this.isMedia = mql.matches;
    },
    showPreview(id) {
      return id === this.social_network_key[0];
    }
  },
  mounted() {
    this.watchMedia();
    window.addEventListener("resize", this.watchMedia);
  },
  destroyed() {
    window.removeEventListener("resize", this.watchMedia);
  }
};
</script>

<style lang="scss" scoped>
.upload-container {
  display: none;
  @media (min-width: 480px) {
    display: block;
    height: 100%;
  }
}

.btn-view {
  width: 100%;
  @media (min-width: 480px) {
    display: none;
  }
}

.no-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--space-xlg);

  h2 {
    color: var(--gray-dark);
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    padding: 0 var(--space-xlg);
    margin-bottom: var(--space-sm);
  }
}
</style>
