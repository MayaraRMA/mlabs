<template>
  <ml-article title="Data de Publicação">
    <div class="publication-container">
      <ml-calendar v-model="date" />
      <ml-time v-model="time" />
    </div>
  </ml-article>
</template>

<script>
import MlArticle from "./MlArticle";
import MlCalendar from "./MlCalendar";
import MlTime from "./MlTime";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "PublicationDate",
  components: {
    MlArticle,
    MlCalendar,
    MlTime
  },
  computed: {
    ...mapGetters("post", {
      get_time: "time",
      get_date: "date"
    }),
    date: {
      get() {
        return this.get_date;
      },
      set(value) {
        this.set_date(value);
      }
    },
    time: {
      get() {
        return this.get_time;
      },
      set(value) {
        this.set_time(value);
      }
    }
  },
  methods: {
    ...mapMutations("post", {
      set_time: "set_time",
      set_date: "set_date"
    })
  }
};
</script>

<style lang="scss" scoped>
.publication-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: var(--space-sm);

  div:first-child {
    margin-right: var(--space);
  }
}
</style>
