module.exports = function reverse(n) {
  if (n == null || n == "") {
    return 0;
  }
  if (n < 0) {
    n *= -1;
  }
  let str = String(n);
  console.log(typeof str);
  let arr1 = str.split("");
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr2.unshift(arr1[i]);
  }
  str = arr2.join('');
  return Number(str);
}

// console.log(reverse(234543));