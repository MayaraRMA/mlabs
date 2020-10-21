<template>
  <section>
    <main>
      <social-media class="social" />
      <publication-date class="date" />
      <post-text class="text-post" />
      <upload-image class="upimg" />
      <post-preview class="post" />
    </main>
    <action-footer class="footer" />
  </section>
</template>

<script>
import ActionFooter from "./components/ActionFooter.vue";
import SocialMedia from "./components/SocialMedia.vue";
import PublicationDate from "./components/PublicationDate.vue";
import PostText from "./components/PostText.vue";
import UploadImage from "./components/UploadImage.vue";
import PostPreview from "./components/PostPreview.vue";

export default {
  name: "CreateSchedule",
  components: {
    SocialMedia,
    PublicationDate,
    PostText,
    UploadImage,
    PostPreview,
    ActionFooter
  }
};
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-sm);
  padding: var(--space);

  @media (min-width: 720px) {
    grid-template-columns: 0.4fr 0.4fr 1fr;
    gap: var(--space-sm);
  }
}

.post {
  @media (min-width: 720px) {
    grid-column: 3;
    grid-row: span 3;
  }
}

.text-post {
  @media (min-width: 720px) {
    grid-column: 1/3;
    grid-row: 2;
  }
}

.upimg {
  @media (min-width: 720px) {
    grid-column: 1/3;
    grid-row: 3;
  }
}
</style>
