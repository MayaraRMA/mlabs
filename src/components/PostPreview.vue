<template>
  <div>
    <ml-button
      label="Vizualizar post"
      customed-class="button-secondary"
      class="btn-view"
    />
    <ml-article title="Vizualização do post" class="upload-container">
      <div class="no-content">
        <h2>
          Aguardando conteúdo. Informe os canais e as mídias desejadas para
          visualização.
        </h2>
        <img src="../assets/post.png" alt="aguardando conteúdo" />
      </div>
    </ml-article>
  </div>
</template>

<script>
import MlArticle from "./MlArticle";
import MlButton from "./MlButton";

export default {
  name: "PostPreview",
  components: {
    MlArticle,
    MlButton
  },
  data() {
    return {};
  },
  methods: {
    watchMedia() {
      let mql = window.matchMedia("(max-width: 720px)");
      this.isMedia = mql.matches;
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
