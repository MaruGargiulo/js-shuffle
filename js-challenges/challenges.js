// 1. Name Shuffle

function nameShuffle(fullName) {
   const [ fname, lname ] =  fullName.split(' ');
   return [lname, fname].join(' ');
}

// console.log(nameShuffle('Miconsaru Gargiulo'));
// console.log(nameShuffle('Laura Spiner'));


// 2. Four Letter Strings

function isFourLetter(words) {
   return words.filter( word =>  word.length === 4)
}

// console.log(isFourLetter(['hola', 'chaulinas', 'dia', 'luz']));


// 3. Negar números dentro de array

function negate(numbers) {
   return numbers.map( number => - number )
}

console.log(negate([1,-3,5,7]));
console.log(negate([]));


// 4. Boom si hay un 7

function sevenBoom(numbers) {
   return !!numbers.find( number => number.toString().includes(7)) ? 'Boom!' : 'there is no 7 in the array' ;
}

console.log(sevenBoom([1,5,8,9,7]));
console.log(sevenBoom([1,5,8,9,129]));


// 5. Flip number and find out if its grater than the original

function largestSwap(number) {
   return number > Number(number.toString().split('').reverse().join(''))
}

console.log(largestSwap(12));
console.log(largestSwap(72));


