import { getLevel } from '../app';
import fetchData from '../utils';

jest.mock('../utils');

fetchData === jest.fn()

test('should return level if status is ok', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 42,
  });

  const result = getLevel(1);

  expect(result).toBe('Ваш текущий уровень: 42');
});

test('should return unavailable message if status is not ok', () => {
  fetchData.mockReturnValue({
    status: 'error',
  });

  const result = getLevel(1);

  expect(result).toBe('Информация об уровне временно недоступна');
});
