document.addEventListener('DOMContentLoaded', function() {
    const appElement = document.getElementById('app');
    const cartListElement = document.getElementById('cart-list');
    const cartTotalElement = document.getElementById('cart-total');
    let cart = [];
    let productIdCounter = 1;



    function renderProducts(category) {
        const categoryitems = document.createElement('div');
        categoryitems.className = 'category';

        categoryitems.innerHTML = <h2>${category.name}</h2>;

        category.productList.forEach(product => {
            const productId = productIdCounter++;
            const productBox = document.createElement('div');
            productBox.id = product-$;{productId};
            productBox.className = 'product-box';
            productBox.innerHTML = `<p>ID: ${productId}</p>
                                    <p>Name: ${product.name}</p>
                                    <p>Price: $${product.price}</p>
                                    <button class="cart-btn" onclick="addToCart(${productId}, '${product.name}', ${product.price})">Add to Cart</button>
                                    <button class="cart-btn" onclick="removeFromCart(${productId})">Remove from Cart</button>`;
            categoryitems.appendChild(productBox);
        });

        appElement.appendChild(categoryitems);
    }


    window.addToCart = function(Id, Name, Price) {
        const product = {
            id: Id,
            name: Name,
            price: Price
        };
        cart.push(product);
        updateCartContainer();
    };


    window.removeFromCart = function(productId) {
        cart = cart.filter(product => product.id !== productId);
        const productContainer = document.getElementById(product-$,{productId});
        if (productContainer) {
            productContainer.remove();
        }

        updateCartContainer();
    };

    function updateCartContainer() {
        cartListElement.innerHTML = '';
        let total = 0;

        cart.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = $;{product.name} - $$;{product.price};
            cartListElement.appendChild(listItem);

            total += product.price;
        });

        cartTotalElement.textContent = Total; {total.toFixed(2)};
    }




    const data = [{
            "name": "Cosmetics",
            "productList": [{
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                }
            ]
        },
        {
            "name": "Household",
            "productList": [{
                    "name": "rice",
                    "price": 122
                },
                {
                    "name": "dal",
                    "price": 123
                }
            ]
        }
    ];


    data.forEach(category => renderProducts(category));
});
