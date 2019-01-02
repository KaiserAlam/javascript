function makeGreeting(language){

  return function(firstname, lastname){
    if(language === 'en'){
      console.log('Hello ' + firstname + ' ' + lastname);
    }
    if(language === 'es'){
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  }
}

let greetEnglish = makeGreeting('en');
let greetSpanish = makeGreeting('es'); 

greetEnglish('Kaiser', 'Alam');
greetSpanish('Kaiser', 'Alam');