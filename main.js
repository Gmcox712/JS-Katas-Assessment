function add (x, y) {
    return x + y
}
console.log(add(2, 4))

function multiply (x, y) {
    let multi = 0
    for (let i = 0; i < x; i += 1) {
        multi = add(y, multi)
        
    }
    return multi
}

console.log(multiply(6, 4))

function power(x, y) {
    let expo = 1
    for (let i = 0; i < y; i += 1) {
        expo = multiply(x, expo)
    
    }
    return expo
}
console.log(power(2, 8))

function factor(x) {  
    let fact = 1
    for (let i = x; i > 1; i-=1) {
        fact = multiply(i, fact);
        
    }
    return fact
}
console.log(factor(5))

function fibonacci(x) {
    let fib1 = 0, fib2 = 1, fib3 = 1;
    for (let i =3; i <= x; i++) {
        fib3 = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib3;
    }
    return fib3;
};
console.log(fibonacci(8))