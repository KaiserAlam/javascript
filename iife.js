let firstname = "Kaiser";

// console.log((function(name){
//   let greeting = "Hello";
//   return greeting + " " + name;
// }(firstname)));

let greet = (function(name){
  let greeting = "Hello";
  return greeting + " " + name;
}(firstname));

console.log(typeof greet);
console.log(greet);