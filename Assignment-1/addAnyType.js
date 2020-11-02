// SOLUTION
function add(){
    function parseArg(n){
        if (Array.isArray(n)) return add.apply(this, n); // this or "" or 0 == doesn't matter
        if (typeof n === 'function') return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n);
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments,1));
}

console.log(add(["brinda", 1, 2, 3]))	// 6
console.log(add([1,2,3], [4,5,6]))	// 21
console.log(add(function(){ return 1; }, function(){ return [1,2,3,4]}))	// 11 
console.log(add(function(){ return 1; }, function(){ return 'brinda'; },function(){ return [1,2,3,4]}))	// 11