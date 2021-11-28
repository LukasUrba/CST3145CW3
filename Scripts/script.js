
var nameRegExp = new RegExp("^[A-Za-z]{1,}$");
var phoneRegExp = new RegExp("^07[0-9]{9,9}$");

var webstore = new Vue({
    el: '#app',
    data: {
        showProduct: true,
        sitename: 'Extra Curricular',
        cartButton: '<i class="fas fa-shopping-cart"></i> Checkout',
        searchTerm: '',
        sortStyle: '',
        cart: [],
        order: {
            firstName: '',
            lastName: '',
            phoneNo: ''
        },
        lessonButton: "<i class='fas fa-plus'></i> Add to cart",
        products: products,
        inCartButton: "Remove"
    },
    methods: {
        addToCart: function (product) {
            this.cart.push(product.id);
            product.spaces--;
        },
        canAdd: function (product) {
            return product.spaces > 0;
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        counter(id) {
            let counter = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    counter++;
                }
            }
            if (counter > 0) {
                return counter;
            }
        },
        showInCart(product, id) {
            let counter = this.counter(id);
            if (counter > 0) {
                return product.name;
            }
        },
        placeOrder() {
            alert('Order Placed!');
            location.reload();
        },
        removeFromCart(product) {
            const index = this.cart.indexOf(product.id);
            if (index > -1) {
                this.cart.splice(index, 1);
            }
            product.spaces++;
        }
    },
    computed: {
        cartCount: function () {
            return this.cart.length || '';
        },
        cartLenth: function () {
            return cartCount > 0;
        },
        emptyFields() {
            return (!nameRegExp.test(this.order.firstName) || !nameRegExp.test(this.order.firstName) || !phoneRegExp.test(this.order.phoneNo))
        },
        sortedProducts() {
            function compare(a,b) {
                if (a.price > b.price) return 1;
                if (a.price < b.price) return -1;
                return 0;
            }
            return this.products.sort(compare);
        },
        sortedProductsHigh() {
            function compare(a,b) {
                if (a.price < b.price) return 1;
                if (a.price > b.price) return -1;
                return 0;
            }
            return this.products.sort(compare);
        },
        alphabetProducts() {
            function compare(a,b) {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            }
            return this.products.sort(compare);
        },
        alphabetProductsZ() {
            function compare(a,b) {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
            }
            return this.products.sort(compare);
        },
        searchField() {
        
            return this.products.filter(product => {
                return (product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                        product.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                        product.price.toString().includes(this.searchTerm.toLowerCase()) ||
                        product.spaces.toString().includes(this.searchTerm.toLowerCase()))
            })
        }
    }
});
