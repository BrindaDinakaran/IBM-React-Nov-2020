var nos = [1, 2, 3, 4, 5, 6]

var [x, y, ...z] = nos	// ... = rest operator
console.log(x)
console.log(y)
console.log(z)

var [...a, b, c] = nos
/* ERROR:
var [...a, b, c] = nos
     ^^^^
SyntaxError: Rest element must be last element
*/