///////////////////////////////////////////////////////////////////
function createPlayer(name, health, strength) {
    return {
        name: name,
        health: health,
        strength: strength,
        inventory: [],
        attack: function (target) {
            console.log(" >> " + name + " attack " + target.name + " with " + strength + " dage.");
            TakeDamage(target, strength, name);am
        }
    }
}

function createEnemy(name, health, strength) {
    return {
        name: name,
        health: health,
        strength: strength,
        attack: function (target) {
            console.log(" >> " + name + " attack " + target.name + " with " + strength + " damage.");
            TakeDamage(target, strength, name);
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

////////////////////////////////////////////////////////////////////
function TakeDamage(target, damage) {
    equal_line();
    target.health -= damage;
    console.log(" >> " + target.name + " has been attacked.");
    console.log("   -> Damage: " + damage);
    console.log("   -> " + target.name + " remaining health: " + target.health);
    if (target.health <= 0) {
        console.log(" >> " + target.name + " died.");
        if (typeof target.dropLoot === 'function') { //check if target has dropLoot method
            const loot = target.dropLoot();
            console.log(" >> " + target.name + " dropped " + loot.amount + " " + loot.type + ".");
        }
    }
    equal_line();
}
//////////////////////////////////////////////////////////////////////
function addItem(player, item_name) {
    player.inventory.push(item_name);
    console.log(" >> " + player.name + " got " + item_name + ".");
    equal_line();
}

function removeItem(player, item_name) {
    const verify = player.inventory.indexOf(item_name) !== -1; //verify if the item is in the inventory

    if (verify === true) {
        player.inventory.splice(player.inventory.indexOf(item_name), 1);
        console.log(" >> " + item_name + " was removed from " + player.name + " inventory.");
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
////////////////////////////////////////////////////////////////////////
const skills = [
    { name: "Attack", level: 1 },
    { name: "Defense", level: 1 },
    { name: "Counter-Attack", level: 1 }
];

function increaseSkillLevel(skill) {
    return {
        ...skill,
        level: skill.level + 1
    };
}

const abilities = [
    { name: "Strength", power: 50 },
    { name: "Agility", power: 40 },
    { name: "Intelligence", power: 60 }
];

function increaseAbilityPower(ability) {
    return {
        ...ability,
        power: ability.power * 1.2
    };
}
///////////////////////////////////////////////////////////////////////////
function isWeapon(item) {
    return item === "Sword" || item === "Spear" || item === "Shield";
}

const challenges = [
    { name: "Quest 1", difficulty: "easy" },
    { name: "Quest 2", difficulty: "hard" },
    { name: "Quest 3", difficulty: "Hard" },
    { name: "Quest 4", difficulty: "medium" },
    { name: "Quest 5", difficulty: "easy" },
    { name: "Quest 6", difficulty: "hard" },
    { name: "Quest 7", difficulty: "medium" },
    { name: "Quest 8", difficulty: "hard" }
];

function isHard(challenge) {
    return challenge.difficulty === "hard";
}
///////////////////////////////////////////////////////////////////////////
const scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function sumScore(total, score) {
    return total + score;
}
///////////////////////////////////////////////////////////////////////////
const healthyItems = [
    { name: "Apple", heal: 5 },
    { name: "Bread", heal: 5 },
    { name: "Potion", heal: 50 }
];

function sumHeal(total, item) {
    return total + item.heal;
}
///////////////////////////////////////////////////////////////////////////
function combatRound(player, enemy) {
    while (player.health > 0 && enemy.health > 0) {
        player.attack(enemy);
        if (enemy.health > 0) {
            enemy.attack(player);
        }
        if (player.health <= 0) {
            console.log(` >> ${player.name} died.`);
            break;
        }
        if (enemy.health <= 0) {
            console.log(` >> ${enemy.name} died.`);
            break;
        }
    }
}
///////////////////////////////////////////////////////////////////////////
function randomEvent() {
    const events = [
        "Found an Item.",
        "Enemy spotted.",
        "Surprise Attack."];
    const event = Math.floor(Math.random() * events.length);
    return events[event];
}
function events(player, steps) {
    for (let i = 0; i < steps; i++) {
        const event = randomEvent();
        console.log(`Step ${i + 1}: ${player.name} ${event}`);
        if (event === "Found an Item.") {
            addItem(player, "Random Item");
        } else if (event === "Enemy spotted.") {
            const enemy = createEnemy("Random Enemy", 50, 10);
            combatRound(player, enemy);
        } else if (event === "Surprise Attack.") {
            const enemy = createEnemy("Random Enemy", 50, 10);
            enemy.attack(player);
            combatRound(player, enemy);
        }
    }
}
///////////////////////////////////////////////////////////////////////////
function simulateGame(player) {
    let eventCount = 0;
    let enemiesDefeated = 0;
    let lootCollected = [];

    while (player.health > 0) {
        const event = randomEvent();
        eventCount++;
        console.log(`Event ${eventCount}: ${player.name} ${event}`);

        if (event === "Found an Item.") {
            const item = "Random Item";
            addItem(player, item);
            lootCollected.push(item);
        } else if (event === "Enemy spotted." || event === "Surprise Attack.") {
            const enemy = createEnemy("Random Enemy", 50, 10);
            if (event === "Surprise Attack.") {
                enemy.attack(player);
            }
            combatRound(player, enemy);
            if (enemy.health <= 0) {
                enemiesDefeated++;
            }
        }

        // Verificar se a saúde do jogador é zero ou menor após cada evento
        if (player.health <= 0) {
            break;
        }
    }

    console.log("Game Over!");
    console.log(`Total Events: ${eventCount}`);
    console.log(`Loot Collected: ${lootCollected.join(", ")}`);
    console.log(`Enemies Defeated: ${enemiesDefeated}`);
    equal_line();
}
///////////////////////////////////////////////////////////////////////////
function equal_line() {
    console.log("=====================================================");
}
///////////////////////////////////////////////////////////////////////////

//Creating Players
const player_mario = createPlayer("Mario", 100, 30);
const player_luigi = createPlayer("Luigi", 100, 25);

//Creating Enemies
const enemy_idiot = createEnemy("Goomba", 50, 10);


//Playing
equal_line();
player_mario.attack(player_luigi);
player_mario.attack(player_luigi);

displayInventory(player_mario);

enemy_idiot.attack(player_mario);

player_luigi.attack(enemy_idiot);

//Inventory Testing
displayInventory(player_mario);
displayInventory(player_luigi);
addItem(player_mario, "Potion");
addItem(player_mario, "Coin");
displayInventory(player_mario);
removeItem(player_mario, "Coin");
removeItem(player_mario, "Bread");
displayInventory(player_mario);

//Upgrading Skills and Abilities
equal_line();
console.log(" >> Displaying Skills: ");
console.log(skills);
equal_line();

const upgradedSkills = skills.map(increaseSkillLevel)

console.log(" >> Displaying Upgraded Skills: ");
console.log(upgradedSkills);
equal_line();

console.log(" >> Displaying Abilities: ");
console.log(abilities);
equal_line();

const upgradedAbilities = abilities.map(increaseAbilityPower);

console.log(" >> Displaying Upgraded Abilities: ");
console.log(upgradedAbilities);
equal_line();

//Filtering Items
equal_line();
addItem(player_mario, "Coin");
addItem(player_mario, "Sword");
addItem(player_mario, "Sword");
addItem(player_mario, "Potion");
addItem(player_mario, "Spear");
addItem(player_mario, "Shield");
displayInventory(player_mario);

const weapons = player_mario.inventory.filter(isWeapon);

console.log(" >> Displaying Weapons: ");
console.log(weapons);
equal_line();

//Filtering Challenges
const hardChallenges = challenges.filter(isHard);
console.log(" >> Displaying Hard Challenges: ");
console.log(hardChallenges);
equal_line();

//Score Sum
const totalScore = scores.reduce(sumScore)
console.log(" >> Total Score: " + totalScore);
equal_line();

//Healing Items
const totalHeal = healthyItems.reduce(sumHeal, 0);
console.log(" >> Total Healing: " + totalHeal);
equal_line();

//Combat
const player_Antonio = createPlayer("Antonio", 100, 30);
const enemy_Joaquim = createEnemy("Joaquim", 80, 20);
combatRound(player_Antonio, enemy_Joaquim);

//Random Events
equal_line();
events(player_mario, 3);

//Game Simulation
simulateGame(player_mario);