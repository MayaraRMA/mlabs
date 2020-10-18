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
import ActionFooter from "@/components/ActionFooter.vue";
import SocialMedia from "@/components/SocialMedia.vue";
import PublicationDate from "@/components/PublicationDate.vue";
import PostText from "@/components/PostText.vue";
import UploadImage from "@/components/UploadImage.vue";
import PostPreview from "@/components/PostPreview.vue";

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
  grid-template:
    "social date post"
    "text-post text-post post"
    "upimg upimg post"
    / 0.5fr 0.5fr 1fr;
  gap: var(--space-md);
  padding: var(--space-lg) var(--space-md);
}

.social {
  grid-area: social;
}

.date {
  grid-area: date;
}

.text-post {
  grid-area: text-post;
}

.post {
  grid-area: post;
}

.upimg {
  grid-area: upimg;
}
</style>
