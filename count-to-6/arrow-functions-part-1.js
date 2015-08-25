let inputs = process.argv.slice(2)

let result = inputs.map(string => string[0]).reduce((previousValue, currentValue) => previousValue + currentValue )
console.log(`[${ inputs.toString() }] becomes "${ result }"`)
