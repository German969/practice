// - Given an array with numbers, find the longest non decreasing subsequence.
const numbers = [10, 22, 9, 33, 21, 50, 41, 60, 80]; // 6
const numbers2 = [10, 22, 33, 50, 60, 80]; // 6
const numbers3 = [3, 10, 2, 11]; // 3
const numbers4 = [22, 33, 9, 10, 30, 50, 41, 60]; // 5
const numbers5 = [22, 33, 23, 24, 21, 25]; // 3

// Solution 1: Recursion
// n -> size of the array we are testing
const lis = (arr, n) => {
  if (n == 1) return 1;

  let res = 1;
  let max_ending_here = 1;

  for (let i = 1; i < n; i++) {
    res = lis(arr, i);

    if (arr[i - 1] < arr[n - 1] && res + 1 > max_ending_here) {
      max_ending_here = res + 1;
    }
  }

  if (max_ref < max_ending_here) {
    max_ref = max_ending_here;
  }

  return max_ending_here;
};

let max_ref = 1;
console.log(lis(numbers5, numbers5.length));

const lis2 = (arr, n) => {
  if (n == 1) return 1;

  for (let i = 1; i < n; i++) {
    res = lis2(arr, i); // Result of the subarray [0..i]

    let isLesser = arr[i - 1] < arr[n - 1]; // If current element is lower than the end of the array
    let higherCount = res + 1 > max_ending_here; // If the current result is higher than the previous one

    if (isLesser && higherCount) {
      max_ending_here = res + 1; // Update returning result for current subarray
    }
  }

  const higherResult = max_ref < max_ending_here; // Current subarray result higher than global result
  if (higherResult) {
    max_ref = max_ending_here; // Update global result
  }
};

// Global (fuera de la recursividad)
let MAX = 1;
const lis3 = (arr) => {
  if (arr.length === 1) return 1;

  // El resultado de cada iteracion recursiva
  const res = 1;

  // El resultado del for loop
  const currentResult = 1;

  for (let i = 1; i < n; i++) {
    // Obtener subresultados
    let subArray = arr.slice(0, i);
    res = lis3(subArray);

    // Comparar si el elemento actual suma
    // El ultimo tiene que ser menor que alguno de los anteriores (la recursividad hace que se checkeen todos)
    // (esta es la parte que cuesta entender)
    let last = arr[n - 1];
    let current = arr[i - 1];

    let currentIsLesser = current < last;

    // Checkeamos si el resultado seria mayor mayor
    let newResultIsHigher = res + 1 > currentResult;

    // Si ambos se cumplen actualizamos
    if (currentIsLesser && newResultIsHigher) {
      currentResult = currentResult + 1;
    }
  }

  // Checkeamos si tenemos que actualizar el resultado general
  // Actualizamos un valor fuera del ciclo recursivo, busqueda exhaustiva y si cumple las condiciones se actualiza
  if (currentResult > MAX) {
    MAX = currentResult;
  }
};

// n = 1
// [3] -> 1

// n -> 2
// [3, 10] -> 2 (1 + 10 que suma)

// n = 3
// [3, 10, 2] -> 2 (1 + 10 que sumo antes + 2 que no suma por ser menor al 10 y al 3 -> entro en 2 subalgoritmos)

// n = 4
// [3, 10, 2, 11] -> 3 (1 + 10 que sumo + 2 no sumo + 11 que suma en la secuencia 3, 10 y 10 -> la de 3, 10 es mayor (segunda condicion del if))
