<template>
  <section class="schedules">
    <h1>Listagem de agendamento</h1>
    <div class="schedulet-table">
      <ml-table v-bind="{ columns, data }">
        <template v-slot:social_network_key="props">
          <div class="social">
            <ml-media-icon
              v-for="social in props.row.social_network_key"
              :key="social"
              :customedClass="true"
              :id="social"
            />
          </div>
        </template>
        <template v-slot:media="props">
          <div class="media">
            <img :src="props.row.media" alt="media" />
          </div>
        </template>
        <template v-slot:status_key="props">
          <div class="status">
            <div
              class="status-ball"
              :style="{ backgroundColor: setStatusColor(props.row.status_key) }"
            ></div>
            <p>{{ setStatusName(props.row.status_key) }}</p>
          </div>
        </template>
      </ml-table>
    </div>
  </section>
</template>

<script>
import MlTable from "@/components/MlTable";
import MlMediaIcon from "@/components/MlMediaIcon";
import { data } from "../../data/schedules.json";
import { data as schedulesStatus } from "../../data/schedules-status.json";

const columns = [
  {
    key: "social_network_key",
    text: "Redes Sociais"
  },
  {
    key: "media",
    text: "Midia"
  },
  {
    key: "text",
    text: "Texto"
  },
  {
    key: "publication_date",
    text: "Data",
    ordable: true,
    format: "date"
  },
  {
    key: "",
    text: "Ações"
  },
  {
    key: "status_key",
    text: "Status"
  }
];
export default {
  name: "schedules",
  components: {
    MlTable,
    MlMediaIcon
  },
  data() {
    return {
      columns: columns,
      data: data
    };
  },
  methods: {
    setStatusName(value) {
      const [status] = schedulesStatus.filter(item => item.id === value);
      return status.name;
    },
    setStatusColor(value) {
      const [status] = schedulesStatus.filter(item => item.id === value);
      return status.color;
    }
  }
};
</script>

<style lang="scss" scoped>
.schedules {
  padding: var(--space);
}

h1 {
  width: 100%;
  font-size: 16px;
  color: var(--gray);
  margin-bottom: var(--space);
}

.schedulet-table {
  width: 100%;
  overflow-x: auto;
}
.social {
  display: flex;
  justify-content: center;
  align-items: center;

  div:not(:last-child) {
    margin-right: var(--space-sm);
  }
}

.media {
  text-align: center;
  img {
    width: 50px;
    height: 50px;
  }
}

.status-ball {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: var(--space-xs);
}

.status {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
