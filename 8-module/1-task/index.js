class ProductList {
	productsUrl = '/assets/data/products.json';
	productsStoreKey = 'cart-products';

	constructor(element) {
		this.el = element;
		this.el.innerHTML =
			`<div class="row justify-content-end">
			<div class="col-lg-9">
			<h3 class="section-title">Top Recommendations for You</h3>
			<div class="row homepage-cards">
			<!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
			</div>
			</div>
			</div>`
		this.cart = JSON.parse(localStorage.getItem('cart-products')) || [];
		this.el.querySelector('.homepage-cards').addEventListener('click', (event) => this.addToCart(event))
	}

	show() {
		return fetch(this.productsUrl)
			.then(response => response.json())
			.then(data => {
				this.products = data;
				this.homepageCards = this.el.querySelector('.homepage-cards');
				for (let i = 0; i < data.length; i++) {
					this.productCart =
						`<div data-product-id="${data[i].id}" class="products-list-product col-md-6 col-lg-4 mb-4">
					<div class="card">
					<div class="card-img-wrap">
					<img class="card-img-top" src="${data[i].imageUrl}" alt="Card image cap">
					</div>
					<div class="card-body">
					<h5 class="card-title">${data[i].title}</h5>
					<div class="rate">
					${this.rate(data[i])}
					<span class="rate-amount ml-2">${this.rateAmount(data, i)}</span>
					</div>
					<p class="card-text price-text discount"><strong>${data[i].price}</strong>
					${this.oldPriceCheck(data, i)} </p>
					<button class="product-add-to-cart" data-button-role="add-to-cart">
					Add to cart
					</button>
					</div>
					</div>
					</div>`
					this.homepageCards.insertAdjacentHTML('beforeend', this.productCart)
				}
			})
	}
	// проверка наличия старых цен
	oldPriceCheck(data, i) {
		if (data[i].oldPrice == null) {
			return ' '
		} else {
			return `<small class="ml-2">${data[i].oldPrice}</small>`
		}
	}
	// отрисовка рейтинга
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
	// проверка наличия отзывов
	rateAmount(data, i) {
		if (data[i].rating == null) {
			return '\ '
		} else {
			return data[i].rating.reviewsAmount
		}
	}
	// добавление в корзину
	addToCart(event) {
		let target = event.target;
		if (target.dataset.buttonRole !== 'add-to-cart') { return }
		let itemID = +target.parentElement.parentElement.parentElement.dataset.productId;
		//найти товар 
		let item = this.products.find(item => item.id === itemID);
		let cart = !!this.cart.find(product => product.id === itemID);
		if (cart) {
			alert('Товар уже добавлен в корзину!');
			return
		}
		let userAgree = confirm('Вы уверенны, что хотите добавить этот товар в корзину?');
		if (userAgree == true) {
			this.cart.push(item);
		}
		localStorage.clear();
		localStorage.setItem('cart-products', JSON.stringify(this.cart));
	}
}
// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
