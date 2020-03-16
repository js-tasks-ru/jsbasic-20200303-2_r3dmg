/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
  let transformString = string.replace(/,/g, ' '); // преобразует строку для массива. Меняет ", " на " ".
  let arr = transformString.split(' '); // создает массив из строки с разделителем " ".
  let arrFilter = arr.filter(Number); // фильтрует массив, оставляя в массиве только числа.

  let arrOfNumbers = [];
  for (let i = 0; i < arrFilter.length; i++) {
    arrOfNumbers[i] = Number(arrFilter[i]);
  } // преобразуем строки в массиве в numbers.


  let min = Math.min.apply(0, arrOfNumbers);
  let max = Math.max.apply(0, arrOfNumbers);

  return result = {
    min: min,
    max: max,
  };}
