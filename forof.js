let arr = [1, 2, 3, 4, 5, 6, 7, 88, 99]

function sum (arr) {
  let sum = 0
  for (let i in arr) {
    sum += arr[i]
  }
  return sum
}

function sum2 (arr) {
  let sum = 0
  for (let v of arr) {
    sum += v
  }
  return sum;
}

console.log(sum(arr))
console.log(sum2(arr))