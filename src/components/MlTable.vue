<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="(column, index) in dataColumns"
          :key="index"
          @click="onClickOrderBy(column)"
        >
          {{ column.text }}
          <span v-if="column.ordable">
            <font-awesome-icon
              :icon="['fas', 'arrow-down']"
              :class="{ 'fa-flip-vertical': column.asc }"
              aria-hidden
            ></font-awesome-icon>
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="noData">
        <td :colspan="columnsQuantity" class="no-data">
          <slot name="no-data">
            <div class="no-data-content">
              <p>Não há dados disponíveis</p>
            </div>
          </slot>
        </td>
      </tr>
      <tr v-else v-for="(row, index) in dataTable" :key="index">
        <td v-for="(col, colIndex) in dataColumns" :key="colIndex">
          <slot v-if="col.key" :name="col.key" :row="row">
            <span class="cursor-text p-1">{{ formatCell(row, col) }}</span>
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import get from "lodash/get";
import orderBy from "lodash/orderBy";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { formatterDateTime } from "@/utils/formatterDate";

export default {
  name: "ml-table",
  components: {
    FontAwesomeIcon
  },
  props: {
    tableName: {
      type: String
    },
    columns: {
      type: Array,
      default: () => [
        {
          key: "key",
          text: "text"
        }
      ]
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dataTable: this.data,
      direction: "",
      formatters: {
        date: formatterDateTime
      }
    };
  },
  computed: {
    dataColumns() {
      return this.columns.map(column => ({
        ...column,
        asc: column.ordable
      }));
    },
    noData() {
      return this.dataTable.length === 0;
    },
    columnsQuantity() {
      return this.dataColumns.length + 1;
    }
  },
  methods: {
    onClickOrderBy(column) {
      this.flipColumn(column);

      if (column.ordable) {
        this.orderBy(column);
      }
    },
    orderBy(column) {
      this.direction = column.asc ? "asc" : "desc";
      this.dataTable = orderBy(this.data, column.key, [this.direction]);
    },
    flipColumn(column) {
      this.dataColumns.forEach(columnData => {
        if (columnData.key !== column.key) columnData.asc = true;
      });
      column.asc = !column.asc;
    },
    formatCell(row, { defaultValue = "-", format, key }) {
      let cell = get(row, key, defaultValue);

      if (format && cell !== defaultValue) {
        cell = this.formatters[format](cell);
      }

      return cell;
    }
  }
};
</script>

<style lang="scss" scoped>
.no-data-content {
  display: flex;
  flex-direction: column;
}

table {
  width: 100%;
  border-collapse: collapse;
  color: var(--gray);
}

th {
  padding: var(--space) var(--space-sm);
  border: solid 1px #bdbdbd;
  background-color: var(--white);
  white-space: nowrap;
}

td {
  border: solid 1px #bdbdbd;
  padding: var(--space) var(--space-sm);
  font-size: 14px;
}

tbody tr {
  outline: none;
}

tr:nth-child(even) {
  background: #ffffff;
}
tr:nth-child(odd) {
  background: #f6f6f6;
}
</style>
