// Создайте объект calculator (калькулятор) с тремя методами:

//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//     sum() (суммировать) возвращает сумму сохранённых значений.
//     mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
    value1: undefined,
    value2: undefined,
    read() {
        this.value1 = +prompt("Введите значение 1");
        this.value2 = +prompt("Введите значение 2");
    },
    sum() {
        return this.value1 + this.value2
    },
    mul() {
        return this.value1 * this.value2
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul())