<template>
  <div class="preview-container">
    <header class="header">
      <ml-media-icon :customedClass="true" :id="2" />
      <div>
        <p>{{ user_name }}</p>
        <p class="date">{{ dateFormatted }}</p>
      </div>
    </header>
    <p class="text">{{ post.text }}</p>
    <img :src="post.media" alt="" />
    <p class="comments">5 comentários</p>
    <div class="instagram-reactions">
      <font-awesome-icon
        :icon="['fas', 'thumbs-up']"
        :style="{ 'font-size': '28px', 'margin-right': '10px' }"
      />
      <font-awesome-icon
        :icon="['fas', 'comment-alt']"
        :style="{ 'font-size': '28px', 'margin-right': '10px' }"
      />
      <font-awesome-icon
        :icon="['fas', 'share']"
        :style="{ 'font-size': '28px' }"
      />
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
      post: "post",
      date: "date"
    }),
    dateFormatted() {
      if (this.date) {
        const date = new Date(this.date);
        const options = {
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        };
        return new Intl.DateTimeFormat("pt-BR", options).format(date);
      }

      return "";
    }
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

.date {
  font-size: 12px;
  color: var(--gray-light);
}

img {
  width: 368px;
  height: 368px;
}
.comments {
  padding: var(--space-xs);
  color: var(--gray-light);
  border-bottom: var(--border-gray);
}

.instagram-reactions {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: var(--space-xs);
}

.text {
  padding: var(--space-xs);
  margin-bottom: var(--space-xxs);
}
</style>
