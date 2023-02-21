// Напишите функцию checkSpam(str), возвращающую true, 
// сли str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(str) {
    str = str.toLowerCase()
    if (str.indexOf("xxx") > -1 || str.indexOf("viagra") > -1) {
      return true;
    } else {
      return false;
    }
  }