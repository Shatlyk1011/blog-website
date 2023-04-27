import { ref } from "vue";

const tags = ref<string[]>([]);

interface InputEvent extends Event {
  target: HTMLInputElement;
}

const addTag = (e: InputEvent) => {
  let tag = e.target.value.trim();
  if (!tags.value.includes(tag) && tags.value.length < 3 && tag !== "") {
    tags.value.push(tag.toLowerCase());
    console.log("event", e.target?.value);

    e.target.value = "";
  }
  e.target.value = "";
};

const removeTag = (tag: string) => {
  const filterTags = tags.value.filter((t) => {
    return t != tag;
  });
  tags.value = filterTags;
};

const useTags = () => {
  return { addTag, removeTag, tags };
};

export default useTags;
