class CardManager {

    key = "cartItems"
    
    //Add one or more items to local storage
    static addProduct(prodID) {
        const products = [];
        if (getItem(key)) {
            products = getItem(key);
        }
        products.push({ 'productID': prodID});
        setItem(products);
    }

    //remove a specific item from local storage
    static removeProduct(prodID){
        let storageProducts = getItem(key);
        let products = storageProducts.filter(p => p.productID !== prodID );
        setItem(products);
    }
    
    //get local storage items
    static getItem () {
        let item = JSON.parse(localStorage.getItem(key));
        return item;
    }
    
    //set local storage items
    static setItem (value) {
        let item = JSON.stringify(value);
        localStorage.setItem(key, item);
    }

    //clears local storage
    static clearCart () {
        localStorage.removeItem(key);
    }

}