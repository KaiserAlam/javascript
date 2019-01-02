let person = function(firstname, lastname){

  this.firstname = firstname;
  this.lastname = lastname;

  this.fullname = function(){
    return this.firstname + ' ' + this.lastname;
  }

  this.currenttime = function(){
    return new Date().getTime();
  }
}

module.exports = person;