import { createApp } from "vue";
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
  faListUl
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
