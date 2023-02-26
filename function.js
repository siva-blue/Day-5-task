
// Do the below programs in anonymous function IIFE function and arrow function.
// a.Print odd numbers in an array.


// anonymous function:
var arr = [11,12,13,14,15,16];

var oddNumbers = function(arr) {
  var oddArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
};

console.log(oddNumbers(arr));

// IIFE:

var arr = [11,12,13,14,15,16];

var oddNumbers = (function(arr) {
  var oddArr = [];
  for (var  i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
})(arr);

console.log(oddNumbers);

//arrow function:

var arr = [11,12,13,14,15,16];

var oddNumbers = (arr) => {
  var oddArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
};

console.log(oddNumbers(arr));





// Do the below programs in anonymous function, arrow function & IIFE function.
//b. Convert all the strings to title caps in a string array.

//ANONYMOUS:


let strArr = ["hello ", "were are you", "level up"];

var titleCapsArr = (function(arr) {
  var titleCapsArr = [];
  for(var i = 0; i < arr.length; i++) {
    var  words = arr[i].split(" ");
    var titleCaseWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    var titleCaseStr = titleCaseWords.join(" ");
    titleCapsArr.push(titleCaseStr);
  }
  return titleCapsArr;
})(strArr);

console.log(titleCapsArr);

//IIFE:

var strArr = ["hello ", "were are you", "level up"];

var titleCapsArr = (function(arr) {
  var titleCapsArr = [];
  for(var i = 0; i < arr.length; i++) {
    var words = arr[i].split(" ");
    var titleCaseWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    var titleCaseStr = titleCaseWords.join(" ");
    titleCapsArr.push(titleCaseStr);
  }
  return titleCapsArr;
})(strArr);

console.log(titleCapsArr);


//ARROW:

let strArr = ["hello ", "were are you", "level up"];

var convertToTitleCaps = (arr) => {
  var titleCapsArr = [];
  for(var i = 0; i < arr.length; i++) {
    var words = arr[i].split(" ");
    var titleCaseWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    var titleCaseStr = titleCaseWords.join(" ");
    titleCapsArr.push(titleCaseStr);
  }
  return titleCapsArr;
}

console.log(convertToTitleCaps(strArr));



// Do the below programs in anonymous function, arrow function & IIFE function.
// c.Sum of all numbers in an array.

//anonymous:

var array = [11,45];
var sum = function(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};
console.log(sum(array));


//arrow:

var array = [11,45];
var sum = (arr) => {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};
console.log(sum(array));


//IIFE:
var array = [1, 2, 3, 4, 5];
var sum = (function(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
})(array);
console.log(sum);



// Do the below programs in anonymous function, arrow function & IIFE function.
// d.Return all the prime numbers in an array

//anonymous:
var num = function(arr) {
  return arr.filter(function(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1;
  });
};

console.log(num([11,12,13,14,15,16,17,18,19,20]));

//arrow function:

var num = arr => arr.filter(num => {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
});

console.log(num([11,12,13,14,15,16,17,18,19,20]));

//IIFE:

var num = (function(arr) {
  return arr.filter(function(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1;
  });
})([11,12,13,14,15,16,17,18,19,20]);

console.log(num);


// Do the below programs in anonymous function, arrow function & IIFE function.
// e.Return all the palindromes in an array

//ANONYMOUS:
var words = ['level', 'hello', 'cnc'];
var  palindromes = function(arr) {
  var palindromeArray = [];
  for(var i = 0; i < arr.length; i++){
    var word = arr[i];
    var reversedWord = word.split('').reverse().join('');
    if(word === reversedWord) {
      palindromeArray.push(word);
    }
  }
  return palindromeArray;
};

console.log(palindromes(words));

//arrow function:
var  words = ['level', 'hello', 'cnc'];
var palindromes = (arr) => {
  var palindromeArray = [];
  for(var i = 0; i < arr.length; i++){
    var word = arr[i];
    var reversedWord = word.split('').reverse().join('');
    if(word === reversedWord) {
      palindromeArray.push(word);
    }
  }
  return palindromeArray;
};

console.log(palindromes(words));

//IIFE:

var words = ['level', 'hello', 'cnc'];

var palindromeArray = (function(arr) {
  var palindromeArray = [];
  for(var i = 0; i < arr.length; i++){
    var word = arr[i];
    var reversedWord = word.split('').reverse().join('');
    if(word === reversedWord) {
      palindromeArray.push(word);
    }
  }
  return palindromeArray;
})(words);

console.log(palindromeArray);

// Do the below programs in anonymous function & IIFE function.
// f.Return median of two sorted arrays of the same size.

//ANONYMOUS:



// Do the below programs in anonymous function & IIFE function.
//  g.Remove duplicates from an array

//anonymous:

var arr = [1, 2, 2, 3, 4, 4, 5];

var uniqueArr = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}(arr);

console.log(uniqueArr);


//IIFE:

var arr = [1, 2, 2, 3, 4, 4, 5];

var uniqueArr = (function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
})(arr);





// Do the below programs in anonymous function & IIFE function.
// Rotate an array by k times

//anonymous:

var arr = [1, 2, 3, 4];
var k = 3;

// Using anonymous function to rotate the array
(function(arr, k) {
  for (var i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
})(arr, k);

console.log(arr);

//IIFE:

var arr = [1, 2, 3, 4];
var k = 3;

// Using IIFE function to rotate the array
((arr, k) => {
  for (var i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
})(arr, k);

console.log(arr);



