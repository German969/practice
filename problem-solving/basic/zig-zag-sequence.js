/**
 * In this challenge, the task is to debug the existing code to successfully execute all provided test files.

Given an array of  distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first  elements in the sequence are in increasing order and the last  elements are in decreasing order, where . You need to find the lexicographically smallest zig zag sequence of the given array.

Example.


Now if we permute the array as , the result is a zig zag sequence.

Debug the given function findZigZagSequence to return the appropriate zig zag sequence for the given input array.

Note: You can modify at most three lines in the given code. You cannot add or remove lines of code.

To restore the original code, click on the icon to the right of the language selector.

Input Format

The first line contains  the number of test cases. The first line of each test case contains an integer , denoting the number of array elements. The next line of the test case contains  elements of array .

Constraints


 ( is always odd)

Output Format

For each test cases, print the elements of the transformed zig zag sequence in a single line.
 */
function processData(input) {
  //Enter your code here
  // const data = input.split('\n');
  // const tc = data.shift();
  // while(data.length) {
  //     const n = data.shift();
  //     const a = data.shift().split(' ');
  //     a.sort();
  //     const mid = Math.floor((a.length)/2);
  //     const aux = a[mid];
  //     a[mid] = a[n - 1];
  //     a[n - 1] = aux;
  //     let st = mid + 1;
  //     let ed = n - 2;
  //     while(st <= ed){
  //         const aux2 = a[st];
  //         a[st] = a[ed];
  //         a[ed] = aux2;
  //         st = st + 1;
  //         ed = ed - 1;
  //     };
  //     let str = '';
  //     for (let i = 0; i < n; i++) {
  //         if (i == n-1) {
  //             str = str + a[i];
  //         } else {
  //             str = str + `${a[i]} `;
  //         }
  //     }
  //     console.log(str);
  // }
  // return;
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
  _input += input;
});

process.stdin.on('end', function () {
  processData(_input);
});
