const assert = require('assert')

// escreva sum abaixo
let tot = 0;
const sum = (...numbers) => numbers.reduce((acc, val) => acc + val, 0);


assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)