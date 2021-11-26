
var nameRegExp = new RegExp("^[A-Za-z]{1,}$");
var phoneRegExp = new RegExp("^07[0-9]{9,9}$");

var webstore = new Vue({
    el: '#app',
    data: {
        showProduct: true,
        sitename: 'Extra Curricular',
        cartButton: 'Checkout',
        cart: [],
        order: {
            firstName: '',
            lastName: '',
            phoneNo: ''
        },
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
        addToCart: function () {
            this.cart.push(this.product.id);
            this.product.spaces--;
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        placeOrder() {
            alert('Order Placed!');
        }
    },
    computed: {
        cartCount: function () {
            return this.cart.length || '';
        },
        cartLenth: function () {
            return cartCount > 0;
        },
        canAdd: function () {
            return this.product.spaces > 0;
        },
        emptyFields() {
            return (!nameRegExp.test(this.order.firstName) || !nameRegExp.test(this.order.firstName) || !phoneRegExp.test(this.order.phoneNo))

        }
    }
});
