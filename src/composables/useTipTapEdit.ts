import { ref } from "vue";

import { useEditor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import CodeBlockLowLight from "@tiptap/extension-code-block-lowlight";
import Placeholder from "@tiptap/extension-placeholder";

import useDocument from "@/composables/firestore/useDocument";
import useTags from "@/composables/useTags";

//code highlight
import { lowlight } from "lowlight/lib/core";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
lowlight.registerLanguage("ts", ts);

const { updateDocument } = useDocument();

const useTipTapEdit = () => {
  const title = ref("");
  const { tags } = useTags();

  const editor = useEditor({
    autofocus: true,
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "E-bulletList",
          },
        },
        code: {
          HTMLAttributes: {
            spellcheck: false,
          },
        },
        codeBlock: {
          HTMLAttributes: {
            class: "E-codeBlock",
          },
        },
        paragraph: {
          HTMLAttributes: {
            class: "E-paragraph",
          },
        },
      }),

      Image.configure({
        HTMLAttributes: {
          class: "E-image",
        },
      }),
      Link.configure({
        HTMLAttributes: {
          class: "E-link",
          rel: null,
          target: null,
        },
      }),
      CodeBlockLowLight.configure({
        lowlight,
        HTMLAttributes: {
          class: "E-codeLowlight",
        },
      }),
      Placeholder.configure({
        placeholder: "Содержание вашего поста...",
      }),
      TextStyle,
    ],
  });

  return { editor, title, tags };
};

export default useTipTapEdit;