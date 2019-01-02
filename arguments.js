function greet(firstname, lastname, language, ...other){
  
  if(arguments.length === 0){
    console.log("No arguments passed");
    return;
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(other);
  // console.log(spreads);
  //console.log(arguments[0]);

}

function foo(...args){
  console.log(args.length);
  console.log(args);
  console.log(args[2].name + args[0]);
}
foo(2019, "Happy New Year", {name: "Kaiser", age: 45});

//greet();
//console.log("==============");
//greet("Kaiser");
// greet("Kaiser", "Alam", "en", "45", "Los Angeles", "Married");
// console.log("===========================");
// let foo = function(name, age){
//   console.log(name);
//   console.log(age);
// }

// foo("Alam");