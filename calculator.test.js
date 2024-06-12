const Calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  const calculator = new Calculator();
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    const calculator = new Calculator();
    expect(calculator.add('1', 2)).toBe(3);
});

test('subtract 21 - 1 to equal 20', () => {
    const calculator = new Calculator();
    expect (calculator.subtract(21,1)).toBe(20)
})

test('subtract 21 - 25 to equal 4', () => {
    const calculator = new Calculator();
    expect (calculator.subtract(21,25)).toBe(4)
})

test('multiply 4 * 6 to equal 24', () => {
    const calculator = new Calculator();
    expect (calculator.multiply(4,6)).toBe(24)
})

test('divide 10 / 2 to equal 5', () => {
    const calculator = new Calculator();
    expect (calculator.divide(10,0)).toBe(5)
})