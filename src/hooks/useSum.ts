import { ref, onMounted } from "vue";

export function useSum() {
  let sum = ref(0);
  //https://dog.ceo/api/breed/pembroke/images/random
  //https://dog.ceo/api/breeds/image/random

  function addToSum(amount: number) {
    sum.value += amount;
  }
    onMounted(() => {
    addToSum(10);
  });
  return { addToSum, sum };
}
