/* Regarding the Object-String challenges:
-task nr 8: write a class
-task nr 9:  A function that returns all prototype methods on the passed in JAVASCRIPT object, like ARRAY,STRING etc...
-task nr10: A function that returns all properties of any object that is passed i */


/* 1. Write a JavaScript function to truncate a string to a certain number of words. */

const truncate = (string, num) => {

  const stringToArray = string.split(' '); //convert string to array of words

  const shortenedArray = stringToArray.slice(0, num); //get the array to specified length

  const outputString = shortenedArray.join(' ') + "..."; //converting array back to a string

  //adding a conditional, as we can just output the original string if it's short enough
  if (stringToArray.length <= num) {
    return string;
  }; 
  return outputString;
}

console.log(truncate("The quick brown fox jumps over the lazy dog", 4));

/* 2. Write a JavaScript function to alphabetize a given string. */

const alphabetize = (string) => {

  let arrayOfLetters = string.toLowerCase().split(''); //turning the string into array so we can use sort method
  arrayOfLetters.sort();
  const output = arrayOfLetters.join(''); //converting sorted array back into string

  return output;
};

console.log(alphabetize("United States"));

/* 3. Write a JavaScript function to convert ASCII to Hexadecimal format.
 */

const ascii_to_hexa = (inputString) => {
  /* we can use the 'toString()' method here. 
  we often invoke this method as is, which in fact is equivalent to writing 'toString(10)' - 10 being the default so called "radix parameter"; changing that parameter we can convert a number to a string representation of the number in a different numeral system (such as binary, or here: hexadecimal) 
  
  to get the desired output we have to treat each character of the inputString separately, getting its ASCII value and converting that to hexadecimal
  */

  let hexaOutput = '';

  // I want to use forEach() method to iterate over the individual characters:

  inputString.split('').forEach((char) => {
    const ascii = char.charCodeAt(0);
    const hexa = ascii.toString(16);
    hexaOutput += hexa;
  });

  return hexaOutput;
}

console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030

/* 4. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
 */

const humanize = (number) => {

// there's a few irregular cases that we need to sort out first, using a conditional
if (number === 11 || number === 12 || number === 13) {
  return number + 'th';
}

const lastNumber = number % 10;

if (lastNumber === 1) {
  return number + 'st';
} else if (lastNumber === 2) {
  return number + 'nd';
} else if (lastNumber === 3) {
  return number + 'rd';
} return number + 'th'
};

console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"


/* 5. Write a JavaScript function to get the successor of a string. */

const successor = (str) => {

  let output = ''; 

  // looping over each character of the string passed as argument
  for (let i = 0; i < str.length; i++) {

    // getting the unicode representation of each character
    const charCode = str.charCodeAt(i);
    let next;

    // we use the .test() method to check whether the character at [i] matches a regular expression pattern, like in the first instance /[0-8]/
    // that way we can determine how to "increment" the character so we will get the desired output at the end of the function

    if (/[0-8]/.test(str[i])) {
      next = String.fromCharCode(charCode + 1);
    } else if (str[i] === '9') {
      next = '0'
    } else if (/[a-y]/.test(str[i])) {
      next = String.fromCharCode(charCode + 1);
    } else if (str[i] === 'z') {
      next = 'a';
    } else if (/[A-Y]/.test(str[i])) {
      next = String.fromCharCode(charCode + 1);
    } else if (str[i] === 'Z') {
      next = 'A';
    } else {
      next = str[i];
    }

    output += next;
  }

  return output;
};

console.log(successor("abcd"));
console.log(successor("THX1138"));
console.log(successor("< >"));
console.log(successor("1999zzz")); 
console.log(successor("ZZZ9999")); 

/* 6. Write a JavaScript function to sort the following array of objects by title value. */

// we can use the sort() method, assuming that we want to sort the array "in place", i.e. change the given array (instead of working on a clone)

const sortByProperty = (array, property) => {

  let sortedArray = array.slice();

  return sortedArray.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
};

let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

// testing the function I wrote above:
const sortedLibrary = sortByProperty(library, "title");
console.log(sortedLibrary);


/* 7. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. */

const numStringRange = (first, last, gap) => {
  const array = [];

  // I understand the task in a way that "first" and "last" arguments could be either a single letter or a number; so first of all I need to check which of those options was passed to the function, to ensure the expected output gets returned 

  if (typeof first === 'number' && typeof last === 'number') {
    let currentNum = first;
    while (currentNum <= last) {
      array.push(currentNum);
      currentNum += gap;
    }
  } else if (typeof first === 'string' && typeof last === 'string') {
    const firstChar = first.charCodeAt(0);
    const lastChar = last.charCodeAt(0);
    let currentChar = firstChar;
    while (currentChar <= lastChar) {
      array.push(String.fromCharCode(currentChar));
      currentChar += gap;
    }
  } else {
    return 'Invalid arguments passed to function numStringRange. Please provide either two single letter strings or two numbers as the first two arguments. The last argument is always a number.'
  }

  return array;
};


console.log(numStringRange("a", "z", 2));


/* 8. Write a JavaScript program to create a Clock.
   `Note`: The output will come every second. */


// Code is working in codepen, but nothing gets logged to my console in VS Code 🤔

class my_Clock {
  run() {
    console.log('Starting the clock:')
    setInterval(() => {
      console.log(new Date().toLocaleTimeString("en-GB", {hour12: false}));
    }, 1000);
    console.log('Clock is running');
  }
};

let clock = new my_Clock();
clock.run();
// "14:37:42";
// "14:37:43";
// "14:37:44";
// "14:37:45";
// "14:37:46";
// "14:37:47";



/* 9. Write a JavaScript function to print all the methods in a built-in JavaScript object.
 */

const allMethods = (jsObj) => {

  const methods = [];

  const properties = Object.getOwnPropertyNames(jsObj);

  for (let property of properties) {
    if (typeof jsObj[property] === 'function') {
      methods.push(property);
    }
  };

  return methods;
};

console.log(allMethods(Array.prototype));
console.log(allMethods(Math.prototype));



/* 10. Write a JavaScript function to print all the properties in an JavaScript object. */

const allProperties = (object) => {

  const properties = [];


};



//console.log(allProperties(library));