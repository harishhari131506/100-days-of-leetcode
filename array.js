// ARRAYS

// SPLIT() - METHOD

var sent = 'this is a sample';
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
var age = ["10"]
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