<template>
  <div class="time-container">
    <font-awesome-icon :icon="['fas', 'clock']" />
    <date-picker
      v-model="time"
      valueType="HH:mm:ss"
      format="HH:mm"
      type="time"
      :append-to-body="false"
      placeholder="HH:MM"
    >
      <template slot="icon-calendar">
        <p></p>
      </template>
    </date-picker>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/locale/pt-br";

export default {
  name: "MlTime",
  components: { FontAwesomeIcon, DatePicker },
  props: {
    value: {}
  },
  computed: {
    time: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.time-container {
  border: var(--border-icon);
  border-radius: var(--border-radius);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 124px;
  svg {
    margin-left: var(--space-xs);
  }
}
</style>
<style src="vue2-datepicker/index.css"></style>
<style lang="scss">
.mx-input {
  outline: none;
  border: none;
}
</style>
