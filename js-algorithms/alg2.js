// creo un array con 100 números aleatorios || del 1 al 100
const arr = []

for (let i = 0; i < 100; i++) {
    arr.push(Math.floor((Math.random() * 1000) + 1))
}

// recorro el array 

for (const num of arr) {
    if (num % 3 === 0) console.log('fiz')
    if (num % 5 === 0) console.log('baz')
    if (num % 3 === 0 && num % 5 === 0) console.log('fizbaz')
}
