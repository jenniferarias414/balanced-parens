// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// For example:

// >>> has_balanced_parens("()")
// // true

// >>> has_balanced_parens("(Oh Noes!)(")
// // false

// >>> has_balanced_parens("((There's a bonus open paren here.)")
// // false

// >>> has_balanced_parens(")")
// // false

// >>> has_balanced_parens("(")
// // false

// >>> has_balanced_parens("(This has (too many closes.) ) )")
// // false
// You may consider a string with no parentheses balanced:

// >>> has_balanced_parens("Hey...there are no parens here!")
// // true

// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function hasBalancedParens(string){
    let stack = []
    for(i=0; i<string.length; i++){
        if (string[i] === '('){
            stack.push('(')
        } else if (string[i] === ')'){
            stack.push(')')
        }
    }
}
//stack data structure attempt above....

function balancedParens(str) {
    let openPar = 0
    let closedPar = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        openPar += 1
      } else if (str[i] === ")") {
        closedPar += 1
      }
    }
    return openPar === closedPar //forcing this to be a boolean value; returns true
  }

  console.log(balancedParens("This ( is unbalanced."))

//Regex method
  function balancedParens(str){
    let opens = str.replace(/[^(]/g, "").length; //^ is the NOT operator, like !, /g = global (affects everything)
    let closes = str.replace(/[^)]/g, "").length; //replacing everything that is not a ) with NOTHING ("")
    return opens === closes
  }
  //REGEX method

  //or can write in 1 line
  function balancedParens(str){
    return str.replace(/[^(]/g, "").length === str.replace(/[^)]/g, "").length
  }