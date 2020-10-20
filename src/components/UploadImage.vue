<template>
  <ml-article title="Upload de Imagem">
    <div class="dropzone-area">
      <vue-dropzone
        :options="dropzoneOptions"
        id="dropzone"
        :useCustomSlot="true"
      >
        <div class="dropzone-content">
          <font-awesome-icon :icon="['fas', 'cloud-upload-alt']"/>
          <h3 class="dropzone-title">
            Arraste e solte uma imagem aqui ou clique no botão abaixo
          </h3>
          <ml-button
            label="Pesquisar imagens"
            customed-class="button-outline"
          />
        </div>
      </vue-dropzone>
    </div>
  </ml-article>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import MlButton from "./MlButton";

import MlArticle from "./MlArticle";

export default {
  name: "UploadImage",
  components: {
    MlArticle,
    MlButton,
    FontAwesomeIcon,
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
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

.dropzone-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: var(--space);
  color: var(--gray-dark);

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

  .ml-button {
    width: 200px;
  }
}
</style>
