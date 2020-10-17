<template>
  <footer>
    <ml-button label="Cancelar" customed-class="button-tertiary"/>
    <ml-button label="Salvar rascunho" customed-class="button-outline"/>
    <ml-button label="Agendar"/>
  </footer>
</template>

<script>
import MlButton from "./MlButton";
export default {
  name: "ActionFooter",
  components: {
    MlButton
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
