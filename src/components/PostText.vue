<template>
  <ml-article title="Texto do post">
    <div class="post">
      <VueEmoji
        ref="emoji"
        width="100%"
        height="146"
        @input="onInput"
        :value="text"
      />
    </div>
  </ml-article>
</template>

<script>
import MlArticle from "./MlArticle";
import VueEmoji from "emoji-vue";

export default {
  name: "PostText",
  components: {
    MlArticle,
    VueEmoji
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    onInput(event) {
      this.text = event.data;
    },
    clearTextarea() {
      this.$refs.emoji.clear();
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  padding: var(--space-sm);
}
</style>
