const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);

const codeBlocer = () => {
    let i = 0;
    while (i < 1000000000) { i++; }
    return '🐷 billion loops done';
}

log('🧀 Synchronous 1');
log(codeBlocer());
log('🧀 Synchronous 2');

// Output:
// 🧀 Synchronous 1
//  Elapsed: 0
// 🐷 billion loops done
//  Elapsed: 696
// 🧀 Synchronous 2
//  Elapsed: 697   