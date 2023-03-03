// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Пример работы:

// function fib(n) { /* ваш код */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// P.S. Все запуски функций из примера выше должны работать быстро.
//  Вызов fib(77) должен занимать не более доли секунды.

function fib(n) {
    if (n <= 1) return n;
    let fp = 0
    let fn = 1;
    for (let i = 2; i <= n; i++) {
        let sum = fn + fp
        fp = fn
        fn = sum
    }
    return fn;

}
