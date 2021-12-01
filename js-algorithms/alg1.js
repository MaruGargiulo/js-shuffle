// FIBONACCI NUMBERS -> holaMundo

/*
let allFibos = [1,2]

for(let i = 2; i < 20; i++) {   
    allFibos[i] = allFibos[i - 1] + allFibos[i - 2] 
}

console.log(allFibos)
*/

// CUÁNTAS VECES SE REPITE UNA PALABRA
// error: empece a desarrollar el algoritmo sin prestar demasiada atención
// no pegían una función que recibiera una palabra y una oración, si no una funcion que contarata
// la cantidad de veces que se repite una palabra

// primera vuelta

/*
const sentence = 'Hola, soy Maru. Y maru está en Maru como Maru'
const wordRepeat = (word, sentence) => sentence.toLowerCase().split(' ').filter( x => x.includes(word.toLowerCase())).length
const test = wordRepeat('Maru', sentence)
*/

// segunda vuelta

// const sentence = 'Hola, soy Maru. Y maru está en Maru como Maru'
// const repeated = (sentence, word = '') => {
//     const loweredSentence = sentence.toLowerCase()
//     const loweredWord = word.toLowerCase()
//     return loweredSentence.split(' ').reduce((acc, el) => {
//         if(acc[el]) {
//             acc[el]++
//         } else {
//             acc[el] = 1
//         }
//         return acc
//     }, {})
// }

// console.log(repeated(sentence))

// const isPalindrome = str => {
//     const loweredStr = str.toLowerCase()
//     const reversedStr = loweredStr.split(' ').reverse().join('')
//     return loweredStr == reversedStr
// }

// console.log(isPalindrome('reconocer'))

// const multiply = (a,b) => {
//     let res = 0
//     let multiplier = a > b ? a : b
//     let num = multiplier == a ? b : a
//     for(i = multiplier; i > 0; i--) {
//         res = res + num
//     }
//     return res
// }

// console.log(multiply(50,50))

// const greater = arr => arr.reduce((acum, el) => acum > el ? acum : el)

// console.log(greater([1,1200,77,9]))

// const cleanArr = arr => arr.filter(num => num)

// console.log(cleanArr([null, 0, undefined, 1, false, 'Test']))

// const flatten = arr => arr.reduce((acum, el) => {
//     if (typeof el !== 'object') {
//         acum.push(el)
//     } else {
//         acum = [...acum, ...el]
//     }
//     return acum
// }, [])

const flatten = arr => arr.reduce((acum, el) => acum.concat(el), [])

console.log(flatten([ 2, [1,2], [[3,4]], [1, []]]))