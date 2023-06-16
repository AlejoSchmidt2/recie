function superDigit(n, k) {
  // Write your code here
  if (n.length === 1) {
    return Number.parseInt(n) ;
  } else {
    let aux = 0;
    let arr = n;
    arr = arr.split("");
    arr.forEach((number) => {
      aux += Number.parseInt(number);
    });
    aux *= k;
    return superDigit(aux.toString(), 1);
  }
}
console.log(superDigit("123", 3));
