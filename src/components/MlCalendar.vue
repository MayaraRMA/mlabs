<template>
  <div class="calendar-container">
    <font-awesome-icon :icon="['fas', 'calendar-alt']" />
    <date-picker
      v-model="time1"
      valueType="format"
      format="DD/MM/YYYY"
      type="date"
      :lang="lang"
      :append-to-body="false"
      placeholder="DD/MM"
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
  name: "MlCalendar",
  components: { FontAwesomeIcon, DatePicker },
  data() {
    return {
      time1: null,
      lang: {
        monthFormat: "MMMM",
        days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.calendar-container {
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

.mx-datepicker-popup {
  border-radius: var(--border-radius);
  border: var(--border-gray);
  font: var(--font);

  .mx-calendar {
    width: 314px;
  }

  .mx-datepicker-body {
    .mx-calendar-header {
      font-size: 16px;

      .mx-btn {
        color: var(--blue-darker);
        font: var(--font);
      }
    }
    .mx-calendar-content {
      height: 275px;
      .mx-table-date th,
      .mx-table-date td {
        color: var(--blue-darker);
        height: 39.2px;
      }

      .mx-table-date {
        text-transform: uppercase;

        th {
          font-size: 12px;
        }

        .cell {
          font-size: 14px;

          &.disabled {
            border-radius: 0;
            color: #6b778c;
          }

          &.not-current-month {
            color: #6b778c;
            &.disabled {
              border-radius: 0;
            }
          }
          &.active {
            background-color: var(--white);
            color: var(--blue-dark);
            border: 2px solid var(--blue);
            border-left: 4px solid var(--blue);
            padding: 0 2px;
            font-weight: bold;
            div {
              border-bottom: 2px solid var(--blue-dark);
            }
          }
          &:hover {
            background-color: var(--gray-lighter);
          }
        }
      }
    }
  }
}
</style>
