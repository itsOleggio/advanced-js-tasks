export function getColorByHealth(hero){
    if(hero.health > 51){
        return 'healthy';
    } else if (hero.health <= 50 && hero.health > 15){
        return 'wounded';
    } else {
        return 'critical';
    }
}

/*************  ✨ Windsurf Command ⭐  *************/
/**
/*******  922c660f-3b86-44ec-9807-43cd1d1f8d59  *******/
export function getRandomHealth(){
    return Math.round(Math.random() * 100);
}