
function wrapValue(n) {
  let local = n;
  return () => local;
}
  
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
  
console.log(wrap1()); 
//Output -> 1
console.log(wrap2()); 
//Output -> 2


function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5)); 
//Output -> 10

let three = multiplier(3);
console.log(three(5));
//Output -> 15


