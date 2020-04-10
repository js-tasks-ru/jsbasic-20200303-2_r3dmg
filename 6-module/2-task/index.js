'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      // title: 0,
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      // title: 1,
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      // title: 2,
      img: './assets/images/default-slide-img.jpg'
    }
  ];
  constructor(element) {
    this.el = element;
    this.el.innerHTML =
      (`<div id="mainCarousel" class="main-carousel carousel slide">
      <ol class="carousel-indicators">
          <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
          <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
          <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
      </ol>
      <div class="carousel-inner">
          <!--Вот здесь будет активный слайд-->
      </div>
      <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
      </button>
      <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
      </button>
  </div> `)
    this.carouselSlides = this.el.querySelector('.carousel-inner');
    this.carouselDotsCollection = this.el.querySelectorAll('.carousel-indicator');
    this.activeIndex = 0; // index для активного слайдера
    this.carouselDots = this.el.querySelector('.carousel-indicators');
    this.carouselSlides.innerHTML = (this.ShowSlide(0, 0, 0))// чтобы отобразить первый слайд сразу

    this.SliderControls(this.activeIndex);
    this.SlederDots();
  }

  //МЕТОДЫ

  ShowSlide(title, url, n) {
    this.activeIndex = n;
    this.dotsToArrow(n);
    return (`
            <div class="carousel-item active">
            <img src="${this.slides[url].img}" alt="Activelide">
            <div class="container">
              <div class="carousel-caption">
                  <h3 class="h1">${this.slides[title].title}</h3>
                  <div>
                      <a class="btn" href="#" role="button">
                          View all DEALS
                          <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                      </a>
                  </div>
              </div>
            </div>
            </div>`)
  }

  SliderControls() {
    // стрелка вперед
    this.controlNext = this.el.querySelector('.carousel-control-next');
    this.controlNext.addEventListener("click", () => { console.log(this.activeIndex += 1) })
    this.controlNext.addEventListener("click", () => {
      if (this.activeIndex == this.slides.length) {
        this.activeIndex = 0;
      }
    })
    this.controlNext.addEventListener("click", () => { this.carouselSlides.innerHTML = this.ShowSlide(this.activeIndex, this.activeIndex, this.activeIndex) })

    // стрелка назад
    this.controlPrev = this.el.querySelector('.carousel-control-prev');
    this.controlPrev.addEventListener("click", () => {
      if (this.activeIndex <= 0) {
        this.activeIndex = this.slides.length;
      }
    })
    this.controlPrev.addEventListener("click", () => { console.log(this.activeIndex -= 1) })
    this.controlPrev.addEventListener("click", () => { this.carouselSlides.innerHTML = this.ShowSlide(this.activeIndex, this.activeIndex, this.activeIndex) })
  }

  SlederDots() {
    this.carouselDots.addEventListener("click", (event) => {
      let target = event.target;
      if (target.tagName != 'LI') return;
      this.highlight(event.target)
      this.carouselSlides.innerHTML = this.ShowSlide(Number(target.dataset.slideTo), Number(target.dataset.slideTo), this.activeIndex = Number(target.dataset.slideTo))
      console.log(this.activeIndex)
    })
  }

  highlight(li) {
    if (this.selectedLi) { // убрать active, если есть
      this.selectedLi.classList.remove('active');
    }
    this.selectedLi = li;
    this.selectedLi.classList.add('active'); // подсветить новый dot
  }

  dotsToArrow(n) {
    for (let i = 0; i < this.carouselDotsCollection.length; i++) {
      this.carouselDotsCollection[i].classList.remove('active')
    }
    if (n == this.slides[n].id) {
      this.carouselDotsCollection[n].classList.add('active')
    }
  }
}
// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
