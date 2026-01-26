import { loadUser, saveUser } from '../user';
import * as http from '../http';

jest.mock('../http', () => {
  const actual = jest.requireActual('../http');

  return {
    ...actual,
    httpGet: jest.fn(),
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

test('should call loadUser once', () => {
  http.httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);

  expect(response).toEqual({});
  expect(http.httpGet).toHaveBeenCalledWith(
    'http://server:8080/users/1'
  );
});

test('saveUser should throw "Unimplemented" error', () => {
  const user = { name: 'Oleg' };

  expect(() => saveUser(user)).toThrow('Unimplemented');
});

