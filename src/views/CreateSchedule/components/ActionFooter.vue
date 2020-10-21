<template>
  <footer>
    <ml-button
      label="Cancelar"
      customed-class="button-tertiary"
      @eventClick="goHome"
    />
    <ml-button :label="buttonOutline" customed-class="button-outline" />
    <ml-button label="Agendar" @eventClick="openModal" />
    <ml-modal ref="successModal" @close="goSchedules" />
  </footer>
</template>

<script>
import MlButton from "@/components/MlButton";
import MlModal from "@/components/MlModal";
import { mapActions, mapGetters } from "vuex";

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
    ...mapGetters("schedules", {
      post: "post"
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
      await this.get_schedules();
      this.$router.push("/listschedules");
    },
    watchMedia() {
      let mql = window.matchMedia("(max-width: 720px)");
      this.isMedia = mql.matches;
    },
    ...mapActions("schedules", {
      get_schedules: "get_schedules"
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
