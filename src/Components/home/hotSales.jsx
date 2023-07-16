import pizza1 from '../../images/products/pizza1.png'
import pizza2 from '../../images/products/pizza2.png'
import food1 from '../../images/products/food1.png'
import burger from '../../images/products/burger1.png'

const HotSales = () => {
    return (
        <div class="hotsales">
        <h1>HOT SALES</h1>
        <div class="products-container">
            <div class="product-card">
                <div class="price-section">
                    <p class="product-price">4.50 $</p>
                </div>
                <img src={pizza1} alt="" width="200" />
                <h1 class="product-title">Olive Mixed Pizza</h1>
                <p class="product-description">Indulge in the delicious flavor of our Olive Mixed Pizza! Topped with a blend
                    of sliced black and green olives and savory herbs, this pizza offers a unique and tasty twist on the
                    classic pizza.</p>
                <button class="add-to-cart">ADD TO CART  <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
            <div class="product-card">
                <div class="price-section">
                    <p class="product-price">4.50 $</p>
                </div>
                <img src={pizza2} alt="" width="200" />
                <h1 class="product-title">Olive Mixed Pizza</h1>
                <p class="product-description">Indulge in the delicious flavor of our Olive Mixed Pizza! Topped with a blend
                    of sliced black and green olives and savory herbs, this pizza offers a unique and tasty twist on the
                    classic pizza.</p>
                <button class="add-to-cart">ADD TO CART  <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
            <div class="product-card">
                <div class="price-section">
                    <p class="product-price">4.50 $</p>
                </div>
                <img src={burger} alt="" width="200" />
                <h1 class="product-title">Olive Mixed Pizza</h1>
                <p class="product-description">Indulge in the delicious flavor of our Olive Mixed Pizza! Topped with a blend
                    of sliced black and green olives and savory herbs, this pizza offers a unique and tasty twist on the
                    classic pizza.</p>
                <button class="add-to-cart">ADD TO CART  <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
            <div class="product-card">
                <div class="price-section">
                    <p class="product-price">4.50 $</p>
                </div>
                <img src={food1} alt="" width="200" />
                <h1 class="product-title">Olive Mixed Pizza</h1>
                <p class="product-description">Indulge in the delicious flavor of our Olive Mixed Pizza! Topped with a blend
                    of sliced black and green olives and savory herbs, this pizza offers a unique and tasty twist on the
                    classic pizza.</p>
                <button class="add-to-cart">ADD TO CART  <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
        <div class="buttons">
            <button>Order online</button>
            <button>Browse our menu</button>
        </div>

    </div>
    )
}

export default HotSales;