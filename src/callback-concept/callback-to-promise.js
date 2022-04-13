const userLeft = false;
const userWatchingCatMeme = false;

const watchTutorialPromise = () => {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: '😭'
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watcing Cat Meme',
                message: '💻 < 🐱'
            })
        } else {
            resolve('👍 and 💻')
        }
    })
}

watchTutorialPromise()
    .then(message => console.log('Success: ' + message))
    .catch(error => console.log(error.name + ' ' + error.message));

// Input:
// const userLeft = false;
// const userWatchingCatMeme = true;
// Output:
// User Watcing Cat Meme 💻 < 🐱

// Input:
// const userLeft = true;
// const userWatchingCatMeme = false;
// Output:
// User Left 😭

// Input:
// const userLeft = false;
// const userWatchingCatMeme = false;
// Output:
// Success: 👍 and 💻