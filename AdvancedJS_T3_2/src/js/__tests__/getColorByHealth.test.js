import {getColorByHealth, getRandomHealth} from '../hero.js';

test('getColorByHealth', () => {
    expect(getColorByHealth({health: 100})).toBe('healthy');
    expect(getColorByHealth({health: 50})).toBe('wounded');
    expect(getColorByHealth({health: 15})).toBe('critical');
});

test('getRandomHealth', () => {
    for (let i = 0; i < 100; i++) {
        const health = getRandomHealth();
        expect(health).toBeGreaterThanOrEqual(0);
        expect(health).toBeLessThanOrEqual(100);
    }
});
