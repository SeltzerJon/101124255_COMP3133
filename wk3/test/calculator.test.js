const assert = require('assert');
const calculator = require('../app/calculator'); 
try {
  assert.strictEqual(calculator.add(5, 2), 7); 
  console.log('add(5, 2) PASS');
} catch (error) {
  console.error('add(5, 2) FAIL');
}

try {
  assert.strictEqual(calculator.add(5, 2), 8); 
  console.log('add(5, 2) PASS');
} catch (error) {
  console.error('add(5, 2) FAIL');
}


try {
  assert.strictEqual(calculator.sub(5, 2), 3); 
  console.log('sub(5, 2) PASS');
} catch (error) {
  console.error('sub(5, 2) FAIL');
}

try {
  assert.strictEqual(calculator.sub(5, 2), 5); 
  console.log('sub(5, 2) PASS');
} catch (error) {
  console.error('sub(5, 2) FAIL');
}

try {
  assert.strictEqual(calculator.mul(5, 2), 10); 
  console.log('mul(5, 2) PASS');
} catch (error) {
  console.error('mul(5, 2) FAIL');
}

try {
  assert.strictEqual(calculator.mul(5, 2), 12); 
  console.log('mul(5, 2) PASS');
} catch (error) {
  console.error('mul(5, 2) FAIL');
}

try {
  assert.strictEqual(calculator.div(10, 2), 5); 
  console.log('div(10, 2) PASS');
} catch (error) {
  console.error('div(10, 2) FAIL');
}

try {
  assert.strictEqual(calculator.div(10, 2), 2); 
  console.log('div(10, 2) PASS');
} catch (error) {
  console.error('div(10, 2) FAIL');
}
