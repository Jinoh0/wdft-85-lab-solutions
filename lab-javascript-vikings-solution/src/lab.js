// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }


    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        this.health;

    }

}



// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;

    }
    receiveDamage(damage) {
        this.health -= damage;
        this.health;
        if (damage < this.health) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }

    }



    battleCry() {
        return "Odin Owns You All!";
    }


}





// Saxon
class Saxon extends Soldier {


    receiveDamage(damage) {

        this.damage += this.strength;
        this.health -= damage;


        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`
        }

    }







}








// War
class War {

    vikingArmy = [];




    saxonArmy = [];

    addViking(viking) {
        this.vikingArmy.push(viking);

    }

    addSaxon(saxon) {

        this.saxonArmy.push(saxon);
       
    }

    vikingAttack() {
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        console.log("saxon", this.saxonArmy[randomSaxon])
        const damage = this.saxonArmy[randomSaxon].receiveDamage(
            this.vikingArmy[randomViking].attack()
        );
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.pop(randomSaxon);
        }
        return damage;
    }

    saxonAttack() {
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        const damage = this.vikingArmy[randomViking].receiveDamage(
            this.saxonArmy[randomSaxon].attack()
        );
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.pop(randomViking);
        }
        return damage;

    }

    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return `Vikings have won the war of the century!`
        } else if (this.vikingArmy.length <= 0) {
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }

}




const war = new War()
const viking1 = new Viking('ricardo', 100, 100)
const saxon1 = new Saxon(100, 100,)
war.addSaxon(saxon1)
war.addSaxon(viking1)
console.log(war.saxonArmy)
console.log(war.vikingArmy)
console.log(war.showStatus())
console.log(war.saxonAttack())

