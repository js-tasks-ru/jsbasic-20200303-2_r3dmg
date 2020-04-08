/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.el.innerHTML = '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td> <td></td></tr></thead><tbody></tbody>';
    for (let i = 0; i < data.length; i++) {
      let tr = document.createElement('tr');
      tr.insertAdjacentHTML('beforeend', `<td>${data[i].name}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${data[i].age}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${data[i].salary}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${data[i].city}</td>`);
      this.el.tBodies[0].append(tr);
    }
    this.el.className = "pure-table";

    this.delBtn = this.el.querySelectorAll("table > tbody > tr");
    

    let self = this;
    
    for (let i = 0; i < data.length; i++) {
      this.delBtn[i].insertAdjacentHTML("beforeend", '<td><a href="#delete">X</a></td>');
      //this.delBtn[i].lastChild.onclick = () => this.delBtn[i].remove()
      this.delBtn[i].lastChild.addEventListener("click", function(){ self.delBtn[i].remove()})
      this.delBtn[i].lastChild.addEventListener("click", function () {self.onRemoved(data[i].id)})
    }
  }
  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    console.log('удалился User.id: ' + id)
  }
}
window.ClearedTable = ClearedTable;


/* for (let key of this.delBtn) {
    key.insertAdjacentHTML("beforeend", '<td><a href="#delete">X</a></td>');
    key.lastChild.onclick = () => key.remove()
    key.lastChild.onclick = () => table.onRemoved(10) */

     //this.delBtn[i].lastChild.addEventListener("click", function(){ this.delBtn[i].remove()})
     //i.lastChild.addEventListener("click", function() {table.onRemoved(data[0].id)})