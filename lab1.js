let person = new Object();

person["firstname"] = "Kaiser";
person["lastname"] = "Alam";
person["fullname"] = person["firstname"] + " " + person["lastname"];

let fullName = "fullname";

console.log(person[fullName]);

console.log(person.firstname);

person.address = [];

person.address.street = "200 Main Street";
person.address.city = "New York";

console.log(person.address.city);

let animal = {};

