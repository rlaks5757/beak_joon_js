const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("problem/10869.txt").toString().trim().split(" ");

const num_input = input.map((com) => Number(com));

console.log(num_input[0] + num_input[1]);
console.log(num_input[0] - num_input[1]);
console.log(num_input[0] * num_input[1]);
console.log(parseInt(num_input[0] / num_input[1]));
console.log(num_input[0] % num_input[1]);
