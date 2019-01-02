let arr = [
  1,
  true,
  { name: "Kaiser", address: "200 Main Street"},
  function(name){
    let greet = "Hello ";
    console.log(greet + name);
  },
  "Hello WOrld"
];

console.log(arr);
arr[3](arr[2].name);