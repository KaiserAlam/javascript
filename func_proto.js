function Person(firstname, lastname, eyecolor){
  this.firstname = firstname;
  this.lastname = lastname;
  this.eyecolor = eyecolor;
}

Person.prototype.nationality = "Bangladesh";
Person.prototype.getFullName = function(){
  return this.firstname + ' ' + this.lastname;
}

let Alam = new Person("Kaiser", "Alam", "Black");

console.log(Alam.nationality);
console.log(Alam.getFullName());