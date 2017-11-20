const Sneakers = require('../models/Sneakers.js');
class Basket {

    constructor() {
        this.products = [];
    }

    add(item) {
        if (sneakers) {
            var index = this.products.findIndex(
                (p) => p.sneakers === sneakers
            );
            if (index === -1) {
                this.products.push({
                    sneakers: sneakers,
                    quantity: 1
                });
            } else {
                this.products[index].quantity += 1;
            }
        }
    }

    remove(index) {
        if (index < this.products.length) {
            this.products.splice(index, 1);
        }
    }
    print() {
        var index = 0;
        this.products.forEach(
            (p) => console.log(
                index++ + '. ' + p.sneakers.brand + '  ' + p.sneakers.model + (p.quantity * p.sneakers.price).toFixed(2)+ '\t = e'
            )
        );
        console.log('');
        var sum = this.getSumPrice();
        console.log('Total: ' + sum.toFixed(2)+' e');
    }

    getSumPrice() {
        var total = 0;
        this.products.forEach(
            (p) => total += (p.quantity * p.sneakers.price)
        );
        return total.toFixed(2);
    }

}

module.exports = Basket;
