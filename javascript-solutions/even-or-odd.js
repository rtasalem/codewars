/**
 * Created by usuuuzi. 8 kyu.
 * 
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

const evenOrOdd = (number) => {
  return number % 2 != 0 ? 'Odd' : 'Even'
}

module.exports = evenOrOdd