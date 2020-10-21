<template>
  <div class="preview-container">
    <header class="header">
      <ml-media-icon :customedClass="true" :id="3" />
      <p>{{ user_name }}</p>
    </header>
    <img :src="post.media" alt="" />
    <div>
      <div class="instagram-reactions">
        <div>
          <font-awesome-icon
            :icon="['fas', 'heart']"
            :style="{ 'font-size': '28px', 'margin-right': '10px' }"
          />
          <font-awesome-icon
            :icon="['fas', 'comment']"
            :style="{ 'font-size': '28px' }"
          />
        </div>
        <font-awesome-icon
          :icon="['fas', 'bookmark']"
          :style="{ 'font-size': '28px' }"
        />
      </div>
      <p class="text">{{ post.text }}</p>
    </div>
  </div>
</template>

<script>
import MlMediaIcon from "./MlMediaIcon";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { mapGetters } from "vuex";

export default {
  name: "PreviewInstagram",
  components: {
    FontAwesomeIcon,
    MlMediaIcon
  },
  computed: {
    ...mapGetters("user", {
      user_name: "user_name"
    }),
    ...mapGetters("post", {
      post: "post"
    })
  }
};
</script>

<style lang="scss" scoped>
.preview-container {
  width: 368px;
  border: var(--border-gray);
  border-radius: var(--border-radius);
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: var(--space-sm);
  p {
    margin-left: var(--space-xs);
  }
}

img {
  width: 368px;
  height: 368px;
}

.instagram-reactions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xs);
}

.text {
  padding: var(--space-xs);
  margin-bottom: var(--space-sm);
}
</style>
