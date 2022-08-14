function getRandomNumber(diceCount){
    const randomNumbers = new Array(diceCount).fill(0).map((num) =>  Math.floor(Math.random() * 6) + 1)
    return randomNumbers
}

function getDicePlaceHolderHTML(diceCount){
    const dicePlaceHolder = new Array(diceCount).fill(0).map((html) => `<div class="placeholder-dice"></div>`).join("")
    return dicePlaceHolder
} 


const getPercentage = (remainingHealth,maximumHealth) => remainingHealth/maximumHealth*100

export {getRandomNumber, getDicePlaceHolderHTML,getPercentage}  