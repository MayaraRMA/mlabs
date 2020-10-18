<template>
  <footer>
    <ml-button label="Cancelar" customed-class="button-tertiary" />
    <ml-button label="Salvar rascunho" customed-class="button-outline" />
    <ml-button label="Agendar" @eventClick="openModal" />
    <ml-modal ref="successModal" @close="goSchedules" />
  </footer>
</template>

<script>
import MlButton from "./MlButton";
import MlModal from "./MlModal";

export default {
  name: "ActionFooter",
  components: {
    MlButton,
    MlModal
  },
  methods: {
    openModal() {
      console.log("aqui");
      this.$refs.successModal.open();
    },
    goSchedules() {
      this.$router.push("/schedules");
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--white);
  display: flex;
  justify-content: flex-end;
  padding: var(--space-sm) var(--space-md);

  button:not(:last-child) {
    margin-right: var(--space-sm);
  }
}
</style>
