export function getColorByHealth(hero){
    if(hero.health > 51){
        return 'healthy';
    } else if (hero.health <= 50 && hero.health > 15){
        return 'wounded';
    } else {
        return 'critical';
    }
}

export function sortHeroesByHealth(heroes){
    return heroes.sort((a, b) => b.health - a.health);
}