// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

//     counter() должен возвращать следующее значение (как и раньше).
//     counter.set(value) должен устанавливать счётчику значение value.
//     counter.decrease() должен уменьшать значение счётчика на 1.

// function makeCounter() {
//     let count = 0;
  
//     // ... ваш код ...
//   }
  
//   let counter = makeCounter();
  
//   alert( counter() ); // 0
//   alert( counter() ); // 1
  
//   counter.set(10); // установить новое значение счётчика
  
//   alert( counter() ); // 10
  
//   counter.decrease(); // уменьшить значение счётчика на 1
  
//   alert( counter() ); // 10 (вместо 11)

// P.S. Для того, чтобы сохранить текущее значение счётчика,
//  можно воспользоваться как замыканием, так и свойством функции.
//  Или сделать два варианта решения: и так, и так.

function makeCounterClosure() {
    let count = 0;
  
    function counter() {
        return count++;
    }

    counter.set = function(value) {
        count = value;
    }

    counter.decrease = function() {
        count--;
    }
    return counter;
  }


function makeCounterProp() {

    function counter() {
        return counter.count++;
    }
    counter.count = 0;

    counter.set = function(value) {
        counter.count = value;
    }

    counter.decrease = function() {
        counter.count--;
    }
    return counter;
  }