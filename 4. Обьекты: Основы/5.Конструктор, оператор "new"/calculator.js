// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//     sum() возвращает сумму этих свойств.
//     mul() возвращает произведение этих свойств.

// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
    this.value1 = undefined;
    this.value2 =  undefined;
    this.read = () => {
        this.value1 = +prompt("Введите значение 1");
        this.value2 = +prompt("Введите значение 2");
    },
    this.sum = () => {
        return this.value1 + this.value2
    },
    this.mul = () => {
        return this.value1 * this.value2
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );