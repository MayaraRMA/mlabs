<template>
  <div class="modal" v-if="showModal">
    <div class="content">
      <img src="../assets/success.svg" alt="agendado com sucesso" />
      <h1>Agendado com sucesso!</h1>
      <ml-button label="OK" @eventClick="close" />
    </div>
  </div>
</template>

<script>
import MlButton from "./MlButton";

export default {
  name: "MlModal",
  components: {
    MlButton
  },
  props: {
    movie: {
      type: Object
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    open() {
      this.showModal = true;
      this.$emit("open");
    },
    close() {
      this.showModal = false;
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes show-down {
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.modal {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba($color: #000000, $alpha: 0.7);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  .content {
    width: 60%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
    color: var(--gray);
    border-radius: var(--border-radius);
    padding: var(--space-lg);
    animation: show-down 0.5s ease-in;

    @media (max-width: 712px) {
      width: 90%;
      height: 95%;
      padding: var(--space);
    }

    h1 {
      margin-bottom: var(--space-sm);
    }
  }
}
</style>
