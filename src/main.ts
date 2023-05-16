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
  faHighlighter,
  faBars,
  faMagnifyingGlass,
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
  faBookOpen,
  faEllipsis,
  faTimesCircle,
  faCircleExclamation,
  faHeart,
  faReply,
  faHighlighter,
  faBars,
  faMagnifyingGlass
);

const pinia = createPinia();

createApp(App).use(pinia).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");
