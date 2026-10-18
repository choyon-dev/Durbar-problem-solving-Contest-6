function chunkArray(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}


// let test = chunkArray([1, 2, 3, 4, 5], 2);
let test = chunkArray(["a", "b", "c", "d"], 2);
console.log(test);