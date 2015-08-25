module.exports = (string, times) => {
  if(typeof times !== 'undefined') {
     return `${string}${'!'.repeat(times)}`
  } else {
     return `${string}${'!'.repeat(string.length)}`
  }
}
