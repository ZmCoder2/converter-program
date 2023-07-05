const miles = 24;
const kilometers = 40;
var number = 1.609344;

const kilometersToMiles = kilometers / number;
const milesToKilometers = miles * number;

console.log("Distance conversions");
console.log("-----------------------");
console.log(kilometers + " kilometers are:");

console.log(kilometersToMiles + " miles");
// Output: 24.854847689493358 miles

console.log("----")
console.log(miles + " miles are:");
console.log(milesToKilometers + " kilometers");
// Output: 
// ----
// 24 miles are:
// 38.624256 kilometers

/////////////////////////////////////////////////////////////////////////
// Temperature Converter
const celsius = 5;
const fahrenheit = 41;

const celsiusToFahrenheit = (celsius * 9 / 5) + 32;
const fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;

console.log("Temperature conversions");
console.log("-----------------------");
// Output: 
// Temperature conversions
// -----------------------

console.log(fahrenheit + " degrees Fahrenheit are:");
console.log(fahrenheitToCelsius + " degrees Celsius");
// Output:
// Temperature conversions
// -----------------------
// 41 degrees Fahrenheit are:
// 5 degrees Celsius 

console.log("----");
console.log(celsius + " degrees Celsius are:");
console.log(celsiusToFahrenheit + " degrees Fahrenheit");
// Output: 
// ----
// 5 degrees Celsius are:
// 41 degrees Fahrenheit 

