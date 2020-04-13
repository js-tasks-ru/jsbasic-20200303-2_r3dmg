'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>
    
      </ul>
    </li>
  
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>
    
       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>
    
      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    let self = this;
    this.el = element;
    this.el.innerHTML = (this.template);
    this.mainMenu = this.el.querySelector('.list-group')
    this.mainItems = this.el.querySelectorAll('.list-group-item')
    this.subItems = this.el.querySelectorAll('.dropdown-menu')
    this.drop = document.querySelector('.backdrop')


    this.pointerenter()
  }


  pointerenter() {
    for (let i = 0; i < this.mainItems.length; i++) {
      this.mainItems[i].addEventListener("pointerenter", () => {
        this.subItems[i].classList.add('show')
        this.drop.classList.add('show')
      })
  
        this.mainItems[i].addEventListener("pointerleave", () => {
        this.subItems[i].classList.remove('show')
        this.drop.classList.remove('show')
      })
      }
  }
}
// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;