/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

//Проставит класс available/unavailable, в зависимости от значения
// атрибута data-available у ячейки Status
function highlight(table) {


   /*   const gender = table.querySelectorAll("tr > td:nth-child(3)");
     const age = table.querySelectorAll("tr > td:nth-child(2)");
  
  
     let elements = table.querySelectorAll('tbody > tr > td:last-child');
     let rows = document.querySelectorAll('tbody > tr');
  
     for (let i = 0; i < table.rows.length - 1; i++) {
        if (elements[i].dataset.available === 'true') {
           rows[i].classList.add('available');
        }
        else if (elements[i].dataset.available === 'false') {
           rows[i].classList.add('unavailable');
        }
        else if
           (elements[i].hasAttribute('data-available') === false) {
           rows[i].hidden = true;
        }
     } */

   for (let i = 1; i < table.rows.length; i++) {
      if (table.rows[i].cells[3].dataset.available === 'true') {
         table.rows[i].classList.add('available');
      } else if (table.rows[i].cells[3].dataset.available === 'false') {
         table.rows[i].classList.add('unavailable');
      } else if (!table.rows[i].cells[3].hasAttribute('data-available')) {
         table.rows[i].hidden = true;
      }
   }

   //   console.log (table.rows[1].cells[2].innerHTML)

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

/*     elem.hasAttribute(name) – проверяет наличие атрибута.
elem.getAttribute(name) – получает значение атрибута.
elem.setAttribute(name, value) – устанавливает значение атрибута. */

