// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
//  начиная от from и заканчивая to.

// Сделайте два варианта решения.

//     Используя setInterval.
//     Используя рекурсивный setTimeout.

function printNumbersInterval(from, to) {
    let numberInterval = setInterval(function () {
        if (from <= to) {
            console.log(from++);
        } else clearInterval(numberInterval)
    }, 1000)
}

function printNumbersTimeout(from, to) {
    if (from <= to) {
        console.log(from)
        let timeout = setTimeout(printNumbersTimeout, 1000, ++from, to)
    }
}
printNumbersTimeout (10, 20)