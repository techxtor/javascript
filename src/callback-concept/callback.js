const watchTutorialCallback = (callback, errorCallback) => {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: '😭'
        });
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watcing Cat Meme',
            message: '💻 < 🐱'
        });
    } else {
        callback('👍 and 💻');
    }
}

const userLeft = false;
const userWatchingCatMeme = false;

watchTutorialCallback(
    message => console.log('Success: ' + message),
    error => console.log(error.name + ' ' + error.message)
);

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