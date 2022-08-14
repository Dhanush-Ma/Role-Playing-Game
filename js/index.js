import characterData from './data.js'
import Character from './character.js'

let monstersArray = ["orc","demon","goblin"] 
let isWaiting = false
function getNewMonster(){
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}
function render(){
    document.getElementById("hero").innerHTML = wizard.getCharacterHTML()
    document.getElementById("monster").innerHTML = monster.getCharacterHTML()
}
 
function attack(){
    if(!isWaiting){
        wizard.getDiceInnerHTML()
        monster.getDiceInnerHTML()
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        render()
        if(wizard.dead)
        {
            setTimeout(()=>endGame(),1500)
        }
        else if(monster.dead){ 
            
            isWaiting = true
            if(monstersArray.length > 0)
            {
                
                setTimeout(()=>{
                    monster = getNewMonster()
                     wizard.getDicePlaceHolderElement()
                     monster.getDicePlaceHolderElement()
                    render()
                    
                   isWaiting = false},1500)
            }     
            else
            {
                setTimeout(()=>endGame(),1500)
            } 
        }
}
}

function endGame(){
    isWaiting = true
    const endMessage = wizard.dead && monster.dead ? "No victors - all creatures are dead" : wizard.dead ? "The Monsters are Victorious" : "The Wizard is Victorious" 

    const endEmoji = wizard.dead && monster.dead ? "🔮" : wizard.dead ? "☠️" : "☠️"

    document.body.innerHTML = `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 

}

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

 wizard.getDicePlaceHolderElement()
     monster.getDicePlaceHolderElement()
render()

const attackBtn = document.getElementById("attack-button")

attackBtn.addEventListener("click", attack)

