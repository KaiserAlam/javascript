let person = {

  firstname: "Kaiser",
  lastname: "Alam",
  getFullName: function(){
    let fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
}

let logName = function(lang1, lang2){
  console.log("Logged: " + this.getFullName());
  console.log("Firstname: " + this.firstname + " " + lang1);
  console.log(arguments);
}

let logPersonName = logName.bind(person);
logPersonName();

(function(){
  console.log(this.getFullName());
}).bind(person)();

console.log("==============================");
logName.call(person, "en");
console.log("==============================");
logName.call(person, "en", "es");

// ========= apply() ==========================
console.log("===========apply()==============");
//logName.apply(person, ["en"]);
let arr = ["bn", "ar"];
logName.apply(person, arr);
logName.apply(person, ["es", "es"]);
logName.apply(person, []);

console.log("===========bind() carrying==============");
// function currying
function multiply(a, b){
  return a * b;
}
let mulTwo = multiply.bind(this, 2);
console.log(mulTwo(6));
