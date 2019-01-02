var num = 1;

var foo = function(){

  while(num <= 10){
    if(num % 2 === 0){
      console.log("Even Number = " + num);
    };//end of if
    num++;
   };//end while

};//end of function

foo();