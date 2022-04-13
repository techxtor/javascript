// async functions returns Promise object
const getFruits = async (name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    }
    return fruits[name];
}

getFruits('peach').then(console.log);
//Output:
//🍑

// async keyword when used, takes the return value and automatically resolves it as Promise
// ie return fruits[name] is equivalent to return Promise.resolve(fruits[name]) 