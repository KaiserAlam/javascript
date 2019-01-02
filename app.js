let c = {

  name: "The C object",

  log: function(){
    this.name = "Updated C object";
    console.log(this);
  }
}


console.log(c.name);
c.log();
console.log(c.name);