function transform(arr) {
  res = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] === "string" &&
      !arr[i].includes("discard") &&
      !arr[i].includes("double")
    ) {
      res.push(arr[i]);
    }
    if (typeof arr[i] !== "string") {
      res.push(arr[i]);
    } else if (
      arr[i] &&
      arr[i] === "--discard-prev" &&
      arr[i - 2] !== "--discard-next"
    ) {
      res.pop();
    } else if (arr[i + 1] && arr[i] === "--double-next") {
      res.push(arr[i + 1]);
    } else if (
      arr[i - 1] &&
      arr[i] === "--double-prev" &&
      !arr[i - 2].includes("--discard")
    ) {
      res.push(arr[i - 1]);
    } else if (
      arr[i - 1] &&
      arr[i - 1] === "--discard-next" &&
      arr[i + 1] !== "--double-prev"
    ) {
      res.pop();
    }
  }
  return res;
}
console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])
);
