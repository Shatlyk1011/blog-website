import { ref } from "vue";

const tags = ref<string[]>([]);

interface InputEvent extends Event {
  target: HTMLInputElement;
}

const addTag = (e: InputEvent) => {
  let tag = e.target.value;
  if (!tags.value.includes(tag) && tags.value.length < 3) {
    tags.value.push(tag);
    console.log("event", e.target?.value);

    tag = "";
  }
  tag = "";
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
