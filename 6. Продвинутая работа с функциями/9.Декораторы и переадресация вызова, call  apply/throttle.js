// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, 
// передавая вызов в f не более одного раза в ms миллисекунд. 
// Те вызовы, которые попадают в период «торможения», игнорируются.

// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», 
// то он выполняется в конце


function throttle(f, ms) {
    let coolDown = false;
    let lastArgs;
    function wrapper () {
        if (coolDown) {
            lastArgs = arguments
            return
        } 
        f.call(this, ...arguments)
        coolDown = true
        setTimeout(function() {
            coolDown = false
            if (lastArgs) {
                wrapper.call(this, ...lastArgs)
                lastArgs = null;
            }
        }, ms)
        
    }
    return wrapper;
}

function f(a) {
    console.log(a)
  }
  
let f1000 = throttle(f, 1000);
  
setTimeout( () => f1000(1), 200)
setTimeout( () => f1000(2), 400)
setTimeout( () => f1000(3), 1000)
setTimeout( () => f1000(4), 1200)
setTimeout( () => f1000(5), 1400)
setTimeout( () => f1000(6), 1900)
setTimeout( () => f1000(7), 2100)
setTimeout( () => f1000(8), 2500)
setTimeout( () => f1000(9), 3100)
