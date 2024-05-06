function sortBasedOnAscaii(str) {
   let arr = str.split("");

   for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j].charCodeAt() > arr[j + 1].charCodeAt()) {
              let tmp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = tmp;
          }
      }
  }

   return arr.join("");
}

console.log(sortBasedOnAscaii("hCaPpyAbB"));
