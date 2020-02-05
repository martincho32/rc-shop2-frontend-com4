class CardManager {

    key = "cartItems"

    static addProd(prodID) {

        let products = [];
        if (localStorage.getItem(key)) {
            products = JSON.parse(localStorage.getItem(key));
        }
        products.push({ 'productID': prodID});
        localStorage.setItem(key, JSON.stringify(products));
    }


    static removeProduct(prodID){

        let storageProducts = JSON.parse(localStorage.getItem(key));
        let products = storageProducts.filter(p => p.productID !== prodID );
        localStorage.setItem(key, JSON.stringify(products));
    }

}