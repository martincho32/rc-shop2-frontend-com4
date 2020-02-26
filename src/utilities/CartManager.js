class CartManager {

    static key = "cartItems"

    //Add one or more items to local storage
    static addProduct(prodID, quantity=1) {
        let products = [];
        if (CartManager.getItem(CartManager.key)) {
            products = CartManager.getItem(CartManager.key);
            if (CartManager.isItInCart(prodID)) {
                let prevQty = null;
                products.forEach(p => {
                    if (p.productID === prodID) { prevQty = p.quantity }
                });
                quantity += prevQty;
            }
        };
        CartManager.pushProductToArray({ 'productID': prodID, quantity }, products);
        CartManager.setItem(products);
    }

    static setProductQuantity = (prodID, quantity) => {
        const products = CartManager.getItem();
        CartManager.pushProductToArray({ 'productID': prodID, quantity }, products);
        CartManager.setItem(products);
    }

    static getQuantityById = (id) => {
        const items = CartManager.getItem();
        const found = items.find(item => item.productID === id);
        return found.quantity
    };

    //checks if item is already in cart
    static isItInCart(prodID) {
        let flag = false;
        const products = CartManager.getItem(CartManager.key);
        products.forEach(p => {
            if (p.productID === prodID) { flag = true }
        });
        return flag;
    }

    //verify if a product is in cart and pushes it if it isn't
    static pushProductToArray(obj, arr) {
        const index = arr.findIndex((item) => item.productID === obj.productID);

        if (index === -1) {
            arr.push(obj);
        } else {
            arr[index] = obj;
        }
    }

    //remove a specific item from local storage
    static removeProduct(prodID) {
        let storageProducts = CartManager.getItem(CartManager.key);
        let products = storageProducts.filter(p => p.productID !== prodID);
        CartManager.setItem(products);
    }

    //get local storage items
    static getItem() {
        let item = JSON.parse(localStorage.getItem(CartManager.key));
        return item;
    }

    //set local storage items
    static setItem(value) {
        let item = JSON.stringify(value);
        localStorage.setItem(CartManager.key, item);
    }

    //clears local storage
    static clearCart() {
        localStorage.removeItem(CartManager.key);
    }
}

export default CartManager;
