function sum(a, b) { 
 return a + b; 
} 
 
function mul(a, b, op) { 
 if (op === "+") { 
 return sum(a, b); 
 } 
 else { 
 return a * b; 
 } 
} 
alert(sum(2, 3)); 
alert(mul(2, 3, "+")); 
alert(mul(2, 3)); 