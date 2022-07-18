function canNest(arr1, arr2) {
  if (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(canNest([1, 2, 3, 4], [2, 3]));
