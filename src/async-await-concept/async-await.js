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

// await pauses the execution of function until getFruits Promise resolves and then moves to nect line of exection
const makeSmoothie = async () => {
    const a = await getFruits('pineapple');
    const b = await getFruits('peach');
    const c = await getFruits('strawberry');
    return [a, b, c];
}
makeSmoothie().then(log);
// Output:
// 🍍,🍑,🍓      
//  Elapsed: 3067


// we need to use await one after the onther only when the return of that has dependency upcoming execution
// here use Promise.all() as the values are independent
const makeSmoothieResolveAll = async () => {
    const a = getFruits('pineapple');
    const b = getFruits('peach');
    const c = getFruits('strawberry');
    const smoothie = await Promise.all([a, b, c]);
    return smoothie;
}
makeSmoothieResolveAll().then(log);
// Output:
// 🍍,🍑,🍓
//  Elapsed: 1012



