/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
//Реализуйте функцию, которая будет возвращать строку из имен и баланса подходящих пользователей
function showSalary(data, age) {
  let result = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i].age <= age) {
      result += (data[i].name + ', ' + data[i].balance + '\n');
    }
  }
  //return result.replace(/\n$/gm, ''); регулярка на удаление \n в конце
  return result.trimEnd();
}
