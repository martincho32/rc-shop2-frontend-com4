class CardManager {

    static key = "cartItems"

    //Add one or more items to local storage
    static addProduct(prodID, quantity=1) {
        let products = [];
        if (CardManager.getItem(CardManager.key)) {
            products = CardManager.getItem(CardManager.key);
            if (CardManager.isItInCart(prodID)) {
                let prevQty = null;
                products.forEach(p => {
                    if (p.productID === prodID) { prevQty = p.quantity }
                });
                quantity += prevQty;
            }
        };
        CardManager.pushProductToArray({ 'productID': prodID, quantity }, products);
        CardManager.setItem(products);
    }

    static setProductQuantity = (prodID, quantity) => {
        const products = CardManager.getItem();
        CardManager.pushProductToArray({ 'productID': prodID, quantity }, products);
        CardManager.setItem(products);
    }

    static getQuantityById = (id) => {
        const items = CardManager.getItem();
        const found = items.find(item => item.productID === id);
        return found.quantity
    };

    //checks if item is already in cart
    static isItInCart(prodID) {
        let flag = false;
        const products = CardManager.getItem(CardManager.key);
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
        let storageProducts = CardManager.getItem(CardManager.key);
        let products = storageProducts.filter(p => p.productID !== prodID);
        CardManager.setItem(products);
    }

    //get local storage items
    static getItem() {
        let item = JSON.parse(localStorage.getItem(CardManager.key));
        return item;
    }

    //set local storage items
    static setItem(value) {
        let item = JSON.stringify(value);
        localStorage.setItem(CardManager.key, item);
    }

    //clears local storage
    static clearCart() {
        localStorage.removeItem(CardManager.key);
    }
}

export default CardManager;
