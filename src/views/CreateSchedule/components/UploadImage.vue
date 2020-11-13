<template>
  <ml-article title="Upload de Imagem">
    <div class="dropzone-area" @dragover.prevent @drop.prevent="dropzone">
      <ul class="file-add" v-if="hasFile">
        <li v-for="(file, index) in files" :key="index">
          {{ file.name }} ({{ file.size | kb }} kb)
          <button class="file-remove" @click="removeFile(file)" title="Excluir">
            X
          </button>
        </li>
      </ul>
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
      files: []
    };
  },
  computed: {
    hasFile() {
      return this.files.length > 0;
    }
  },
  methods: {
    addPhoto() {
      let files = this.$refs.photos.files;
      this.files = [...this.files, ...files];
    },
    dropzone(e) {
      if (!this.hasFile) {
        let droppedFiles = e.dataTransfer.files;
        if (!droppedFiles) return;
        [...droppedFiles].forEach(f => {
          this.files.push(f);
        });
      }
    },
    removeFile(file) {
      this.files = this.files.filter(f => {
        return f != file;
      });
    },
    upload() {
      let formData = new FormData();
      this.files.forEach((f, x) => {
        formData.append("file" + (x + 1), f);
      });

      // fetch("https://httpbin.org/post", {
      //   method: "POST",
      //   body: formData
      // })
      //   .then(res => res.json())
      //   .then(res => {
      //     console.log("done uploading", res);
      //   })
      //   .catch(e => {
      //     console.error(JSON.stringify(e.message));
      //   });
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

  li {
    background-color: var(--gray-lighter);
    padding: 8px;
    position: relative;
  }
}

.file-remove {
  border: none;
  color: var(--orange);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid var(--orange);
  cursor: pointer;
  background-color: var(--white);
  position: absolute;
  top: -10px;
  right: -10px;
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
