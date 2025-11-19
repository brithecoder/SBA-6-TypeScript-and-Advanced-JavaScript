"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
var taxRate;
function calculateTax(product) {
    if (product.category === "groceries") {
        taxRate = 3.00;
    }
    else {
        taxRate = 4.75;
    }
    var pricewithTax = product.price * (1 + taxRate / 100);
    return pricewithTax;
}
