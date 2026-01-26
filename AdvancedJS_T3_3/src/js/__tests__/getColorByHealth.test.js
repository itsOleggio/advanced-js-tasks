import { sortHeroesByHealth,  getColorByHealth} from '../hero.js';

test('should sort heroes by health descending', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const result = sortHeroesByHealth(heroes);

  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('getColorByHealth', () => {
  expect(getColorByHealth({ health: 100 })).toBe('healthy');
  expect(getColorByHealth({ health: 50 })).toBe('wounded');
  expect(getColorByHealth({ health: 15 })).toBe('critical');
});
