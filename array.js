// ARRAYS

// SPLIT() - METHOD

var sent = "this is a sample";
// console.log(sent.split(' '))

// var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
// putstr("Enter a name to search for: ");
// var name = readline();
// var position = names.indexOf(name);
// if (position >= 0) {
//  print("Found " + name + " at position " + position);
// }
// else {
//  print(name + " not found in array.");
// }
// ACCESSOR FUNCTION =================================================

//  =>  INDEXOF & LASTINDEXOF

// STRING REPRESENTATION
var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var age = ["10"];
// var namestr = names.join();
// console.log(namestr);
// namestr = names.toString();
// console.log(namestr);
// console.log(names.concat(age))
// console.log(names.splice(1,3))

// mutators ==================================================

// PUSH => ADD TO END OF THE ARRAY
// UNSHIFT => ADD ELEMENT TO BEGINNING OF AN ARRAY

// REMOVING ELEMENTS FROM ARRAY

// POP => REMOVE ELEMENT FROM END OF THE ARRAY
//  SHIFT => REMOVE ELEMENT FROM BEGINNING OF THE ARRAY

// USING SPLICE

// To add elements to an array using splice(), you have to provide the following arguments:
// • The starting index (where you want to begin adding elements)
// • The number of elements to remove (0 when you are adding elements)
// • The elements you want to add to the array
// Let’s look at a simple example. The following program adds elements to the middle of
// an array:
// var nums = [1,2,3,7,8,9];
// var newElements = [4,5,6];
// nums.splice(3,0,newElements);
// print(nums);

// REVERSE => REVERSES ORDER OF THE ARRAY
//  SORT => SORT DATA LEXICOGRAPHICALLY

// console.log(nums.sort())

// ==============================================ITERATOR FUNCTIONS

// FOR EACH
// EVERY => return true if function can return true for every element in array .
// SOME => RETURN TRUE IF ATLEASE ONE OF THEM SATISFY CONDITION
// REDUCE =>

//     The reduce() function applies a function to an accumulator and the successive elements
// of an array until the end of the array is reached, yielding a single value. Here is an example
// of using reduce() to compute the sum of the elements of an array:
// function add(runningTotal, currentValue) {
//    return runningTotal + currentValue;
// }
// var nums = [1,2,3,4,5,6,7,8,9,10];
// var sum = nums.reduce(add);
// print(sum); // displays 55

// The reduce() function, in conjunction with the add() function, works from left to right,
// computing a running sum of the array elements, like this:
// add(1,2) -> 3
// add(3,3) -> 6
// add(6,4) -> 10
// add(10,5) -> 15
// add(15,6) -> 21
// add(21,7) -> 28
// add(28,8) -> 36
// add(36,9) -> 45
// add(45,10) -> 55

// REDUCERIGHT => WORKING FROM RIGHTHAND SIDE TO LEFT

// ITERATORS RETURNING NEW ARRAY ()

// Map() => return new array unlike forEach

// Filter() => return new array unlike every() instead of returning boolean it returns whatever is passing the condition.
// ========== DAY 2 ENDS PAGE 33

// PROBLEM

// CONTAINS DUPLICATE

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     // var op;
//     // for(let i=0;i<=nums.length;i++){
//     // let val = nums[i]
//     //  for(var j=i+1;j<=nums.length;j++){
//     //     if(val === nums[j]){
//     //         op= true
//     //         return op
//     //     }
//     //     else{
//     //         op= false
//     //     }
//     //  }
//     // }

//     // return Boolean(op)
//     console.log(nums.length ,new Set(nums).size )
//     return nums.length !== new Set(nums).size
// };

var containsDuplicate = function (nums) {
  // We'll use an object (acting as a hash map/dictionary) to keep track of seen numbers.
  const seen = {}; // You could also use 'new Map();' for more complex keys

  // Iterate through the array once
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // If the current number 'num' is already a key in our 'seen' object,
    // it means we've encountered this number before, so it's a duplicate.
    if (seen[num]) {
      return true; // Found a duplicate, no need to check further
    }

    // If the number hasn't been seen before, add it to our 'seen' object
    // to mark that we've now encountered it. The value (true) doesn't matter,
    // only the presence of the key.
    seen[num] = true;
    console.log(seen);
  }

  // If the loop finishes without returning true, it means no duplicates were found.
  return false;
};

// console.log(containsDuplicate([1,2,1,4]))

// ANAGRAM
// ========================================================================================

var txt = "rat";
var tc = "cat";

function returnHash(txt) {
  var values = txt.split("");
  let hash1 = {};
  for (var i = 0; i < values.length; i++) {
    if (hash1[values[i]] !== undefined) {
      hash1[values[i]] += 1;
    } else {
      hash1[values[i]] = 1;
    }
  }
  return hash1;
}

function validAnagrams(s, t) {
  let initHash = returnHash(s);
  var secHash = returnHash(t);
  // console.log(initHash, secHash);
  if (Object.keys(initHash).length !== Object.keys(secHash).length) {
    return false;
  }
  let keys = Object.keys(initHash);
  var result = [];
  for (var i = 0; i <= Object.keys(initHash).length - 1; i++) {
    if (initHash[keys[i]] === secHash[keys[i]]) {
      // console.log(initHash[keys[i]], secHash[keys[i]]);
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result.every(function (val) {
    return val === true;
  });
}

// function groupAnagrams(strs) {
//   var response = {};

//   for (var i = 0; i < strs.length; i++) {
//     response[i] = [];
//     for (var j = 0; j < strs.length; j++) {
//       if (i == j) {
//         continue;
//       } else {
//         console.log(
//           validAnagrams(strs[i], strs[j]),
//           "--------",
//           strs[i],
//           strs[j]
//         );
//         if (validAnagrams(strs[i], strs[j])) {
//           response[i].push(strs[i]);
//           response[i].push(strs[j]);
//         }
//       }
//     }
//     response[i] = [...new Set(response[i])];
//   }

//   const seen = new Set();
//   const result = {};

//   let index = 0;

//   for (const key in response) {
//     const arr = response[key];
//     if (arr.length === 0) continue;
//     const signature = [...arr].sort().join(",");

//     if (!seen.has(signature)) {
//       seen.add(signature);
//       result[index++] = arr;
//     }
//   }

//   return result;
// }
function groupAnagrams(strs) {
  const map = {};

  for (let word of strs) {
    const key = word.split("").sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }

  return Object.values(map);
}

// console.log(groupAnagrams(["eat", "tan", "tea", "ate", "nat", "bat"]));

// console.log(validAnagrams(txt,tc))

// ========================================================================================
// TWO SUM

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// TWO SUM
// ========================================================================================

function twoSum(nums, target) {
  var result = [];

  for (i = 0; i < nums.length; i++) {
    var init = nums[i];
    for (j = i; j < nums.length; j++) {
      if (init + nums[j] === target) {
        if (i !== j) {
          result.push(i, j);
        }
      }
    }
  }
  return result;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map(); // Create a new Map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement needed

    // Check if the complement exists in our map
    if (numMap.has(complement)) {
      // If it exists, we've found our pair!
      return [numMap.get(complement), i];
    }

    // If the complement doesn't exist, add the current number and its index to the map
    numMap.set(nums[i], i);
  }

  // If no two numbers sum up to the target, you might want to handle this case
  // (e.g., return an empty array or throw an error, depending on requirements)
  return [];
};

// ====================================================================================
// Top K Frequent Elements

function kelement(nums, k) {
  var hash = {};
  nums = nums.sort();
  for (i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]] += 1;
    }
  }
  const entries = Object.entries(hash);
  entries.sort((a, b) => b[1] - a[1]);
  console.log(entries, "----");

  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(Number(entries[i][0]));
  }
  return result;
}

var topKFrequent = function (nums, k) {
  let fs = new Map();
  for (let n of nums) {
    let f = (fs.get(n) || 0) + 1;
    fs.set(n, f);
  }
  console.log(fs.entries());
  let buckets = [];
  for (let [n, f] of fs.entries()) {
    buckets[f] = buckets[f] || [];
    buckets[f].push(n);
  }
  console.log(buckets);
  let res = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    if (res.length >= k) return res;

    if (buckets[i] && buckets.length) {
      res = res.concat(buckets[i]);
    }
  }

  return res;
};

// console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));

// var productExceptSelf = function(nums) {
//     let result = []
//     for(var i=0;i<nums.length;i++){
//       result[i] = 1
//       for(var j=0;j<nums.length;j++){
//         if(i==j){
//           continue
//         }
//         else{
//           result[i]*=nums[j]
//         }
//       }

//     }
//     return result
// };

var productExceptSelf = function(nums) {
    let n = nums.length;
    let result = Array(n).fill(1);
    
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];

        console.log(i , result[i] , prefix , "--------PREFIX")
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
        console.log(i , result[i] , suffix , "--------suffix")

    }

    return result;
};

console.log(productExceptSelf([1,2,3,4]))
