import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarAlt,
  faClock,
  faCloudUploadAlt,
  faArrowDown,
  faBars,
  faBookmark,
  faHeart,
  faComment,
  faCommentAlt,
  faShare,
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faPinterestP,
  faTwitter,
  faFacebookF,
  faFontAwesome
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCalendarAlt,
  faClock,
  faCloudUploadAlt,
  faArrowDown,
  faBars,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faPinterestP,
  faTwitter,
  faFacebookF,
  faFontAwesome,
  faBookmark,
  faHeart,
  faComment,
  faCommentAlt,
  faShare,
  faThumbsUp
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
