const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded');
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

// wait for all to complete
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message => console.log(message))

// does not wait for all
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message => console.log(message))