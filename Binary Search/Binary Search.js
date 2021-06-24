/**
 * Binary Search
 */

const array = [1, 3, 3, 4, 6, 7, 8, 9, 11, 12, 14, 15, 16, 17, 17, 18, 19, 20]; // length : 18

// Time complexity : O(Log n), space complexity : O(1)
const binarySearch = (array, target) => {
  if (array[0] > target || array[array.length - 1] < target) return -1;

  let left = 0;
  let right = array.length - 1;

  // we don't know how many times we need to loop but we want to avoid searching every single element in the array
  // so, keep searching as long as there's elements left for us to search
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);

    if (array[middle] === target) return middle;

    if (array[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

console.log(binarySearch(array, 7));

// Recursive implementation
// Time complexity : O(Log n), space complexity : O(Log n)
const binarySearch = (array, target) => {
  return binarySearchHelper(array, target, 0, array.length - 1);
};

const binarySearchHelper = (array, target, left, right) => {
  if (left > right) return false;

  const middle = left + Math.floor((right - left) / 2);

  if (array[middle] === target) return middle;

  if (array[middle] > target) {
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
};

console.log(binarySearch(array, 7));
