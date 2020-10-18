<template>
  <ml-article title="Data de Publicação">
    <div class="publication-container">
      <ml-calendar />
      <ml-time />
    </div>
  </ml-article>
</template>

<script>
import MlArticle from "./MlArticle";
import MlCalendar from "./MlCalendar";
import MlTime from "./MlTime";

export default {
  name: "PublicationDate",
  components: {
    MlArticle,
    MlCalendar,
    MlTime
  }
};
</script>

<style lang="scss" scoped>
.publication-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--space-sm);

  div:first-child {
    margin-right: var(--space);
  }
}
</style>
