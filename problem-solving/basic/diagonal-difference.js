/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
 */
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  // let diagonalSum = 0;
  // let counterDiagonalSum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //     for (let k = 0; k < arr.length; k++) {
  //         if (i == k) {
  //             diagonalSum += arr[i][k];
  //         }
  //         if (i + k == arr.length - 1) {
  //             counterDiagonalSum += arr[i][k];
  //         }
  //     }
  // }
  // return Math.abs(diagonalSum - counterDiagonalSum);
}

function diagonalDifferenceOptimized(arr) {
  // Write your code here
  // const len = matrix.length;
  // let diagonalSum = 0;
  // let counterDiagonalSum = 0;
  // for (let i = 0; i < len; i++) {
  //   diagonalSum += matrix[i][i];
  //   counterDiagonalSum += matrix[i][len - i - 1];
  // }
  // return Math.abs(diagonalSum - counterDiagonalSum);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + '\n');

  ws.end();
}
