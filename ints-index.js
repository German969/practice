// - Search in a sorted array of ints for an entry equal to its index (A[i] == i).
const sortedArray = [-10, -5, 0, 3, 7]; // 3
const sortedArray2 = [0, 2, 5, 8, 17]; // 0
const sortedArray3 = [-10, -5, 3, 4, 7, 9]; // No

// Solution 1: Linear Search
const linearSearch = (inputArray) => {
  return inputArray.find((element, index) => element === index);
};

// console.log(linearSearch(sortedArray));
// console.log(linearSearch(sortedArray2));
// console.log(linearSearch(sortedArray3));

// Solution 2: Binary search
const binarySearch = (arr, low, high) => {
  // While high is higher than low
  if (high >= low) {
    // Find middle Point
    let mid = Math.floor((low + high) / 2);

    // console.log(
    //   'Low:',
    //   low,
    //   'High:',
    //   high,
    //   'Mid:',
    //   mid,
    //   'LowValue:',
    //   arr[low],
    //   'HighValue:',
    //   arr[high]
    // );

    // If match
    if (mid == arr[mid]) return mid;

    // Search higher
    if (arr[mid + 1] <= high) return binarySearch(arr, mid + 1, high);

    // Search lower
    if (arr[mid - 1] >= low) return binarySearch(arr, low, mid - 1);
  }

  return -1;
};

// console.log(binarySearch(sortedArray, 0, sortedArray.length - 1));
// 0, 4 -> 2
// 3 <= 7 go higher -> 3, 4
// 3, 4 -> 2
// console.log(binarySearch(sortedArray2, 0, sortedArray2.length - 1));
// 3 <= 17
// console.log(binarySearch(sortedArray3, 0, sortedArray3.length - 1));

const binarySearch2 = (arr, low, high) => {
  let result = null;

  while (result === null && high >= low) {
    let mid = Math.floor((low + high) / 2);

    if (mid === arr[mid]) {
      result = mid;
    } else if (arr[mid + 1] <= high) {
      low = mid + 1;
    } else if (arr[mid - 1] >= low) {
      high = mid - 1;
    }
  }

  return result;
};

console.log(binarySearch2(sortedArray3, 0, sortedArray3.length - 1));
