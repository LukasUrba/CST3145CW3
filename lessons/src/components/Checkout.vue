
<template>
    <div>
        <h2>Shopping Cart</h2>
        <div v-for='product in cart' :key="product.id">
            {{product.name}} <button>Remove</button>
        </div>
        <p>
            <strong>First Name: </strong> <input v-model="fName" />
            <strong>Last Name: </strong> <input v-model="lName" />
            <strong>Phone Number: </strong> <input v-model="phoneNo" />
            <button>Place Order</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Checkout",
        props: ['cart'],
        data() {
            return {
                fName: "",
                lName: "",
                phoneNo: ""
            }
        }
    }
</script>