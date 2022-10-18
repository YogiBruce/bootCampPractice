function Algo() { }

Algo.prototype.reverse = function (str) {
  // TODO: Your code here
  return str.split('').reverse().join('')
}




Algo.prototype.isPalindrome = function (str) {
  // TODO: Your code here
  let palindrome = this.reverse(str)
  return str === palindrome

};

Algo.prototype.capitalize = function (str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  
}

module.exports = Algo;
