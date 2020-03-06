/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
//3
function ucFirst (str) {
  if (str.length > 0) {
    return str = str[0].toUpperCase() + str.slice(1,);
  }
  else {
    return '';
  }
}
