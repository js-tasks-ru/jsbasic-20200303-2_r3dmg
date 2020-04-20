'use strict';

class CheckoutProductList {
  productsStoreKey = 'cart-products';

  constructor(parentElement) {
    this.el = parentElement;
    this.el.innerHTML = `<div class="product-list-box">
<!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
</div>`
    this.cart = JSON.parse(localStorage.getItem('cart-products')) || [];
    this.productWraper = this.el.querySelector('.product-list-box')
    this.productWraper.addEventListener('click', (event) => this.removeFromCart(event))
    this.showItem()
  }

  showItem() {
    for (let i = 0; i < this.cart.length; i++) {
      this.itemCart = `
      <div data-product-id="${this.cart[i].id}" class="product-wrapper box-inner-col description-col">
      <div class="product-image-container">
      <img class="product-image" src="${this.cart[i].imageUrl}" alt="img">
      </div>
      <div class="product-description">
      <h4 class="col-title mb-2">${this.cart[i].title}</h4>
      <div class="rate">
      ${this.rate(this.cart[i])}
      </div>
      <p class="rate-amount d-none d-md-block mt-1">${this.rateAmount(this.cart, i)}</p>
      </div>
      <div class="product-price">
      <p class="mb-0 font-weight-light">Price:</p>
      <h4 class="col-title price-text mb-2">${this.cart[i].price}</h4>
      </div>
      <div class="product-remove-button-wrapper">
      <button type="button"
      data-button-role="checkout-remove-product"
      class="product-remove-button">
      X
      </button>
      </div>
      </div>`
      this.productWraper.insertAdjacentHTML('beforeend', this.itemCart)
    }
  }

  rate(data) {
    let rate = '';
    if (data.rating == null) {
      return '\ '
    } else {
      for (let i = 0; i < 5; i++) {
        if (i < data.rating.stars) {
          rate += `<i class="icon-star checked"></i>`
        } else {
          rate += `<i class="icon-star active"></i>`
        }
      }
    }
    return rate;
  }
  rateAmount(data, i) {
    if (data[i].rating == null) {
      return '\ '
    } else {
      return data[i].rating.reviewsAmount
    }
  }
  removeFromCart(event) {
    let target = event.target;
    if (target.dataset.buttonRole !== 'checkout-remove-product') { return }
    //получение id товара
    let itemID = +target.parentElement.parentElement.dataset.productId;
    //найти товар по id
    let item = this.cart.find(item => item.id === itemID);
    //получить индекс товара в массиве
    let itemIndex = this.cart.indexOf(item)
    let userAgree = confirm('Вы уверенны, что хотите удалить этот товар из корзины?');
    if (userAgree == true) {
      this.cart.splice(itemIndex, 1)
      let itemNode = target.parentElement.parentElement;
      itemNode.remove()
    }
    localStorage.clear();
    localStorage.setItem('cart-products', JSON.stringify(this.cart));
  }
}
window.CheckoutProductList = CheckoutProductList;
