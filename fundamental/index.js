/**
 * how to create a variable using let and const
 */

const firstName = 'Mst Surnaly';
const lastName = 'Akter';
let season = 'winter';

/**
 * 6 basic condition <,> === , >=,
 * &&
 */


// number to string
const num1 = 40;
const stringNum = 40 + '';

// string to number
const num2 = '40';
const stringToNum = +num2;


let isActive = true;

const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');

// user && if the left side is true then right side will be execute
isActive && showUser();

// use || is the left side is false then right side will be execute
isActive  || hideUser()

// toggle boolean (convert true to false or false to true)
isActive = !isActive;
// convert other data type to boolean data
console.log(!!'hello');
console.log(!!'');