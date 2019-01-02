function greet(firstname, lastname, language="en"){

    if(language === "en"){
      console.log("Hello");
    }

    if(language === "es"){
      console.log("Hola");
    }
}
function greetEnglish(firstname, lastname){
  greet(firstname, lastname, "en");
}
function greetSpanish(firstname, lastname){
  greet(firstname, lastname, "es");
}
//greet("Kaiser", "Alam", "es");
greetEnglish("Kaiser", "Alam");
greetSpanish("Kaiser", "Alam");
