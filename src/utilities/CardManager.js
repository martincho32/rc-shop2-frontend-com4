class CardManager {

    static key = "cartItems"

    //Add one or more items to local storage
    static addProduct(prodID, quantity=1) {
        let products = [];
        if (this.getItem(this.key)) {
            products = this.getItem(this.key);
        };
        this.pushProductToArray({ 'productID': prodID, quantity}, products);
        this.setItem(products);
    }

    //checks if item is already in cart
    static isItInCart(prodID) {
        let flag = false;
        const products = this.getItem(this.key);
        products.forEach(p => {
            if (p === prodID) { flag = true }
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
        let storageProducts = this.getItem(this.key);
        let products = storageProducts.filter(p => p.productID !== prodID);
        this.setItem(products);
    }

    //get local storage items
    static getItem() {
        let item = JSON.parse(localStorage.getItem(this.key));
        return item;
    }

    //set local storage items
    static setItem(value) {
        let item = JSON.stringify(value);
        localStorage.setItem(this.key, item);
    }

    //clears local storage
    static clearCart() {
        localStorage.removeItem(this.key);
    }

}

export default CardManager;