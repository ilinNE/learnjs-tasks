// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Сделайте три варианта решения:

//     С использованием цикла.
//     Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//     С использованием формулы арифметической прогрессии.


function sumToCycle(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


function sumToRecursive(n) {
    return (n == 0) ? 0 : n + sumToRecursive(n-1);
}

function sumToProgressive(n) {
    return (n * (n + 1)) / 2;
}


console.log(sumToProgressive(100))
console.log(sumToCycle(100))
console.log(sumToRecursive(100))
