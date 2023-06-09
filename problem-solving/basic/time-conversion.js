/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input

07:05:45PM
Sample Output

19:05:45
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  // const median = s.substring(8);
  // const post = median == 'PM';
  // const hours = Number(s.split(':')[0]);
  // const mins = Number(s.split(':')[1]);
  // const secs = Number(s.split(':')[2].substring(0, 2));
  // const rest = mins + secs;
  // const edge = hours == 12 && median == 'AM';
  // const newHour = edge ? 0 : hours;
  // const edge2 = hours == 12 && median == 'PM' && rest;
  // const formatted = post && !edge2 ? hours + 12 : newHour;
  // const result = `${String(formatted).padStart(2, '0')}:${String(mins).padStart(
  //   2,
  //   '0'
  // )}:${String(secs).padStart(2, '0')}`;
  // return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
