apple * 46

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
37,24,3,87,82,40,74,32,38,22,81,11,37,45,92,8,73,75,62,60,96,21,79,88,44 + false
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
83 - 93
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
67 + apple
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const isPalindrome = str => str === str.split("").reverse().join("");
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
true / 62
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
kiwi

function addNumbers(a, b) { return a + b; }
62,11,3,39,47,19,43,3,94,34,44,40,78,2,93,29,18,20,62,11,3,90,94,38,81,89,46,89,85,74,4,22,41,47,89,80,37,32,17,23,38,9,0,94,74,12,72,65,80,8,66,21,74,10,59,48,34,17,23,0,84,36,47,39,40,42,92,99,29,27,69,88,90,26,35,54,31,59,49,32,12,56,64,91,52 + 18,22
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
grape - grape
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const sum = (a, b) => a + b;
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
true + orange
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
57 + false
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
apple

const capitalizeString = str => str.toUpperCase();
const removeDuplicates = array => Array.from(new Set(array));
16,93,51,46,23,29,48,24,90,34,93,60,33,21,34,22,67,58,4,23,33,94,47,64,0,39,2,72,10,69,28,61,84,84,55,60,72,28,47,98,9,73,6,54,25,76,33,77,46,86,66,70,12,31,17,29,14,47,41,74,75,22,4,75,56,38,36,21,95,11,91,5 / true
const findLargestNumber = numbers => Math.max(...numbers);
grape - banana
const formatDate = date => new Date(date).toLocaleDateString();
95,80,65,46,1,73,78,49,20,80,30,71,14,17,28 / false
const filterEvenNumbers = numbers => numbers.filter(isEven);
35 - 20

const squareRoot = num => Math.sqrt(num);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const sum = (a, b) => a + b;
orange

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
25 * 89

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

const multiply = (a, b) => a * b;
const reverseString = str => str.split("").reverse().join("");
99,62,91,16,21,82,48,11,32 + 48
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const getRandomSubset = (array, size) => array.slice(0, size);
5,91,62,97,97,81,21,81,52,55,91,77,68,37,31,3,50,62,29,40,8,0,29,5,3,62,50,10,81,81,90,63,90,94,24,9,84,92,98,58,77,76,67,35,45,76,1,91,67,43,52,16,20,18,59,45,37,18,35,27,42,91,99,14,72,0,27,5,18 - 95

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

grape

const capitalizeString = str => str.toUpperCase();

const squareRoot = num => Math.sqrt(num);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
true - false
const squareRoot = num => Math.sqrt(num);
kiwi

const sum = (a, b) => a + b;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

