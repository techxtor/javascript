const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);

const getFruits = async (name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    }
    await require('timers/promises').setTimeout(1000)
    return fruits[name];
}

const badSmoothie = async () => {
    try {
        const a = getFruits('pineapple');
        const b = getFruits('strawberry');
        const smoothie = await Promise.all([a, b]);
        throw `broken!`;
    } catch (err) {
        console.log(err);
        return '😁 we are going to be fine...'
        // throw `💩 It's broken!`
    }
}

badSmoothie()
    .then(val => console.log({ val }))
    .catch(err => console.log({ err })) // catches throw


// Output: - when return
// broken!
// { val: '😁 we are going to be fine...' }

// Output: - when throw
// broken!
// { err: "💩 It's broken!" }