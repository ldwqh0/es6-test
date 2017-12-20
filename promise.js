// $.ajax().then(function (response) {
//   $.ajax(response).then(function (resp) {
//     $.ajax().then(function (resp) {
//
//     })
//   })
// })

// 怎么构建一个promise
let getSum = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + a)
    }, 500)
  })
}

// console.log(getSum(2))
console.log('start')

// Promise.then方法里面可以返回结果，返回结果可以在下级then里面处理
// 也可以返回promise，如果返回promise ，promsie resolve的结果会作为下一个then的参数

//怎么处理promise
getSum(2).then(result => {
  return getSum(result)
}).then(result => {
  return getSum(result)
}).then(result => {
  return getSum(result)
}).then(result => {
  return getSum(result)
}).then(result => {
  return getSum(result)
}).then(result => {
  return getSum(result)
}).then(function (result) {
  return result
}).then(function (result) {
  console.log(result)
})

// 怎么并发Promise
// Promise.all 让几个promise同时执行，等待所有的promise处理完成之后，调用then的回调
Promise.all([getSum(1), getSum(2), getSum(3)]).then(([r1, r2, r3]) => {
  console.log(r1 * r2 * r3)
})

