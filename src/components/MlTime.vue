<template>
  <div class="time-container">
    <font-awesome-icon :icon="['fas', 'clock']" />
    <date-picker
      v-model="time1"
      valueType="format"
      format="HH:MM"
      type="time"
      :append-to-body="false"
      placeholder="HH:MM"
      :popup-style="{ display: 'none' }"
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
  data() {
    return {
      time1: null
    };
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
