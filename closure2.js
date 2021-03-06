function buildFunctions(){

  let arr = [];

  // if you use let i=0 instead of var i=0, you get 1, 2, 3
  for(var i=0; i<3; i++){
    arr.push(function(){
          console.log(i);
        });
  }

  return arr;
}

let fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2(){

  let arr = [];

  for(var i=0; i<3; i++){
    arr.push(
      (function(j){
        return function(){
          console.log(j);
        }
      }(i))
    );
  }

  return arr;
}

let fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
