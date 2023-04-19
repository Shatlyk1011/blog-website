import { ref } from "vue";

const getAvgTimeToRead = (str: String) => {
  const avgTimeToRead = ref();
  if (str) {
    const length = str.split(" ").length;
    const avgSpeed = length / 120;
    avgTimeToRead.value = Math.ceil(avgSpeed);
  }
  return { avgTimeToRead };
};

export default getAvgTimeToRead;
