function test (a, b) {
  return a + b
}

let test2 = (a, b) => {a + b}

let test3 = ({a}) => a * a

console.log(test(1, 2))
console.log(test2(3, 4))
console.log(test3({a: 3}))

// $.ajax().then(response => {
//
// })