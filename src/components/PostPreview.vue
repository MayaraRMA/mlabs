<template>
  <ml-article title="Vizualização do post ">
    <div class="no-content">
      <h2>
        Aguardando conteúdo. Informe os canais e as mídias desejadas para
        visualização.
      </h2>
      <img src="../assets/post.png" alt="aguardando conteúdo" />
    </div>
  </ml-article>
</template>

<script>
import MlArticle from "./MlArticle";
export default {
  name: "PostPreview",
  components: {
    MlArticle
  }
};
</script>

<style lang="scss" scoped>
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
