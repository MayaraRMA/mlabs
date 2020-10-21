<template>
  <section class="schedules">
    <h1>Listagem de agendamento</h1>
    <div class="schedulet-table">
      <ml-table v-bind="{ columns }" :data="schedules">
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
        <template v-slot:action>
          <div class="preview">
            <a href="#">Preview</a>
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
import { mapGetters, mapActions } from "vuex";

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
    key: "action",
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
      columns: columns
    };
  },
  computed: {
    ...mapGetters("schedules", {
      schedulesStatus: "schedules_status",
      schedules: "schedules"
    })
  },
  methods: {
    setStatusName(value) {
      if (this.schedulesStatus.length > 0) {
        const [status] = this.schedulesStatus.filter(item => item.id === value);
        return status.name;
      }
    },
    setStatusColor(value) {
      if (this.schedulesStatus.length > 0) {
        const [status] = this.schedulesStatus.filter(item => item.id === value);
        return status.color;
      }
    },
    ...mapActions("schedules", {
      get_schedules_status: "get_schedules_status"
    })
  },
  async mounted() {
    await this.get_schedules_status();
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

.preview {
  width: 100%;
  text-align: center;
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
