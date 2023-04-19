import { ref } from "vue";

const tags = ref<string[]>([]);

const addTag = (tag: string) => {
  if (!tags.value.includes(tag) && tags.value.length < 3) {
    tags.value.push(tag);
  }
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
