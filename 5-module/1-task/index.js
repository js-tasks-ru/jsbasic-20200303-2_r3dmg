/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
   let elements = table.querySelectorAll(' tr > td:last-child');

   for (let i = 1; i < table.rows.length; i++) {
      if (elements[i].dataset.available === 'true') {
         table.rows[i].classList.add('available');
      }
      else if (elements[i].dataset.available === 'false') {
         table.rows[i].classList.add('unavailable');
      }
      else if
         (elements[i].hasAttribute('data-available') === false) {
         table.rows[i].hidden = true;
      }
   }

   for (let i = 1; i < table.rows.length; i++) {
      if (table.rows[i].cells[2].innerHTML === 'm') {
         table.rows[i].classList.add('male');
      } else {
         table.rows[i].classList.add('female');
      }
   }

   for (let i = 1; i < table.rows.length; i++) {
      if (table.rows[i].cells[1].innerHTML < '18') {
         table.rows[i].style.textDecoration = 'line-through';
      }
   }
}

/*
elem.hasAttribute(name) – проверяет наличие атрибута.
elem.getAttribute(name) – получает значение атрибута.
elem.setAttribute(name, value) – устанавливает значение атрибута.
*/

