// - Given an array with numbers, find the longest non decreasing subsequence.
const numbers = [10, 22, 9, 33, 21, 50, 41, 60, 80]; // 6
const numbers2 = [10, 22, 33, 50, 60, 80]; // 6
const numbers3 = [3, 10, 2, 11]; // 3
const numbers4 = [22, 33, 9, 10, 30, 50, 41, 60]; // 5
const numbers5 = [22, 33, 23, 24, 21, 25]; // 3

// Solution 2: Dynamic Programming
// Using tabulation to record subproblem solutions
function lis(arr, n) {
  let lis = Array(n).fill(1);
  let i,
    j,
    max = 0;

  // Compute optimized LIS values in
  // bottom up manner

  // Buscar resultados de subarrays
  for (i = 1; i < n; i++) {
    // Buscar resultado actual
    for (j = 0; j < i; j++) {
      // Si el elemento es mayor y el resultado es menor
      // arr[i] es el ultimo del subarray
      // arr[j] es el actual
      // lis[i] es el resultado del subarray total
      // lis[j] es el resultado actual
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        // Actualizar resultado actual (suma para el final del subarray)
        lis[i] = lis[j] + 1;
      }
    }
  }

  return Math.max(...lis);
}

/*
// Solution 3
If we closely observe the problem then we can convert this problem to longest Common Subsequence Problem.
Firstly we will create another array of unique elements of original array and sort it.
Now the longest increasing subsequence of our array must be present as a subsequence in our sorted array.
That’s why our problem is now reduced to finding the common subsequence between the two arrays.

Eg. arr =[50,3,10,7,40,80]
    // Sorted array
    arr1 = [3,7,10,40,50,80]
    // LIS is longest common subsequence between the two arrays
    ans = 4
    The longest increasing subsequence is {3, 7, 40, 80}
*/

// Solution 4: Memoization
// We add Length of LIS ending with element arr[n-1]. We use max_ending_here for this purpose
// Add new returning array with previously computed results to not calculate them again
