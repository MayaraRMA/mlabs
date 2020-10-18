<template>
  <ml-article title="Texto do post">
    <div class="post">
      <textarea
        name="post"
        id="post"
        cols="30"
        rows="5"
        placeholder="Aqui vai o texto descritivo desse post"
      ></textarea>
    </div>
  </ml-article>
</template>

<script>
import MlArticle from "./MlArticle";
export default {
  name: "PostText",
  components: {
    MlArticle
  }
};
</script>

<style lang="scss" scoped>
.post {
  padding: var(--space-sm);

  textarea {
    width: 100%;
    resize: none;
    border: var(--border-icon);
    border-radius: var(--space-xxs);
    padding: var(--space-xxs);

    &::-webkit-input-placeholder {
      color: var(--gray);
    }
  }
}
</style>
