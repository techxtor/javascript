// Promise is made and is either resolved or rejected
let p = new Promise((resolve, reject) => {
    let a = 1 + 3;
    if (a == 2) {
        resolve('Success')
    }
    else {
        reject('Failed')
    }
})

// anything inside then is going to run for resolve and inside catch is going to run for reject
p.then((message) => {
    console.log('This is in then 🎉', message);
}).catch((message) => {
    console.log('This is in Catch 😢', message)
})