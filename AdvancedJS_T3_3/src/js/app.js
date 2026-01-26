import { sortHeroesByHealth } from './hero.js';

const Heros = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
]

const sortedHeros = sortHeroesByHealth(Heros);

for (const hero of sortedHeros) {
    console.log(`${hero.name}: ${hero.health}`);
}

