/**
 * It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

Example


If person  bribes person , the queue will look like this: . Only  bribe is required. Print 1.


Person  had to bribe  people to get to the current position. Print Too chaotic.

Function Description

Complete the function minimumBribes in the editor below.

minimumBribes has the following parameter(s):

int q[n]: the positions of the people after all bribes
Returns

No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than  people.
Input Format

The first line contains an integer , the number of test cases.

Each of the next  pairs of lines are as follows:
- The first line contains an integer , the number of people in the queue
- The second line has  space-separated integers describing the final state of the queue.

Constraints

Subtasks

For  score 
For  score 

Sample Input

STDIN       Function
-----       --------
2           t = 2
5           n = 5
2 1 5 3 4   q = [2, 1, 5, 3, 4]
5           n = 5
2 5 1 3 4   q = [2, 5, 1, 3, 4]
Sample Output

3
Too chaotic
 */
'use strict';

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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
  // Write your code here
  // NO
  // let swapped;
  // let bribes;
  // let totalBribes = 0;
  // for (let i = 0; i < q.length - 1; i++) {
  //     swapped = false;
  //     bribes = 0;
  //     for (let j = 0; j < q.length - i - 1; j++) {
  //         if (q[j] > q[j + 1]) {
  //             // SWAP
  //             let temp = q[j];
  //             q[j] = q[j + 1];
  //             q[j + 1] = temp;
  //             swapped = true;
  //             bribes = bribes + 1;
  //             if (bribes == 3) console.log('Too chaotic');
  //             return;
  //         }
  //         if (swapped == false) break;
  //         totalBribes = totalBribes + bribes;
  //     }
  // }
  // console.log(totalBribes);
  // NO
  // let bribes;
  // let totalBribes = 0;
  // for (let i = 0; i < q.length - 1; i++) {
  //     bribes = 0;
  //     for (let j = i; j < q.length - 1; j++) {
  //         if (q[j] > q[j + 1]) {
  //             // SWAP
  //             let aux = q[j];
  //             q[j] = q[j + 1];
  //             q[j + 1] = aux;
  //             bribes = bribes + 1;
  //             if (bribes == 3) {
  //                 console.log('Too chaotic');
  //                 return;
  //             }
  //         } else {
  //             break;
  //         }
  //     }
  //     totalBribes = totalBribes + bribes;
  // }
  // console.log(totalBribes);
}

function main() {
  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine().trim(), 10);

    const q = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((qTemp) => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}
