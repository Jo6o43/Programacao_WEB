//////////////////////////////////////////////////////
function createPlayer(name, health, strength) {
    return {
        name: name,
        health: health,
        strength: strength,
        attack: function (player, damage) {
            console.log(" >> " + name + " attack " + player.name + " with " + damage + " damage.");
            TakeDamage(player, damage);
        }
    }
}

function TakeDamage(player, damage) {
    equal_line();
    player.health -= damage;
    console.log(" >> " + player.name + " has been attacked.");
    console.log(" >> Damage: " + damage);
    console.log(" >> " + player.name + " health: " + player.health);
    if (player.health <= 0) {
        console.log(" >> " + player.name + " died.");
    }
    equal_line();
}

function createEnemy (enemyType,health,strength) {
  

}



function equal_line() {
    console.log("=====================================");
}

//main
const player_mario = createPlayer("Mario", 100, 30);
const player_luigi = createPlayer("Luigi", 100, 25);

equal_line();
player_mario.attack(player_luigi, 30);
player_mario.attack(player_luigi, 70);

