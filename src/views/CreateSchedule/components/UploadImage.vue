<template>
  <ml-article title="Upload de Imagem">
    <div
      class="dropzone-area"
      @dragover.prevent.stop=""
      @dragenter.prevent.stop=""
      @drop.prevent.stop="dropzone"
    >
      <p class="file-add" v-if="hasFile" @click="remove">{{ file.name }}</p>
      <label v-else for="photos">
        <font-awesome-icon :icon="['fas', 'cloud-upload-alt']" />
        <h3 class="dropzone-title">
          Arraste e solte uma imagem aqui ou clique no botão abaixo
        </h3>
        <div class="btn">Pesquisar Imagens</div>
      </label>
      <input
        id="photos"
        name="photos"
        type="file"
        ref="photos"
        @change="addPhoto"
      />
    </div>
  </ml-article>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import MlArticle from "@/components/MlArticle";

export default {
  name: "UploadImage",
  components: {
    MlArticle,
    FontAwesomeIcon
  },
  data() {
    return {
      files: [],
      file: null
    };
  },
  computed: {
    hasFile() {
      return this.files.length > 0;
    }
  },
  methods: {
    addPhoto() {
      this.files = this.$refs.photos.files;
      this.file = {
        name: this.files[0].name,
        file: this.files[0]
      };
    },
    dropzone(event) {
      this.$refs.photos.files = event.dataTransfer.files;
    },
    remove() {
      this.files = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.dropzone-area {
  border: var(--border-dropzone);
  margin: var(--space-sm);
  border-radius: var(--border-radius);
}

.file-add {
  padding: var(--space-xlg);
  text-align: center;
  color: var(--orange);
  cursor: pointer;
}

input[type="file"] {
  display: none;
}

label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: var(--space);
  color: var(--gray-dark);
}

svg {
  display: none;

  @media (min-width: 480px) {
    display: block;
    font-size: 40px;
    margin-bottom: var(--space);
  }
}

h3 {
  display: none;

  @media (min-width: 480px) {
    display: block;

    font-size: 16px;
    margin-bottom: var(--space);
  }
}

.btn {
  border-radius: var(--space-xxs);
  padding: var(--space-xs) var(--space-sm);
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
</style>
