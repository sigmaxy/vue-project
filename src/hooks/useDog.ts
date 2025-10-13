import { onMounted, reactive } from "vue";
import axios from "axios";

export default function () {
  //https://dog.ceo/api/breed/pembroke/images/random
  //https://dog.ceo/api/breeds/image/random
  let dogList = reactive([
    "https://images.dog.ceo/breeds/schipperke/n02104365_481.jpg",
  ]);

  async function getDogs() {
    let res = await axios.get("https://dog.ceo/api/breeds/image/random/3");
    console.log(res);
    try {
      if (!res || !res.data) {
        throw new Error("No data");
      } else {
        dogList.splice(0);
        res.data.message.forEach((dog: string) => {
          dogList.push(dog);
        });
      }
    } catch (e) {
      console.error(e);
      return;
    }
  }
  onMounted(() => {
    getDogs();
  });
  return { dogList, getDogs };
}
