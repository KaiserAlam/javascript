function mapForEach(arr, fn){
  let newArray = [];

  for(let i=0; i<arr.length; i++){
    newArray.push(
      fn(arr[i])
    )
  };

  return newArray;
}

let arr = [1, 2, 3];
console.log(arr);

let newArray = mapForEach(arr, function(item){
  return item * 2;
});
console.log(newArray);

let checkPastLimit = function(limiter, item){
  return item > limiter;
}

let arr1 = mapForEach(arr, checkPastLimit.bind(this, 1));
console.log(arr1);

let checkPastLimitSimplified = function(limiter){
  return function(limiter, item){
    return item > limiter;
  }.bind(this, limiter);
}

let arr2 = mapForEach(arr, checkPastLimitSimplified(2));
console.log(arr2);


let arr3 = _.filter([2,3,4,5,6,7,8,9], function(item){return item % 2 === 0});
console.log(arr3);

