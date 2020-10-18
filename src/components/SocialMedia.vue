<template>
  <ml-article title="Redes Sociais">
    <div class="medias">
      <template v-for="(icon, index) in icons">
        <ml-media-icon :key="index" :icon="icon" />
      </template>
    </div>
  </ml-article>
</template>

<script>
import MlArticle from "./MlArticle";
import MlMediaIcon from "./MlMediaIcon";

export default {
  name: "SocialMedia",
  components: {
    MlArticle,
    MlMediaIcon
  },
  data() {
    return {
      icons: [
        {
          name: "instagram",
          disable: false
        },
        {
          name: "linkedin",
          disable: false
        },
        {
          name: "youtube",
          disable: true
        },
        {
          name: "pinterest",
          disable: true
        },
        {
          name: "twitter",
          disable: true
        },
        {
          name: "facebook-f",
          disable: true
        }
      ]
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
