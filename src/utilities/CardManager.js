class CardManager {

    static key = "cartItems"

    //Add one or more items to local storage
    static addProduct(prodID) {
        const products = [];
        if (getItem(CardManager.key)) {
            products = getItem(CardManager.key);
        }
        products.push({ 'productID': prodID });
        setItem([products]);
    }

    //remove a specific item from local storage
    static removeProduct(prodID) {
        let storageProducts = getItem(CardManager.key);
        let products = storageProducts.filter(p => p.productID !== prodID);
        setItem([products]);
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