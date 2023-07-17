const Products = require('../../json/products.json')

const HotSales = () => {
    return (
        <div className="hotsales">
            <h1>HOT SALES</h1>
            <div className="products-container">
                {
                    Products.products.map((item , index) => (
                        <div className="product-card" key={index}>
                            <div className="price-section">
                                <p className="product-price">{item.price}</p>
                            </div>
                            <img src={item.image} alt="" width="200" />
                            <h1 className="product-title">{item.title}</h1>
                            <p className="product-description">{item.description}</p>
                            <button className="add-to-cart">ADD TO CART  <i className="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    ))
                }
            </div>
            <div className="buttons">
                <button>Order online</button>
                <button>Browse our menu</button>
            </div>

        </div>
    )
}

export default HotSales;