
function createPlayer(name, health, strength) {
    return {
        name: name,
        health: health,
        strength: strength,
        attack: function (player,damage) {
            console.log(" >> " + name + " attack with " + damage + " damage.");
            TakeDamage(player, damage);
        }
    }
}

function TakeDamage(player, damage) {~
    console.log("=====================================");
    player.health -= damage;
    console.log(" >> " + player.name + " has been attacked.");
    console.log(" >> Damage: " + damage);
    console.log(" >> " + player.name + " health: " + player.health);
    if (player.health <= 0) {
        console.log(" >> " + player.name + " died.");
    }
    console.log("=====================================");
}

const mario = createPlayer("Mario", 100, 30);
const luigi = createPlayer("Luigi", 100, 25);

console.log("=====================================");
mario.attack(luigi,30);
mario.attack(luigi,70);

