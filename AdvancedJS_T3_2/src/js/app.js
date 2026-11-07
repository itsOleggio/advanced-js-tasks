import { getColorByHealth, getRandomHealth } from './hero.js';

const Hero1 = { name: 'Маг', health: getRandomHealth() }

const healthBar = document.getElementById('healthBar');
const logs = document.getElementById('logs');

healthBar.style.width = Hero1.health + '%';
healthBar.textContent = Hero1.health;

logs.textContent = "Health is: " + getColorByHealth(Hero1);

switch (getColorByHealth(Hero1)) {
    case "healthy":
        healthBar.style.backgroundColor = 'green';
        break;
    case "wounded":
        healthBar.style.backgroundColor = 'yellow';
        break;
    case "critical":
        healthBar.style.backgroundColor = 'red';
        break;
}