function memoize(fn){
    var results = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof results[key] === 'undefined')
            results[key] = fn.apply(this, arguments);
        return results[key];
    }
}

var add = memoize(function(x,y){
    console.log('processing ', x , ' and ', y);
    return x + y;
});

console.log(add(10, 20))
console.log(add(10, 20))
/* OUTPUT
processing  10  and  20
30
30
*/