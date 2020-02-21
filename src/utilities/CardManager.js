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
                    if (p.productID == prodID) { prevQty = p.quantity }
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
        console.log(id);
        return found.quantity
    };

    //checks if item is already in cart
    static isItInCart(prodID) {
        let flag = false;
        const products = CardManager.getItem(CardManager.key);
        products.forEach(p => {
            if (p.productID == prodID) { flag = true }
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

    // // runs spinner function after clicking on endPurchase button
    // static runSpinner = (activeSpinner) => {        
    //     const btnfinish = document.getElementById('endShopButton');
    //     btnfinish.disabled = true;        
    //     const spinnerblock = document.getElementById('spinner');
    //     const finishPurchaseAlert = document.getElementById('containerDiv');
    //     finishPurchaseAlert.className = 'd-none';
    //     if (activeSpinner) {
    //         spinnerblock.className ='spinner-border my-3 text-danger d-inline-block'; 
    //         const t2 = timer();
    //         t2.then(numRnd => {              
    //           view.runSpinner(false);
    //           const ms = document.getElementById('modal-msg');
    //           ms.innerText = getMSG(numRnd);
    //           $('#exampleModal').modal('show')
    //           btnfinish.disabled = false;
    //           localStorage.setItem('finishPurchase', numRnd);
    //         });
    //     } else {            
    //         spinnerblock.className ='spinner-border d-none';
    //     }    
    // }

    // static getMSG = typeMsg => { 
    //     let msg;
    //     const containerBtn = document.getElementById('containerDiv');
    //     containerBtn.className = 'container h-75 my-2 d-inline-block';
    //     if (typeMsg) {
    //         msg = 'La compra se realizó con Exito.';
    //     } else {
    //         msg = 'Se produjo un error. Intente más tarde.';
    //     }
    //     return msg;
    // }

    // static timer = () => {       
    //     const random = new Promise((resolve, reject) => {            
    //         setTimeout(() => {
    //             const a = getRnd(0,1);
    //             resolve(a);
    //         }, 3000);
    //     });
    //     return random;
    // }

    // static getRnd = (min, max) => {
    //     return Math.floor(Math.random() * (max - min + 1) ) + min;
    // }
}

export default CardManager;
