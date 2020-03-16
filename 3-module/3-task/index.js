/**
 * @param {string} str
 * @returns {string}
 */
function camelize(string) {
  let arr = string.split('-');

  let result = arr.map(function(item, index, array) {
    return index === 0 ? item : item[0].toUpperCase() + item.slice(1,);
  }).join('');

  return result;
}
