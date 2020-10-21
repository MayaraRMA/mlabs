<template>
  <footer>
    <ml-button
      label="Cancelar"
      customed-class="button-tertiary"
      @eventClick="goHome"
    />
    <ml-button :label="buttonOutline" customed-class="button-outline" />
    <ml-button
      label="Agendar"
      @eventClick="openModal"
      :disabled="!can_schedule"
    />
    <ml-modal ref="successModal" @close="goSchedules" />
  </footer>
</template>

<script>
import MlButton from "@/components/MlButton";
import MlModal from "@/components/MlModal";
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "ActionFooter",
  components: {
    MlButton,
    MlModal
  },
  data() {
    return {
      isMedia: false,
      buttonOutline: "Salvar Rascunho"
    };
  },
  watch: {
    isMedia(newValue) {
      if (newValue) {
        this.buttonOutline = "Rascunho";
      }
    }
  },
  computed: {
    ...mapGetters("post", {
      post: "post",
      can_schedule: "can_schedule"
    })
  },
  methods: {
    openModal() {
      this.$refs.successModal.open();
    },
    goHome() {
      this.$router.push("/");
    },
    async goSchedules() {
      this.send_post();
      await this.get_schedules();
      this.add_schedules(this.post);
      this.$router.push("/listschedules");
    },
    watchMedia() {
      let mql = window.matchMedia("(max-width: 720px)");
      this.isMedia = mql.matches;
    },
    ...mapActions("schedules", {
      get_schedules: "get_schedules"
    }),
    ...mapMutations("post", {
      send_post: "send_post"
    }),
    ...mapMutations("schedules", {
      add_schedules: "add_schedules"
    })
  },
  mounted() {
    this.watchMedia();
    window.addEventListener("resize", this.watchMedia);
  },
  destroyed() {
    window.removeEventListener("resize", this.watchMedia);
  }
};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--white);
  display: flex;
  justify-content: flex-end;
  padding: var(--space-sm) var(--space-md);

  @media (max-width: 720px) {
    padding: var(--space-xs);
  }

  .ml-button {
    @media (max-width: 720px) {
      width: 104px;
      font-size: 12px;
      padding: var(--space-xxs) var(--space-xs);
    }
  }

  button:not(:last-child) {
    margin-right: var(--space-sm);
  }
}
</style>
