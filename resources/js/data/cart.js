import { computed, reactive } from 'vue';

const cart = reactive({
    items: {},
    totalItems: computed(() => {
        let total = 0;
        for (let id in cart.items) { // Changed from items to cart.items
            total += cart.items[id].quantity;
        }
        return total;
    }),
    totalPrice: computed(() => {
        let total = 0;
        for (let id in cart.items) { // Changed from items to cart.items
            total += cart.items[id].product.price * cart.items[id].quantity;
        }
        return parseFloat(total.toFixed(2));
    }),
    add(product){
        if(cart.items[product.id]){
            cart.items[product.id].quantity++
        }else{
            cart.items[product.id] = {
                product,
                quantity:1
            }
        }
        cart.saveCartToLocalStorage()
    },
    remove(product){
        if(cart.items[product.id]){
            delete cart.items[product.id];
            cart.saveCartToLocalStorage();
        }
    },
    increase(product){
        if(cart.items[product.id]){
            cart.items[product.id].quantity++;
            cart.saveCartToLocalStorage();
        }
    },
    decrease(product){
        if(cart.items[product.id]){
            cart.items[product.id].quantity--;
            if(cart.items[product.id].quantity == 0){
                cart.remove(product);
            }
            cart.saveCartToLocalStorage();
        }
    },
    empty(){
        cart.items = {};
        cart.saveCartToLocalStorage();
    },
    saveCartToLocalStorage(){
        localStorage.setItem('cart', JSON.stringify(cart.items))
    },
    getCartFromLocalStorage(){
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        if (cartItems) {
            Object.assign(cart.items, cartItems);
        }
    },
    applyCoupon(couponCode){
        const discoountParcent = 10;
        const discountedPrice = totalPrice - (totalPrice * discoountParcent/100);
    }
});

cart.getCartFromLocalStorage();
export { cart };

