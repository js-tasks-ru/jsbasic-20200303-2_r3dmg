/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */



function makeFriendsList(friends) {
   let ulFirst = document.createElement('ul'); // создать ul

   for (let i = 0; i < friends.length; i++) {
      let liFirst = document.createElement('li'); // создать li
      liFirst.innerHTML = `${friends[i].firstName}  ${friends[i].lastName}`; // вставить в li элемент массива
      ulFirst.append(liFirst); // вставить liFirst в конец <ul>
   };
   return ulFirst;
}

makeFriendsList;
