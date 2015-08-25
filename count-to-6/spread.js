let numbers = process.argv.slice(2)

let result = Math.min(...numbers)

console.log(`The minimum of [${ numbers.toString() }] is ${ result }`)
