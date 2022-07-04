const isStrongNumber = require('./isStrongNumber.js');

test('Check function without any parameters', () => {
  expect(isStrongNumber()).toBe("Not Strong !!");
});
test('Check function with invalid parameters', () => {
  expect(isStrongNumber("abc")).toBe("Not Strong !!");
});
test('Test isStrongNumber 1', () => {
  expect(isStrongNumber(1)).toBe("STRONG!!!!");
});
test('Test isStrongNumber 123', () => {
  expect(isStrongNumber(123)).toBe("Not Strong !!");
});
test('Test isStrongNumber 2', () => {
  expect(isStrongNumber(2)).toBe("STRONG!!!!");
});
test('Test isStrongNumber 150', () => {
  expect(isStrongNumber(150)).toBe("Not Strong !!");
});
test('Test isStrongNumber 145', () => {
  expect(isStrongNumber(145)).toBe("STRONG!!!!");
});
test('Test isStrongNumber -1', () => {
  expect(isStrongNumber(-1)).toBe("Not Strong !!");
});
test('Test isStrongNumber -2', () => {
  expect(isStrongNumber(-2)).toBe("Not Strong !!");
});
test('Test isStrongNumber -145', () => {
  expect(isStrongNumber(-145)).toBe("Not Strong !!");
});