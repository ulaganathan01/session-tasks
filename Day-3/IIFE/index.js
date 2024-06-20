// Programs using IIFE

// a. Print odd numbers in an array

(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      console.log("Odd Number: " + arr[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 3]);

// b. Convert all the strings to title caps in a string array

(function (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase()));
  }
  console.log("Title caps: " + res);
})(["ulaganathan", "salim", "ram", "kamala"]);

// c. Sum of all numbers in an array

(function(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log("Sum of all numbers: " + sum);
})([10, 30 , 20, 50, 40]);

// d. Return all the prime numbers in an array
const primeNumbers = (function (arr) {
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
})([1, 2, 3, 4, 5, 7, 8, 9, 43, 47, 36, 24, 83, 89, 100]);
console.log("Prime numbers: " + primeNumbers);

// e. Return all the palindromes in an array

const palindromes = (function(arr){
  let res = [];
  for(let i = 0; i < arr.length; i++){
    let palindrome = arr[i].toString() === arr[i].toString().split("").reverse().join("");
    palindrome ? res.push(arr[i]) : null;
  }
  return res;
})(["cat", "tat", 101]);
console.log("Palindromes: " + palindromes);

// f. Return median of two sorted arrays of the same size
const medianOfTwoSortedArray = (function(arr1, arr2){
  const mergedArray = [...arr1, ...arr2].sort();
  let n = mergedArray.length;
  if(n % 2 === 0){
    return(mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
  }else{
    return mergedArray[Math.floor(n / 2)];
  }
})([1, 2, 3], [4, 5, 6, 8, 9]);
console.log("Median of two sorted array: " + medianOfTwoSortedArray);

// g. Remove duplicates from an array
(function(arr){
  const sortedArray = arr.sort();
  const res = [];
  for(let i = 0; i < arr.length; i++){
    if(sortedArray[i] !== sortedArray[i + 1]){
        res.push(sortedArray[i]);
    }
  }
  console.log("After removing duplicates: " + res);
})([1, 2, 1, 4, 3, 2, 6, 1]);

// h. Rotate an array by k times
(function (arr, k) {
  for (let i = 0; i < k; i++) {
    let lastItem = arr[arr.length - 1];
    for (let j = 0; j < arr.length; j++) {
      let temp = arr[j];
      arr[j] = lastItem;
      lastItem = temp;
    }
  }
  console.log("After rotating array of k times: " + arr);
})([1, 2, 3, 4, 5], 2);
