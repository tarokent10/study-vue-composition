import { default as Hello } from '@/helper/jest/sample';

test('sample test name', () => {
  const greeting = new Hello();
  expect(greeting.sayHello()).toBe('hello world!');
});
