// Создайте функцию readNumber, которая будет запрашивать ввод числового значения 
// до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода,
// отправив пустую строку или нажав «Отмена».
// В этом случае функция должна вернуть null.

function readNumber() {
    let value;
    for (;;) {
        value = prompt("Введите числовое значение");
        if (value == '' || value == null) return null;
        if (!isNaN(+value)) {
            return value;
        }  
    }
}

alert(readNumber());