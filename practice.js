
// const dogBreed = (favoriteBreed) => {
//     const typeofbreed = favoriteBreed
//     if (typeofbreed === "schnauzer") {
//         return "My favorite dog breed is schnauzer"
//     } if (typeofbreed === "meow") {
//         return "I like cats"
//     } else {
//         return "I dont like that breed"
//     }
// }

// let favoriteBreed = dogBreed("schnauzer")
// console.log(`when it comes to pets ${favoriteBreed}`)

// const add = (first, second, third) => {
//    const firstNum = first 
//    const secondNum = second
//    const thirdNum = third
//    const sumOfTwoNumbers = first + second 
//    const sumOfThreeNumbers = first + second + third
// }
// let first = 12
// let second = 15
// let third = 20
// let sumOfTwoNumbers = first + second
// let sumOfThreeNumbers = first + second + third
// console.log(`${first} + ${second} = ${sumOfTwoNumbers}`)
// console.log(`${first} + ${second} + ${third} = ${sumOfThreeNumbers}`)

// const go = (direction, speed) => {
//     console.log(`The car is moving ${direction} at ${speed}mph`)
        
//     }
// go("forward", 35)

// numbers = [12, 58, 64, 19, 100]
// const evenOrOdd = (number) => {
//     for(number of numbers) {

//         if (number % 2 == 0) {
//             console.log("even")
//         }   else {
//             console.log("odd")
//         }
//     }
// }
    
// evenOrOdd(numbers)

// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]
// filteredWords = []

// const startsWithK = () => {
//     for (const word of words) {
//     if(word.startsWith("k")===false) {
//         filteredWords.push(word)
//     }
//     }
// }

// startsWithK()


// const combineWords = (string) => {
//     const newSentence = string.join(' ')
    
//     return newSentence
//     }    

//     const sentenceFromArray = combineWords(filteredWords)


//     console.log(sentenceFromArray)

// const chanceOfTuna = () => {
//     if (Math.random() * 100 >= 50) {
//         console.log("Sven hooked a tuna!")
//         return true 
//     }   else {
//         console.log("Sven came up empty-handed")
//         return false
//     }

// }
// console.log(chanceOfTuna())


const menu = (sandwich, side, drink, dessert) => {
    const foodChoices = foodOrder("Ultimate Slammer", "Potato wedges", "Mr. Pepper", "Fudge Sundae")
    foodOrder.sandwich = "Ultimate Slammer"
    foodOrder.side = "Potato Wedges"
    foodOrder.drink = "Mr. Pepper"
    foodOrder.desset = "Fudge Sundae"
}

