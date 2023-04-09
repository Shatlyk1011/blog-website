import { ref } from "vue";

const allowedImageTypes = ["image/png", "image/jpeg", "image/gif"];

const imageTypeError = ref<string>("");
let imagePreviewUrl = ref("");
let image = ref();

const handleImage = (e: Event) => {
  let selected = e.target as HTMLInputElement;
  if (
    selected.files?.length &&
    allowedImageTypes.includes(selected.files[0].type)
  ) {
    let img = selected.files[0];
    image.value = img;
    imagePreviewUrl.value = URL.createObjectURL(img);
  } else {
    imageTypeError.value = "Только png/jpen/gif форматы";
    setTimeout(() => {
      imageTypeError.value = "";
    }, 3000);
  }
};

const getInputImage = () => {
  return { handleImage, imageTypeError, imagePreviewUrl, image };
};

export default getInputImage;
