function createPlayer(name, health, strength) {
    return {
        name: name,
        health: health,
        strength: strength,
        inventory: [],
        attack: function (target, damage) {
            console.log(" >> " + name + " attack " + target.name + " with " + damage + " damage.");
            TakeDamage(target, damage, name);
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
            TakeDamage(target, damage, name);
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
    console.log("   -> Damage: " + damage);
    console.log("   -> " + target.name + " health: " + target.health);
    if (target.health <= 0) {
        console.log(" >> " + target.name + " died.");
        if (typeof target.dropLoot === 'function') { //check if target has dropLoot method
            const loot = target.dropLoot();
            console.log(" >> " + target.name + " dropped " + loot.amount + " " + loot.type + ".");
        }
    }
    equal_line();
}

function addItem(player, item_name) {
    player.inventory.push(item_name);
    console.log(" >> " + player.name + " got " + item_name + ".");
    equal_line();
}

function removeItem(player, item_name) {
    const verify = player.inventory.indexOf(item_name) !== -1; //verify if the item is in the inventory

    if (verify === true) {
         player.inventory.pop(item_name);
         console.log(" >> " + item_name + " was removed from "+player.name+" inventory.");
    } 
    else {
         console.log(" >> " + player.name + " inventory does not have " + item_name + ".");
    }
    equal_line();
}


function displayInventory(player) {
    if (player.inventory.length == 0) {
        console.log(" >> " + player.name + " inventory is empty.");
    }
    else {
        console.log(" >> " + player.name + " inventory: ");
        for (let i = 0; i < player.inventory.length; i++) {
            console.log("   -> " + player.inventory[i]);
        }
    }
    equal_line();
}

function equal_line() {
    console.log("=====================================================");
}

//Creating Players
const player_mario = createPlayer("Mario", 100, 30);
const player_luigi = createPlayer("Luigi", 100, 25);

//Creating Enemies
const enemy_idiot = createEnemy("Goomba", 50, 10);


//Playing
equal_line();
player_mario.attack(player_luigi, 30);
player_mario.attack(player_luigi, 60);

displayInventory(player_mario);

enemy_idiot.attack(player_mario, 100);

player_luigi.attack(enemy_idiot, 50);

displayInventory(player_mario);
displayInventory(player_luigi);
addItem(player_mario, "Potion");
addItem(player_mario, "Coin");
displayInventory(player_mario);
removeItem(player_mario, "Coin");
removeItem(player_mario, "Bread");
displayInventory(player_mario);


