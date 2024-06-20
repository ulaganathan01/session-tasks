// Programs using arrow function

// a. Print odd numbers in an array

const oddNumbers = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1) console.log("The odd Number: " + arr[i]);
    }
};
oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 3])

// b. Convert all the strings to title caps in a string array

const convertTitleCaps = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase()));
  }
  console.log("Title caps: " + res);
};
convertTitleCaps(["ulaganathan", "salim", "ram", "kamala"]);

// c. Sum of all numbers in an array

const sumOfNumbers = (arr) => {
    let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log("Sum of all numbers: " + sum);
};
sumOfNumbers([10, 30 , 20, 50, 40]);

// d. Return all the prime numbers in an array

const primeNumbers = (arr) => {
    let res = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) continue;
        if (arr[i] === 2) res.push(arr[i]);
        else {
          let flag = true;
          for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
              flag = false;
              break;
            }
          }
          flag ? res.push(arr[i]) : null;
        }
      }
      return res;
};
console.log("Prime numbers are: " + primeNumbers([1, 2, 3, 4, 5, 7, 8, 9, 43, 47, 36, 24, 83, 89, 100]));

// e. Return all the palindromes in an array

const palindromes = (arr) => {
    let res = [];
    for(let i = 0; i < arr.length; i++){
    let palindrome = arr[i].toString() === arr[i].toString().split("").reverse().join("");
    palindrome ? res.push(arr[i]) : null;
    }
    return res;
};
console.log("Palindromes are: " + palindromes(["cat", "tat", 101]));