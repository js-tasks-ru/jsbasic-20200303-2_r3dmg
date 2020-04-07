/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  this.el.innerHTML = '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead><tbody></tbody>';
  for (let i = 0; i < items.length; i++) {
    let tr = document.createElement('tr');
    tr.insertAdjacentHTML('beforeend', `<td>${items[i].name}</td>`);
    tr.insertAdjacentHTML('beforeend', `<td>${items[i].age}</td>`);
    tr.insertAdjacentHTML('beforeend', `<td>${items[i].salary}</td>`);
    tr.insertAdjacentHTML('beforeend', `<td>${items[i].city}</td>`);
    this.el.tBodies[0].append(tr);
  }

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */


  /*     this.sort = (column, desc = false) => {
        let sortTable = Array.from(document.querySelectorAll('table > tbody > tr'))
          .slice(1)
          .sort((A, B) => Number(A.cells[column].innerHTML) > Number(B.cells[column].innerHTML) ? 1 : -1);
        if (desc) {
          sortTable.reverse();
        }
        this.el.tBodies[0] = null;
        this.el.tBodies[0].append(...sortTable)
        console.log(this.el.tBodies[0]) */


  this.sort = (column, desc = false) => {
    items = items.sort((a, b) => {
      const keyA = Object.keys(a)[column];
      const keyB = Object.keys(b)[column];
      console.log(keyA)
      if (desc) {
        return a[keyA] < b[keyB] ? 1 : -1;
      }
      return a[keyA] > b[keyB] ? 1 : -1;
    });
    this.el.tBodies[0].innerHTML = '';
    for (let i = 0; i < items.length; i++) {
      let tr = document.createElement('tr');
      tr.insertAdjacentHTML('beforeend', `<td>${items[i].name}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${items[i].age}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${items[i].salary}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${items[i].city}</td>`);
      this.el.tBodies[0].append(tr);
    }
  };
}