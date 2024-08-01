function reverseString(str) {
  // type your code here
  let output=''
  for (let i = str.length -1; i> -1; --i){
    output = output +str[i]
  }
  return output
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// orig_s='dsf'
// output=''
// for loop if i < origin_s.length() {
// output + string character
// }
// And a written explanation of your solution
