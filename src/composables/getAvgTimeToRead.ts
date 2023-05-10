import { ref } from "vue";

const getAvgTimeToRead = (str: string) => {
  const avgTimeToRead = ref();
  if (str) {
    const length = str.split(" ").length;
    const avgSpeed = length / 160;
    avgTimeToRead.value = Math.ceil(avgSpeed);
  }
  return { avgTimeToRead };
};

export default getAvgTimeToRead;
