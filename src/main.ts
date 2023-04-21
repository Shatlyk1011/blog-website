import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBold,
  faItalic,
  faStrikethrough,
  faLink,
  faCode,
  faUnderline,
  faCaretDown,
  faParagraph,
  faListUl,
  faImage,
  faArrowLeft,
  faArrowRight,
  faListOl,
  faImagePortrait,
  faEye,
  faX,
  faHeading,
  faLaptopCode,
  faQuoteLeft,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import router from "./router";
import "./style.scss";
import App from "./App.vue";

library.add(
  faBold,
  faItalic,
  faStrikethrough,
  faLink,
  faCode,
  faUnderline,
  faCaretDown,
  faParagraph,
  faListUl,
  faImage,
  faArrowLeft,
  faArrowRight,
  faListOl,
  faImagePortrait,
  faEye,
  faX,
  faHeading,
  faLaptopCode,
  faQuoteLeft,
  faBookOpen
);

const pinia = createPinia();
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(pinia)
  .mount("#app");
