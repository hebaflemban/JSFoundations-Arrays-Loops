/**
 * getOdds(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only ODD numbers.
 *
 * e.g.
 * getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [1, 3, 5, 7, 9]
 * getOdds([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [11, 35, 601, 777, 999]
 */
function getOdds(numbers) {
  let i =0 
  let odds = []
  for (i=0 ; i<numbers.length ; i++){
    if (numbers[i]%2 != 0){
      odds.push(numbers[i])
    }
  }
  return odds
}

/**
 * getEvens(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only EVEN numbers.
 *
 * e.g.
 * getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [2, 4, 6, 8]
 * getEvens([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [52, 14, 56, 888]
 */
function getEvens(numbers) {
  let i = 0
  let evens = []

  for (i ; i<numbers.length ; i++){
    if (numbers[i]%2==0){
      evens.push(numbers[i])
    }
  }
  return evens
}

/**
 * getDuplicateCount(x, numbers):
 * - receives a number `x`, and an array of numbers called `numbers`
 * - returns the number of times `x` occurs in `numbers`.
 *
 * e.g.
 * getDuplicateCount(1, [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 13]) -> 4
 * getDuplicateCount(52, [11, 35, 52, 14, 56, 601, 52, 777, 888, 999, 52]) -> 3
 */
function getDuplicateCount(x, numbers) {
  let i = 0 
  let count = 0 
  for (i; i<numbers.length ; i++){
    if (numbers[i] == x){
      count ++
    }
  }
  return count
}

/**
 * youGottaCalmDown(s):
 * - receives a string `s`
 * - returns the string `s` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */
function youGottaCalmDown(s) {
  let i = 0 
  for (i; i<s.length ; i++){
    if (s[i] == '!'){ break; }{
    }
  }
  return s.slice(0,i+1)

}

module.exports = { getOdds, getEvens, getDuplicateCount, youGottaCalmDown };


console.log("getOdds")
console.log(getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(getOdds([11, 35, 52, 14, 56, 601, 777, 888, 999]) )

console.log("getEvens")
console.log(getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(getEvens([11, 35, 52, 14, 56, 601, 777, 888, 999]) )

console.log("getDuplicateCount")
console.log(getDuplicateCount(1, [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 13]) )
console.log(getDuplicateCount(52, [11, 35, 52, 14, 56, 601, 52, 777, 888, 999, 52]))
 
console.log("youGottaCalmDown")
console.log(youGottaCalmDown("HI!!!!!!!!!!"))
console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"))
console.log(youGottaCalmDown("Hellooooo"))