// // Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// // Задание состоит из двух частей.

// //     Во-первых, реализуйте метод calculate(str), 
// который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// //     Пример использования:

// // let calc = new Calculator;

// // alert( calc.calculate("3 + 7") ); // 10

// // Затем добавьте метод addMethod(name, func),
// который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b),
// которая описывает его.

// // Например, давайте добавим умножение *, деление / и возведение в степень **:

// //     let powerCalc = new Calculator;
// //     powerCalc.addMethod("*", (a, b) => a * b);
// //     powerCalc.addMethod("/", (a, b) => a / b);
// //     powerCalc.addMethod("**", (a, b) => a ** b);

// //     let result = powerCalc.calculate("2 ** 3");
// //     alert( result ); // 8

// //     Для этой задачи не нужны скобки или сложные выражения.
// //     Числа и оператор разделены ровно одним пробелом.
// //     Не лишним будет добавить обработку ошибок.

function Calculator() {
    this["+"] = (a, b) => { return a + b }
    this["-"] = (a, b) => { return a - b }
    this.calculate = (command) => {
        let parsed_command = command.split(' ');
        let a = +parsed_command[0];
        let b = +parsed_command[2];
        let operator = parsed_command[1];
        if (operator in this) {
            return this[operator](a, b);
        } else {
            return null;
        }
    }
    this.addMethod = (operator, func) => {
        this[operator] = func;
    }
}
