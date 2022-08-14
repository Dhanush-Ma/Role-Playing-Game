import {getRandomNumber,getDicePlaceHolderHTML,getPercentage} from "./utilities.js"

class Character{
    constructor(data)
    {
        Object.assign(this,data)
        this.maxHealth = this.health
    }

    getDicePlaceHolderElement() {
        this.diceHTML = getDicePlaceHolderHTML(this.diceCount)
    }
    
    getDiceInnerHTML(){ 
        this.currentDiceScore = getRandomNumber(this.diceCount)
        this.diceHTML = this.currentDiceScore.map((num) => `<div class="dice">${num}</div>`).join("")
    }
    
    takeDamage(attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce((total,currentElement) => total+currentElement)
         this.health -= totalAttackScore
         if(this.health <= 0)
         {
            this.dead = true
            this.health = 0
         }
    }

    getHealthBarHTML() {
        const percent = getPercentage(this.health,this.maxHealth)
        return ` <div class="health-bar-outer">
            <div class="health-bar-inner  ${percent < 26 ? "danger" : ""}"style="width:${percent}%;">
            </div>
        </div> `
    }
    
    getCharacterHTML(){   
        const healthBar =  this.getHealthBarHTML()
        const {Name,avatar,health,diceHTML} = this
        return `
            <div class="character-card">
                <h4 class="name">${Name}</h4>
                <img class="avatar" src="${avatar}"/>
                <p class="health">health: <b> ${health} </b></p>
                ${healthBar}
                <div class="dice-container">
                    ${diceHTML}
                </div>
                
            </div> `
    } 
}

export default Character
