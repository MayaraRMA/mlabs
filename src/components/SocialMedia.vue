<template>
  <ml-article title="Redes Sociais">
    <div class="medias">
      <template v-for="(icon, index) in icons">
        <ml-media-icon :key="index" :id="icon.id" />
      </template>
    </div>
  </ml-article>
</template>

<script>
import MlArticle from "./MlArticle";
import MlMediaIcon from "./MlMediaIcon";
import { data } from "../../data/social-networks";

export default {
  name: "SocialMedia",
  components: {
    MlArticle,
    MlMediaIcon
  },
  data() {
    return {
      icons: data
    };
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
