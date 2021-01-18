// Soldier
class Soldier {
    constructor(health,strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength;

    }

    receiveDamage(damage){
        this.health-=damage;
    }



}

// Viking
class Viking extends Soldier{

    constructor(name, health,strength){
        super(health,strength);
        this.name=name;
    }

    receiveDamage(damage){
        super.receiveDamage(damage);
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`;
        } else{
            return  `${this.name} has died in act of combat`;
        }    
    }

    battleCry(){
        return "Odin Owns You All!"
    } 
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        super.receiveDamage(damage);
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        } else{
            return  `A Saxon has died in combat`;
        }    
    }
}

// War
class War {
    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }
addViking(viking){
    this.vikingArmy.push(viking);

}
addSaxon(saxon){
    this.saxonArmy.push(saxon);
}
vikingAttack(){

    let indVik= Math.floor(Math.random() * this.vikingArmy.length);
    let indSax = Math.floor(Math.random() * this.saxonArmy.length);

    let result=this.saxonArmy[indSax].receiveDamage(this.vikingArmy[indVik].attack());
    if(result.includes("has died in ")){this.saxonArmy.splice(indSax, 1);}
    return result;}


saxonAttack(){

    let indVik= Math.floor(Math.random() * this.vikingArmy.length);
    let indSax =Math.floor(Math.random() * this.saxonArmy.length);

    let result= this.vikingArmy[indVik].receiveDamage(this.saxonArmy[indSax].attack());
    console.log(result);
    if(result.includes("has died in ")){this.vikingArmy.splice(indVik, 1);}
    return result;}

/*
if the Saxon array is empty, should return "Vikings have won the war of the century!"
if the Viking array is empty, should return "Saxons have fought for their lives and survived another day..."
if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."

*/


showStatus(){
    if(this.saxonArmy.length==0){return "Vikings have won the war of the century!"}
    else if(this.vikingArmy.length==0){ return "Saxons have fought for their lives and survived another day..." }
    else{return "Vikings and Saxons are still in the thick of battle."}
}
    
}
