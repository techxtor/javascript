const fetch = require('node-fetch');

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise
    .then(res => res.json()) // mapping to json is also promise
    .then(user => console.log('😜', user.title))
    // .then(_ => { throw new Error('uh oh') })
    .then(_ => console.log('🐱‍💻'))
    .catch(err => console.error('😭', err));

console.log('🧀 Synchronous');

// Output: - when error is commented
// 🧀 Synchronous
// 😜 delectus aut autem
// 🐱‍💻

// Output: - when error is uncommented
// 🧀 Synchronous
// 😜 delectus aut autem
// 😭 Error: uh oh



