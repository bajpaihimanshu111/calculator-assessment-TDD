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
    expect (calculator.subtract(1,21)).toBe(20)
})