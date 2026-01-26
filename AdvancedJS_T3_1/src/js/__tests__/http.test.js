import { httpGet, httpPost } from '../http';

test('httpGet should throw error with URL', () => {
  expect(() => httpGet('http://server:8080/users')).toThrow('http://server:8080/users');
});

test('httpPost should throw error with URL', () => {
  expect(() => httpPost('http://server:8080/users')).toThrow('http://server:8080/users');
});