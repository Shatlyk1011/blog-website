import { ref } from "vue";

import { useEditor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import CodeBlockLowLight from "@tiptap/extension-code-block-lowlight";
import Placeholder from "@tiptap/extension-placeholder";

import getUser from "@/composables/auth/getUser";
import { Timestamp, setDoc } from "firebase/firestore";
import useDocument from "@/composables/firestore/useDocument";
import getDocument from "@/composables/firestore/getDocument";
import useTags from "@/composables/useTags";
import getAvgTimeToRead from "./getAvgTimeToRead";

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
const { user } = getUser();

const useTiptapCreate = () => {
  const title = ref("");
  const { tags } = useTags();

  const editor = useEditor({
    //set undone work
    async onBeforeCreate({ editor }) {
      const { document: draft, getDoc } = getDocument();
      await getDoc("drafts", user.value!.uid);
      if (draft.value) {
        editor.commands.setContent(draft.value.html);
        title.value = draft.value.title;
        tags.value = draft.value.tags;
      }
    },

    //save as drafts
    async onUpdate({ editor }) {
      const html = editor.getHTML();
      let { avgTimeToRead } = getAvgTimeToRead(html);
      if (user.value) {
        await updateDocument("drafts", user.value.uid, {
          html,
          title: title.value,
          tags: tags.value,
          timeToRead: avgTimeToRead.value,
          userInfo: {
            author: user.value.displayName!,
            userUid: user.value.uid,
          },
          createdAt: Timestamp.fromDate(new Date()),
        });
      }
    },

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

export default useTiptapCreate;
