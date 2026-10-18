function gcd(a, b) {
  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}


// let test = gcd(12, 18);

// let test = gcd(7, 13);

console.log(test)