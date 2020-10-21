<template>
  <ml-article title="Texto do post">
    <div class="post" @click="clearTextarea">
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
import MlArticle from "@/components/MlArticle";
import VueEmoji from "emoji-vue";
import { mapMutations } from "vuex";

export default {
  name: "PostText",
  components: {
    MlArticle,
    VueEmoji
  },
  data() {
    return {
      text: "Aqui vai o texto descritivo desse post"
    };
  },
  methods: {
    ...mapMutations("post", {
      set_post: "set_post"
    }),
    onInput(event) {
      this.set_post({ text: event.data });
      this.text = event.data;
    },
    clearTextarea() {
      if (this.text == "Aqui vai o texto descritivo desse post")
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
