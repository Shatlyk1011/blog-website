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
  faEllipsis,
  faTimesCircle,
  faCircleExclamation,
  faHeart,
  faReply,
} from "@fortawesome/free-solid-svg-icons";

import router from "./router";
import "./style.scss";
import App from "./App.vue";
import { useUserStore } from "@/stores/user";

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
  faBookOpen,
  faEllipsis,
  faTimesCircle,
  faCircleExclamation,
  faHeart,
  faReply
);

const pinia = createPinia();

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(pinia)
  .mount("#app");

//init user
useUserStore().initUser();
