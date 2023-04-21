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
} from "@fortawesome/free-solid-svg-icons";

import router from "./router";
import "./style.scss";
import App from "./App.vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

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
  faQuoteLeft
);

let app: any;

onAuthStateChanged(auth, () => {
  if (!app) {
    createApp(App)
      .component("font-awesome-icon", FontAwesomeIcon)
      .use(router)
      .mount("#app");
  }
});
