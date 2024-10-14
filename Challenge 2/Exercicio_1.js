function createPlayer(name, health, strength) {
    let inventory = [];
    return {
        name: name,
        health: health,
        strength: strength,
        attack: function (target, damage) {
            console.log(" >> " + name + " attack " + target.name + " with " + damage + " damage.");
            TakeDamage(target, damage);
        }

    }
}

function createEnemy(name, health, strength) {
    return {
        name: name,
        health: health,
        strength: strength,
        attack: function (target, damage) {
            console.log(" >> " + name + " attack " + target.name + " with " + damage + " damage.");
            TakeDamage(target, damage);
        },
        dropLoot: function () {
            let loots = ["Coin", "Potion"];
            let type = loots[Math.floor(Math.random() * loots.length)];
            let amount = Math.floor(Math.random() * 50);
            
            equal_line();

            return {
                type: type,
                amount: amount
            }
        }
    }
}

function TakeDamage(target, damage) {
    equal_line();
    target.health -= damage;
    console.log(" >> " + target.name + " has been attacked.");
    console.log(" >> Damage: " + damage);
    console.log(" >> " + target.name + " health: " + target.health);
    if (target.health <= 0) {
        console.log(" >> " + target.name + " died.");
        if (typeof target.dropLoot === 'function') { //check if target has dropLoot method
            const loot = target.dropLoot();
            console.log(" >> " + target.name + " dropped " + loot.amount + " " + loot.type+".");
        }
    }
    equal_line();
}

function addItem(player,item_name, item_amount) {
    

}

function equal_line() {
    console.log("=====================================================");
}

//Creating Players
const player_mario = createPlayer("Mario", 100, 30);
const player_luigi = createPlayer("Luigi", 100, 25);

//Creating Enemies
const enemy_idiot = createEnemy("Goomba", 50, 10);


//Attacking
equal_line();
player_mario.attack(player_luigi, 30);
player_mario.attack(player_luigi, 60);

enemy_idiot.attack(player_mario, 100);

player_luigi.attack(enemy_idiot, 50);

addItem(player_mario, "Coin", 10);



