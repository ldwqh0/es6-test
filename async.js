let fun1 = () => {
  console.log('fun1')
  return 'good good study,from fun1'
}

let fun2 = async () => {
  console.log('fun2')
  return 'good good study,from fun2'
}

let getSum = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + a)
    }, 500)
  })
}

// let ab = async () => {
//
//   // console.log(sum + 2)
// }

(async function () {
  let sum = await getSum(2)
  console.log(sum)
})()

// fun2().then(result => {
//   console.log(result)
// })
// fun1()


