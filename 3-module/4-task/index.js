/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let results = [];
  return users.map(function(item, index,) {
    return results[index] = users[index].name;
  });
}
