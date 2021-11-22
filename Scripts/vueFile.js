
    var webstore = new Vue({
        el: '#app',
        data: {
            showProduct: true,
            sitename: 'Extra Curricular',
            cartButton: 'Checkout',
            cart: [],
            product: {
                id: 1001,
                name: "Maths",
                location: "London",
                price: 50,
                image: "Images/math.png",
                spaces: 5,
                button: "Add to cart"
            }
        },
        methods: {
            addToCart: function() {
                this.cart.push(this.product.id);
            },
            showCheckout() {
                this.showProduct = this.showProduct ? false : true;
            }
        },
        computed: {
            cartCount: function() {
                return this.cart.length || '';
            },
            canAdd: function() {
                return this.product.spaces > this.cartCount;
            }
        }
    });
