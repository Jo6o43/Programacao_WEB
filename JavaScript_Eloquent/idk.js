
function potência(base, expoente) {
  if (expoente == 0) {
    return 1; 
  } else {
    console.log(base, expoente);
    return base * potência(base, expoente - 1); 
  }
}

console.log(potência(2, 3)); 
//output -> 8

