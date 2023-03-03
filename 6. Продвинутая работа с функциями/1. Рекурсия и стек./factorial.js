// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
    return (n == 1 || n == 0) ? 1 : n * factorial(n - 1);
}

console.assert(factorial(10) == 3628800, "Неверный ответ")