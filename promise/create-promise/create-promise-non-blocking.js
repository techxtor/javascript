const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);

const codeBlocer = () => {
    return Promise.resolve().then(v => {
        let i = 0;
        while (i < 1000000000) { i++; }
        return '🐷 billion loops done';
    })
}

log('🧀 Synchronous 1');
codeBlocer().then(log)
log('🧀 Synchronous 2');

// Output:
// 🧀 Synchronous 1
//  Elapsed: 0
// 🧀 Synchronous 2
//  Elapsed: 7
// 🐷 billion loops done
//  Elapsed: 689