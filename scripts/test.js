//console .log("yebo");
//console.log( "java script rules");
//var num = 60;

//let sentence = "my name is ...";
//window.alert ("Hello welcome to Test page");
function calculateRectangleArea(length, width) {
    const area = length * width;
    console.log("The area of the rectangle is: " + area);
  }
  
  // Example usage
  const length = 5;
  const width = 10;
  
  calculateRectangleArea(length, width);

  function computeSum(a, b) {
    if (a === b) {
      return 3 * (a + b);
    } else {
      return a + b;
    }
  }
  
  // Example usage:
  console.log(computeSum(5, 5)); // Output: 30 (since 5 + 5 = 10, and 10 * 3 = 30)
  console.log(computeSum(4, 7)); // Output: 11

  function checkFifty() {
    // Generate two random integers between 1 and 60
    const num1 = Math.floor(Math.random() * 60) + 1;
    const num2 = Math.floor(Math.random() * 60) + 1;
  
    console.log("Generated numbers:", num1, num2); // Show the numbers
  
    // Check if either number is 50 or their sum is 50
    if (num1 === 50 || num2 === 50 || (num1 + num2) === 50) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage:
  console.log("Result:", checkFifty());
  
  
  function exercise4() {
    let voltage = 5;
    let current = 5; 
    let power = voltage * current;
    return power;
}

console.log(exercise4()); // ✅ This line runs the function and prints the result


function RandomInteger(){
  const number = Mathf.floor(Math.random() *10)+1;
  return randomnumber;
}
console.log("Random number between 1 and 10 ",RandomInteger());